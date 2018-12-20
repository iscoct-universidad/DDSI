const fs = require('fs');
const http = require('http');
const url = require('url');
const operacionesComunes = require('./operaciones');

const contenidoTabla = (con, nombreTabla) => {
	return new Promise((resolve, reject) => {
		let respuesta = "";
		let sql = "select * from " + nombreTabla + ";";
		
		con.query(sql, (err, result) => {
			if(err) {
				respuesta = "Hubo un error en la consulta a la tabla " + nombreTabla;
				console.log(respuesta);
				console.log("Error: ", err);
				
				reject(respuesta);
			} else {
				respuesta += "<h2>" + nombreTabla + "</h2>";
				respuesta += "<table class=\"table table-hover table-dark table-bordered\"><thead class=\"thead-dark\"><tr>";
				
				for(let x in result[0])
					respuesta += "<th scope=\"col\">" + x + "</th>";
				
				respuesta += "</tr></thead><tbody>";
				
				for(let y of result) {
					respuesta += "<tr>";
					
					for(let z in y)
						respuesta += "<td>" + y[z] + "</td>";
					
					respuesta += "</tr>";
				}
				
				respuesta += "</tbody></table>";
				
				resolve(respuesta);
			}
		});
	});
}

var server = http.createServer((req, res) => {
	var path = url.parse(req.url).pathname;
	var caminoALeer;

	while(path.indexOf('/') == 0)
		path = path.slice(1);

	if(path == "/" || path == "")
		caminoALeer = "index.html";
	else if("favicon.ico" == path)
		caminoALeer = "error";
	else if(path == "mostrarBD.html") {
		let respuesta = [];
	
		operacionesComunes.conectarse((err, con) => {
			if(err)
				console.log("Hubo un error al conectarse a la BD");
			
			let nombresTablas = [];
			let sql = "show tables;";
			
			con.query(sql, (err, result) => {
				for(let x of result)
					for(let y in x)
						nombresTablas.push(x[y]);
				
				let promesas = [];
				
				for(let z of nombresTablas)
					promesas.push(contenidoTabla(con, z));
					
				Promise.all(promesas).then((values) => {
					for(let x of values)
						respuesta += x;
					
					operacionesComunes.devolverRespuesta(res, respuesta);
				});
			});
		});
	} else
		caminoALeer = path;

	console.log("Camino a leer: ", caminoALeer);

	if (caminoALeer != "error" && caminoALeer != undefined) {
		fs.readFile(caminoALeer, "utf-8", (err, data) => {
			if(err)
				console.log("Hubo un error al leer el fichero");

			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(data);
			res.end();
		});
	}
});

server.listen(8080);
console.log("Servidor abierto en el puerto 8080");

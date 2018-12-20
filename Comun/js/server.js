const fs = require('fs');
const http = require('http');
const url = require('url');
const operacionesComunes = require('./operaciones');

const construirArrayBD = async (result) => {
	return new Promise((resolve, reject) => {
		let solucion = [];
		let sql;
		
		result.forEach((value, index, array) => {
			sql = "select * from " + value;
			
			con.query(sql, (err, tuplas) => {
				solucion.push(sql);
			});
		});
	
		console.log("Solución: ", solucion);
		
		resolve(solucion);
		reject("");
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
		let sql1 = "show tables;"
		let sql;
		let respuesta = "";
		
		operacionesComunes.conectarse((err, con) => {
			if(err)
				console.log("Hubo un error al conectarse a la BD en el server común");
			else {
				con.query(sql1, (err, result) => {
					let promesa = construirArrayBD;
					
					promesa.then((array) => {
						respuesta += "<ul>";
						
						for(let x of array)
							respuesta += "<li>" + x + "</li>"
						
						respuesta += "</ul>";
						
						operacionesComunes.devolverRespuesta(respuesta);
					});
				});
			}
		});
	} else
		caminoALeer = path;

	console.log("Camino a leer: ", caminoALeer);

	if (caminoALeer != "error") {
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

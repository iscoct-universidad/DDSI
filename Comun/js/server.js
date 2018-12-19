const fs = require('fs');
const http = require('http');
const url = require('url');

var server = http.createServer((req, res) => {
	var path = url.parse(req.url).pathname;
	var caminoALeer;
	
	if(path == "/")
		caminoALeer = "../../index.html";
	else
		caminoALeer = "../.." + path;
	
	console.log("Camino a leer: ", caminoALeer);
	
	fs.readFile(caminoALeer, "utf-8", (err, data) => {
		if(err)
			console.log("Hubo un error al leer el fichero");
			
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(data);
		res.end();
	});
});

server.listen(8080);
console.log("Servidor abierto en el puerto 80");

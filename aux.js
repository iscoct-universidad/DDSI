var http = require('http');
var creaTablas = require('./creacionTablas');

http.createServer(function(req, res) {
	tablas = creaTablas.leerTodasLasTablas();

	console.log("Hemos conseguido leer las tablas");
	console.log("Tipo devuelto: " + typeof(tablas));
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(tablas);
	res.end();

	console.log("Servidor creado y abierto");
}).listen(8080);

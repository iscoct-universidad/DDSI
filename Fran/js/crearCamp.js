var http = require('http');
var lectura = require('../../Comun/lecturaFicheros');
var operMark = require('./operacionesMarketing');

http.createServer(function(req, res) {
	console.log("El tipo de la petición es: " + typeof(req));

	for(var i in objeto) {
		console.log(i + " " + objeto[i]);
	}
}).listen(8081);

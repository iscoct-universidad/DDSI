var fs = require('fs');

var rutaEntidad		= './Entidad/';
var rutaFran 		= './Fran/';
var rutaNacho 		= './Nacho/';
var rutaIgnacio		= './Ignacio/';
var rutaJuanma		= './Juanma/';
var nombreFicheros 	= 'tablas.sql';
var nombreTuplas	= 'tuplas.sql';

function leer (ruta, nomFichero, nombre) {
	tablas = "";

	try {
		tablas = fs.readFileSync(ruta, function(err, data) {
			if(err) throw err;

			console.log("Leídos " + nomFichero + " de " + nombre);
		});
	} catch (e) {
		console.log("Hubo un error al leer " + nomFichero + " de " + nombre);
	}

	return tablas;
}

var leerTodasLasTablas = function() {
	tablas		= "";

	tablas	+= leer(rutaEntidad + nombreFicheros, nombreFicheros, "Entidad");
	tablas	+= leer(rutaFran + nombreFicheros, nombreFicheros, "Fran");
	tablas	+= leer(rutaNacho + nombreFicheros, nombreFicheros, "Nacho");
	tablas	+= leer(rutaIgnacio + nombreFicheros, nombreFicheros, "Ignacio");
	tablas	+= leer(rutaJuanma + nombreFicheros, nombreFicheros, "Juanma");

	return tablas;
}

var leerTodasLasTuplas = function() {
	tuplas		= "";

	tuplas += leer(rutaEntidad + nombreTuplas, nombreTuplas, "Entidad");
	tuplas += leer(rutaFran + nombreTuplas, nombreTuplas, "Fran");
	tuplas += leer(rutaNacho + nombreTuplas, nombreTuplas, "Nacho");
	tuplas += leer(rutaIgnacio + nombreTuplas, nombreTuplas, "Ignacio");
	tuplas += leer(rutaJuanma + nombreTuplas, nombreTuplas, "Juanma");

	return tuplas;
}

module.exports.leerTodasLasTablas = leerTodasLasTablas;
module.exports.leerTodasLasTuplas = leerTodasLasTuplas;

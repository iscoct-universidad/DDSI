"use strict"

var fs = require('fs');
var operacionesComunes = require('./operaciones');

var rutaEntidad		= '../sql/';
var rutaFran 		= '../../Fran/sql/';
var rutaNacho 		= '../../Nacho/sql/';
var rutaIgnacio		= '../../Ignacio/sql/';
var rutaJuanma		= '../../Juanma/sql/';

const leer = (ruta, nomFichero, callback) => {
	try {
		console.log("Ruta: ", ruta + nomFichero);
		
		fs.readFile(ruta + nomFichero, 'utf-8', function(err, data) {
			if(err) throw err;

			//console.log("Datos: ", data);
			
			callback(data);
		});
	} catch (e) {
		console.log("Hubo un error al leer " + ruta + nomFichero);
		console.log("Error: ", e);
	}
}

const crearTabla = (tabla) => {
	operacionesComunes.conectarse(function(err, con) {
		if(err)
			console.log("Error al intentar conectarse a la BD");
		else {
			con.query(tabla);
			con.end();
		}
	});
}

const crearTupla = (consulta) => {
	operacionesComunes.conectarse((err, con) => {
		if(err)
			console.log("Hubo un error al intentar conectarse con la BD");
			
		con.query(consulta, (err, result) => {
			if(err) {
				console.log("Hubo un error al crear las tuplas", consulta);
				console.log(err);
			}
			
			con.end();
		});
	});
}

const eliminarTodasLasTablas = () => {
	operacionesComunes.conectarse(function(err, con) {
		var oper = "drop table ";
		
		// Ponemos aquí nuestras tablas en cascada
		
		oper += "Promociona, Compara, ProductoCompetidor, CampaniaPublicitaria, Entidad, Producto";
		
		con.query(oper, (err, result) => {
			if(err)
				console.log("Hubo un error al intentar eliminar las tablas");
				
			con.end();
		});
	});
}

const crearTodasLasTablas = () => {
	leer(rutaEntidad,	"entidad.sql",			crearTabla);
	leer(rutaFran,		"campaniaPublicitaria.sql",	crearTabla);
	leer(rutaFran,		"productoCompetidor.sql",	crearTabla);
	leer(rutaIgnacio,	"producto.sql",			crearTabla);
	leer(rutaFran,		"promociona.sql",		crearTabla);
	leer(rutaFran,		"compara.sql",			crearTabla);
}

const crearTodasLasTuplas = () => {
	leer(rutaEntidad,	"tuplasEntidad.sql",		crearTupla);
	leer(rutaFran,		"tuplasCamp.sql",		crearTupla);
	leer(rutaFran,		"tuplasCompet.sql",		crearTupla);
	leer(rutaIgnacio,	"tuplasProd.sql",		crearTupla);
	leer(rutaFran,		"tuplasComp.sql",		crearTupla);
	leer(rutaFran,		"tuplasPromo.sql",		crearTupla);
}

//eliminarTodasLasTablas();
//crearTodasLasTablas();
crearTodasLasTuplas();

/*
module.exports.crearTabla = crearTabla;
module.exports.crearTodasLasTablas = crearTodasLasTablas;
*/

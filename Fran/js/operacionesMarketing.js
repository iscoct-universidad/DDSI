"use strict"

const mysql = require('mysql');
const operacionesComunes = require('../../Comun/js/operaciones');

/*
	callback será una función a la que le enviaremos 
	el resultado de la consulta realizada, y este se encargará de tratar con él
*/

var consultarCampania = (identificador, callback) => {		// Otra manera de declarar funciones
	var con = mysql.createConnection({
		host: 		"localhost",
		user: 		"iscoct",
		password: 	"Vamos a aprobar DDSI de 3",
		database:	"aux"
	});

	con.connect(function(err) {
		if(err)
			console.log("Hubo un error al conectarse con la BD");

		let sql = "select Entidad.nombre, CampaniaPublicitaria.Tipo, " + 
			"CampaniaPublicitaria.PublicoObjetivo from Entidad, CampaniaPublicitaria" +
			" where Entidad.CodEnt = \'" + identificador + "\' and " +
			" CampaniaPublicitaria.CodEnt = " + identificador + ";";

		con.query(sql, function(err, result) {
			if(err)
				console.log("Hubo un error al hacer la consulta de la " +
					" campaña publicitaria");
			else
				console.log("Realizada la consulta de la campaña publicitaria");
			
			callback(result);
			con.end();
		});
	});
};

/*
	Prueba de que consultarCampania está bien

var tratamientoConsulta = (consulta) => {
	var camposValores = consulta[0];
	
	for(let x in camposValores)
		console.log(x, ": ", camposValores[x]);
}

consultarCampania(5, tratamientoConsulta);

*/

var eliminarCampania = (identificador) => {
	operacionesComunes.eliminarTupla("Entidad", "CodEnt", identificador);
	operacionesComunes.eliminarTupla("CampaniaPublicitaria", "CodEnt", identificador);
}

/*
	Prueba de que eliminarCampania funciona correctamente

eliminarCampania(3);

*/

/*
	Para crear una campaña primero voy a consultar todos los códigos
	y voy a sacar el máximo identificador de tal manera que el identificador que utilicemos
	sea uno mayor al máximo de los CodEnt existentes
	
	Luego crearemos primero la Entidad y luego la Campaña publicitaria
*/

var crearCampania = (nombre, tipo, publicoObjetivo) => {
	var con = mysql.createConnection({
		host: 		"localhost",
		user: 		"iscoct",
		password: 	"Vamos a aprobar DDSI de 3",
		database:	"aux"
	});
	
	con.connect(function(err) {
		if(err)
			console.log("Hubo un error al conectarse con la BD");
		
		let sql = "select MAX(CodEnt) from Entidad";
		
		con.query(sql, function(err, result) {
			if(err)
				console.log("Hubo un error al hacer la consulta del máximo iden Entidad");
			else
				console.log("Realizada la consulta del máximo iden de la Entidad");
			
			// Tomamos el máximo lo transformamos en entero y le sumamos 1, 0 si no las tablas estaban vacías
			
			let maximo = Number(result[0]['MAX(CodEnt)']);
			let identificador = (maximo != null) ? Number(result[0]['MAX(CodEnt)']) + 1 : 0;
			let campos = ["CodEnt", "Nombre"];
			let valores = [identificador, nombre];
			
			operacionesComunes.insertarTupla("Entidad", campos, valores);
			
			campos = ["CodEnt", "Tipo", "PublicoObjetivo"];
			valores = [identificador, tipo, publicoObjetivo];
			
			operacionesComunes.insertarTupla("CampaniaPublicitaria", campos, valores);
		
			con.end();
		});
	});
}

/*
	...datos == Array de datos
	
	Pero para llamar a la función se puede hacer como
		crearComparacionCompetidor(x, y, z, ...);
	
	
var crearComparacionCompetidor = (...datos) => {

*/

/*
	Prueba de que crearCampania funciona
	
crearCampania("K", "K", "K");
*/

/*
	Para modificar la campaña habrá que poner CampaniaPublicitaria.x || Entidad.y
	para poder modificar los campos deseados
	
	Igual para las condiciones
*/

var modificarCampania = (campos, valores, camposCondiciones, condiciones) => {
	operacionesComunes.modificarTupla("Entidad, CampaniaPublicitaria", campos, valores, camposCondiciones, condiciones);
}

/*
	Prueba de que modificacionCampania funciona

var campos = ["Entidad.Nombre"];
var valores = "V";
var camposCondiciones = ["CampaniaPublicitaria.CodEnt = Entidad.CodEnt and CampaniaPublicitaria.Tipo"];
var condiciones = ["Z"];

modificarCampania(campos, valores, camposCondiciones, condiciones);
*/

var crearInfProdComp = (nombre, precio, rendimiento, informe, idProducto) => {
	var con = mysql.createConnection({
		host: 		"localhost",
		user: 		"iscoct",
		password: 	"Vamos a aprobar DDSI de 3",
		database:	"aux"
	});
	
	con.connect(function(err) {
		if(err)
			console.log("Hubo un error al intentar conectarse a la BD en crearInfProdComp");
			
		var sql = "select MAX(CodProdComp) from ProductoCompetidor;";
		
		con.query(sql, (err, result) => {
			if(err)
				console.log("Hubo un error al consultar el máximo de CodProdComo en ProductoCompetidor");
				
			let maximo = result[0]['MAX(CodProdComp)'];
			let idNuevo = Number(maximo) + 1;
			let valores = [idNuevo, precio, nombre, rendimiento];
			let campos = ["CodProdComp", "Precio", "Nombre", "Rendimiento"];
			
			operacionesComunes.insertarTupla("ProductoCompetidor", campos, valores);
			
			sql = "select MAX(CodComp) from Compara;";
			
			con.query(sql, (err, result) => {
				if(err)
					console.log("Hubo un error al consultar el máximo de CodComp en Compara");
					
				maximo = result[0]['MAX(CodComp)'];
				let idNuevoComp = Number(maximo) + 1;
				campos = ["CodProdComp", "CodProd", "CodComp", "Informe"];
				valores = [idNuevo, idProducto, idNuevoComp, informe];

				operacionesComunes.insertarTupla("Compara", campos, valores);
				con.end();
			});
		});
	});			
}

/*
	Prueba de que crearInfProdComp funciona

crearInfProdComp("A", "100", "0.4", "Es mejor el nuestro", "0");
*/

module.exports.modificarCampania = modificarCampania;
module.exports.crearCampania = crearCampania;
module.exports.eliminarCampania = eliminarCampania;
module.exports.consultarCampania = consultarCampania;
module.exports.crearInfProdComp = crearInfProdComp;

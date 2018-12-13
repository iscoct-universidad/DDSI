"use strict"

var mysql = require('mysql');

/*
	Ningún argumento debe tener ' ', por ejemplo, si el identificador es
	0, la función lo transforma a '0' para realizar la operación correctamente
*/

var eliminarTupla = function(nombreTabla, nombreIdentificador, identificador) {
	var con = mysql.createConnection({
		host: 		"localhost",
		user: 		"iscoct",
		password: 	"Vamos a aprobar DDSI de 3",
		database:	"aux"
	});

	con.connect(function(err) {
		if(err)
			console.log("Error al intentar conectar con la base de datos en eliminarTupla");

		var sql = "delete from " + nombreTabla + " where " + nombreIdentificador +
			" = \'" + identificador + "\'";

		con.query(sql, function(err, result) {
			if(err)
				console.log("Error al intentar eliminar la tupla con identificador, " +
					identificador + ", en la tabla, " + nombreTabla);
			else
				console.log("Se eliminó la tupla correctamente");
		});
		
		con.end();
	});
}

/*
	Prueba del método eliminarTupla

eliminarTupla("Entidad", "CodEnt", "2");
eliminarTupla("CampaniaPublicitaria", "CodEnt", "2");

*/

/*
	Campos debe ser un array donde cada uno de sus campos se corresponda con un campo
	en la tabla introducida
	Valores debe ser un array donde cada uno de sus campos se corresponda con el valor de cada
	uno de los campos introducidos
*/

var insertarTupla = function(nombreTabla, campos, valores) {
	var con = mysql.createConnection({
		host: 		"localhost",
		user: 		"iscoct",
		password: 	"Vamos a aprobar DDSI de 3",
		database:	"aux"
	});
	
	con.connect(function(err) {
		if(err)
			console.log("Error al intentar conectar con la base de datos en insertarTupla");

		var tam = campos.length;	// == valores.length
		var i;
		var sql = "insert into " + nombreTabla + "(" + campos[0];

		for(i = 1; i < tam; ++i)
			sql += "," + campos[i];
		
		sql += ") values (\'" + valores[0];

		for(i = 1; i < tam; ++i)
			sql += "\','" + valores[i];
		
		sql += "\');";
		
		console.log(sql);
		
		con.query(sql, function(err, result) {
			if(err) {
				console.log("Hubo un error al intentar introducir en la tabla", nombreTabla);
				console.log(err);
			}
			else
				console.log("Se insertó la tupla correctamente");
		});
		
		con.end();
	});
}
			
/*
	Prueba de la función insertar tupla funciona

var camposEntidad = ["CodEnt", "Nombre"];
var valoresEntidad = ["1", "B"];
var camposCampania = ["CodEnt", "Tipo", "PublicoObjetivo"];
var valoresCampania = ["1", "B", "B"];

insertarTupla("Entidad", camposEntidad, valoresEntidad);
insertarTupla("CampaniaPublicitaria", camposCampania, valoresCampania);
*/

/*
	Pre: campos.length = valores.length && camposCondiciones.length = condiciones.length
	
	campos: Campos a modificar sus valores (Array)
	valores: Valores de los campos a modificar (Array)
	camposCondiciones: Campos de los que se tiene que cumplir la condición (Array)
	condiciones: Valores a los campos que se tienen que cumplir (Array)
	
	TRUCO PARA PODER REUTILIZAR modificarTupla
	
	Si hay más de una tabla implicada se puede poner
	Si hay alguna condición extraordinaria podremos ponerla en el primer parámetro de camposCondiciones,
	ejemplo:
		update Entidad, CampaniaPublicitaria set Entidad.Nombre = 'X' where <condicionEspecial and> 
			<condicionesNormales>;
			
		Donde condicionEspecial puede ser igual a Entidad.CodEnt = CampaniaPublicitaria.CodEnt
		y condicionesNormales puede ser igual a Entidad.Nombre = 'Z'.
*/

var modificarTupla = (nombreTabla, campos, valores, camposCondiciones, condiciones) => {
	var con = mysql.createConnection({
		host: 		"localhost",
		user: 		"iscoct",
		password: 	"Vamos a aprobar DDSI de 3",
		database:	"aux"
	});
	
	con.connect(function(err) {
		if(err)
			console.log("Error al intentar conectarse a la BD en modificarTupla");
			
		var sql = "update " + nombreTabla + " set ";
		var i;
		var tam = campos.length;
		
		for(i = 0; i < tam; ++i)
			sql += campos[i] + " = \'" + valores[i] + "\'";
			
		sql += " where ";
		
		tam = camposCondiciones.length;
		
		for(i = 0; i < tam; ++i)
			sql += camposCondiciones[i] + " = \'" + condiciones[i] + "\'";
		
		sql += ";";
		
		con.query(sql, function(err, result) {
			if(err)
				console.log("Hubo un error al intentar modificar los datos de la tabla " 
					+ nombreTabla);
			else
				console.log("Modificada con éxito");
				
			con.end();
		});
	});
}

/*
	Prueba de que modificar tupla funciona correctamente
	
var campos = ["Nombre"];
var valores = ["A"];
var camposCondicion = ["CodEnt"];
var condiciones = ["1"];

modificarTupla("Entidad", campos, valores, camposCondicion, condiciones);
*/

/*
	Función para crear la conexión con nuestra base de datos
	
	callback:	Función que se llamará una vez terminada la conexión
			Debe recibir como parámetro la función callback, la conexión
			
	NO TESTEADO

var conectarConBD = (callback) => {
	var con = mysql.createConnection({
		host: 		"localhost",
		user: 		"iscoct",
		password: 	"Vamos a aprobar DDSI de 3",
		database:	"aux"
	});
	con.connect(callback(err, con));
}

*/

module.exports.modificarTupla = modificarTupla;
module.exports.eliminarTupla = eliminarTupla;
module.exports.insertarTupla = insertarTupla;

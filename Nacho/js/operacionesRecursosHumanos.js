"use strict"

const mysql = require('mysql');
const operacionesComunes = require('../../Comun/js/operaciones');

/*
	Para crear una campaña primero voy a consultar todos los códigos
	y voy a sacar el máximo identificador de tal manera que el identificador que utilicemos
	sea uno mayor al máximo de los CodEnt existentes

	Luego crearemos primero la Entidad y luego la Campaña publicitaria
*/

var crearEmpleado = (nombre, dni, direccion, telefono, sueldo, estado) => {
	operacionesComunes.conectarse(function(err, con) {
		if(err)
			console.log("Hubo un error al conectarse con la BD");

		operacionesComunes.tomarMaximo(con, "CodEnt", "Entidad", (err, maximo) => {
			if(err)
				console.log("Hubo un error al hacer la consulta del máximo iden Entidad");
			else
				console.log("Realizada la consulta del máximo iden de la Entidad");

			let identificador = maximo + 1;
			let campos = ["CodEnt", "Nombre"];
			let valores = [identificador, nombre];

			operacionesComunes.insertarTupla("Entidad", campos, valores);

			campos = ["CodEnt", "DNI", "Direccion", "Telefono", "Sueldo", "Estado"];
			valores = [identificador, dni, direccion, telefono, sueldo, estado];

			operacionesComunes.insertarTupla("Empleado", campos, valores);

			con.end();
		});
	});
}

/*
	Prueba de que crearCampania funciona

crearCampania("K", "K", "K");
*/


/*
	callback será una función a la que le enviaremos
	el resultado de la consulta realizada, y este se encargará de tratar con él
*/

var consultarCampania = (identificador, callback) => {		// Otra manera de declarar funciones
	operacionesComunes.conectarse(function(err, con) {
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
	operacionesComunes.conectarse(function(err, con) {
		if(err)
			console.log("Hubo un error al intentar conectarse a la BD en crearInfProdComp");

		operacionesComunes.tomarMaximo(con, "CodProdComp", "ProductoCompetidor", (err, maximo) => {
			if(err)
				console.log("Hubo un error al consultar el máximo de CodProdComo en ProductoCompetidor");

			let idNuevo = maximo + 1;
			let valores = [idNuevo, precio, nombre, rendimiento];
			let campos = ["CodProdComp", "Precio", "Nombre", "Rendimiento"];

			operacionesComunes.insertarTupla("ProductoCompetidor", campos, valores);

			operacionesComunes.tomarMaximo(con, "CodComp", "Compara", (err, maximo) => {
				if(err)
					console.log("Hubo un error al consultar el máximo de CodComp en Compara");

				let idNuevoComp = maximo + 1;
				campos = ["CodProdComp", "CodProd", "CodComp", "Informe"];

				if(informe = '')
					informe = "null";

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

module.exports.crearEmpleado = crearEmpleado;
module.exports.consultarEmpleado = consultarEmpleado;
module.exports.modificarEmpleado = modificarEmpleado;
module.exports.eliminarEmpleado = eliminarEmpleado;

module.exports.crearDepartamento = crearDepartamento;
module.exports.consultarDepartamento = consultarDepartamento;
module.exports.modificarEmpleado = modificarEmpleado;
module.exports.eliminarEmpleado = eliminarEmpleado;

//module.exports.crearInfProdComp = crearInfProdComp;
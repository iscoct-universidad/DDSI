var mysql = require('mysql');

var con = mysql.createConnection({
	host: 		"localhost",
	user: 		"iscoct",
	password: 	"Vamos a aprobar DDSI de 3",
	database:	""
});

var eliminarTupla = function(nombreTabla, nombreIdentificador, identificador) {
	con.connect(function(err) {
		if(err)
			console.log("Error al intentar conectar con la base de datos en eliminarTupla");

		var sql = "delete from " + nombreTabla + " where " + nombreIdentificador +
			" = \'" + identificador + "\'";

		con.query(sql, function(err, result) {
			if(err)
				console.log("Error al intentar eliminar la tupla con identificador, " +
				identificador + ", en la tabla, " + nombreTabla);
		});
	});
}

/*
	Campos debe ser un array donde cada uno de sus campos se corresponda con un campo
	en la tabla introducida
	Valores debe ser un array donde cada uno de sus campos se corresponda con el valor de cada
	uno de los campos introducidos
*/

var insertarTupla = function(nombreTabla, campos, valores) {
	con.connect(function(err) {
		if(err)
			console.log("Error al intentar conectar con la base de datos en insertarTupla");

		var tam = campos.size();	// == valores.size()

		var sql = "insert into " + nombreTabla + "(";

		for(i = 0; i < tam; ++i)
			sql += campos[i] + ",";
		
		sql += ") values (";

		for(i = 0; i < tam; ++i)
			sql += valores[i] + ",";
		
		sql += ");";
	});
}
			
module.exports.eliminarTupla = eliminarTupla;
modele.exports.insertarTupla = insertarTupla;

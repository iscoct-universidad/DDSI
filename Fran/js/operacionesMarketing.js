var mysql = require('mysql');

var con = mysql.createConnection({
	host: 		"localhost",
	user: 		"iscoct",
	password: 	"Vamos a aprobar DDSI de 3",
	database:	""
});

var consultarCampania = function(identificador) {
	con.connect(function(err) {
		if(err)
			console.log("Hubo un error al conectarse con la BD");

		var sql = "select Entidad.nombre, CampaniaPublicitaria.Tipo, " + 
			"CampaniaPublicitaria.PublicoObjetivo from Entidad, CampaniaPublicitaria" +
			" where Entidad.CodEnt = " + identificador + " and " +
			" CampaniaPublicitaria.CodEnt = " + identificador + ";";

		con.query(sql, function(err, result) {
			if(err)
				console.log("Hubo un error al hacer la consulta de la " +
					" campaña publicitaria");

			console.log("Realizada la consulta de la campaña publicitaria");
		});
	});
};

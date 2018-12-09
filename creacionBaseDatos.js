var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "iscoct",
  password: "Vamos a aprobar DDSI de 3",
  database: "aux"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from Entidad", function(err, result, fields) {
	if(err) throw err;
	console.log(result);
  });
});

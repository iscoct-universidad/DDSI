/* Códigos
	1001: Consultar empleado
	1002: Consultar departamento
	1003: Modificar empleado
	1004: Modificar departamento
	1005: Eliminar empleado
	1006: Eliminar departamento
*/
const http = require('http');
const url = require('url');
const operaciones = require('./operacionesRecursosHumanos');

var server = http.createServer((req, res) => {
	var uri = url.parse(req.url, true);
	var path = uri.pathname;
	var query = uri.query;
	var params = [];
	var solicitud = "Se ha solicitado la operación de ";
	var respuesta = "";

	while(path.indexOf('/') == 0)
		path = path.slice(1);

	params.push(path);

	for(let x in query)
		params.push(query[x]);

	console.log(params);
	console.log("Valor de los parámetros enviados: ", params);

	switch(Number(params[0])) {
		/*
			Los parámetros deben estar en el orden Nombre, Tipo, PublicoObjetivo en la emisión
			de la petición
		*/
		case 1000:
			console.log(solicitud + "crear una campaña publicitaria");
			operaciones.crearCampania(params[1], params[2], params[3]);

			respuesta += "Operación realizada con éxito";


			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(respuesta);
			res.end();
		break;
		case 1001:
			console.log(solicitud + "consultar una campaña publicitaria");

			operaciones.consultarCampania(params[1], function(consulta) {
				var camposValores = consulta[0];

				console.log("Consulta: ", consulta);
				respuesta += "La campaña publicitaria consultada contiene estos valores<br/><ul>";

				for(let x in camposValores)
					respuesta += "<li>" + x + ": " + camposValores[x] + "</li>";

				respuesta += "</ul>";

				//res.writeHead(200, {"Content-Type": "text/plain"}); // para testeo
				res.writeHead(200, {"Content-Type": "text/html"});
				res.write(respuesta);
				res.end();
			});
		break;
		/*
			Los parámetros deben estar en el orden
				Campos a modificar, valores a dar, campos de las condiciones precedido
					de condiciones especiales (ver modificarTupla), valores de los campos
					de las condiciones
			Ejemplo de url: http://localhost:8081/1002/1/1/Nombre/B/CampaniaPublicitaria.CodEnt=Entidad.CodEnt%20and%20Entidad.CodEnt/1
		*/

		case 1002:
			console.log(solicitud + "modificar una campaña publicitaria");

			let tam = params.length;
			let campos = [];
			let valores = [];
			let camposCondiciones;
			let valoresCondiciones = [];
			let paramsValidos = [];
			let i;
			let tamQuery = query.length;

			for(i = 1; i < tam - 1; ++i)
				if(params[i] != "") {
					valores.push(params[i]);
					paramsValidos.push(i);
				}

			let tamValidos = paramsValidos.length;

			i = 1;

			for(let x in query) {
				if(paramsValidos.includes(i))
					campos.push(x);

				++i;
			}

			camposCondiciones = ["CampaniaPublicitaria.CodEnt = Entidad.CodEnt and Entidad.CodEnt"];
			valoresCondiciones = [params[tam - 1]];

			console.log("Campos que se envían: ", campos);
			console.log("Valores que se envían: ", valores);
			console.log("Campos de las condiciones: ", camposCondiciones);
			console.log("Valores de las condiciones: ", valoresCondiciones);

			operaciones.modificarCampania(campos, valores, camposCondiciones, valoresCondiciones);

			respuesta += "Operación realizada con éxito";

			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(respuesta);
			res.end();
		break;
		case 1003:
			console.log(solicitud + "eliminar una campaña publicitaria");
			operaciones.eliminarCampania(params[1]);
			respuesta += "Operación realizada con éxito";

			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(respuesta);
			res.end();
		break;
		/*
			Los parámetros deben de seguir el orden,
				Nombre, Precio, Rendimiento, Informe, IdProducto
		*/

		case 1004:
			console.log(solicitud + "crear un informe de un producto competidor");
			console.log(params);
			operaciones.crearInfProdComp(params[1], params[2], params[3], params[4], params[5]);
			respuesta += "Operación realizada con éxito";

			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(respuesta);
			res.end();
		break;
		default:
			console.log("Código de operación no válido");
	}
});

server.listen(8084);
console.log("Servicio HTTP iniciado en el puerto 8081");

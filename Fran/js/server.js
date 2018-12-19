const http = require('http');
const url = require('url');
const operaciones = require('./operacionesMarketing');
const devolverRespuesta = require('../../Comun/js/operaciones').devolverRespuesta;

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
			
			devolverRespuesta(res, respuesta);
		break;
		case 1001:
			console.log(solicitud + "consultar una campaña publicitaria");
			
			operaciones.consultarCampania(params[1], function(consulta) {
				if(consulta.length > 0) {
					var camposValores = consulta[0];
		
					respuesta += "La campaña publicitaria consultada contiene estos valores<br/><ul>";
					
					for(let x in camposValores)
						respuesta += "<li>" + x + ": " + camposValores[x] + "</li>";
						
					respuesta += "</ul>";
				} else
					respuesta += "Introdujo un identificador que no existe en la base de datos";
					
				devolverRespuesta(res, respuesta);
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
			
			operaciones.modificarCampania(campos, valores, camposCondiciones, valoresCondiciones, (err, result) => {
				console.log("Error: ", err);
				console.log("Resultado: ", result);
				
				if (err)
					respuesta += "No insertó ningún campo a modificar";
				else if(result.affectedRows == 0)
					respuesta += "Introdujo un identificador que no se encuentra en la base de datos";
				else
					respuesta += "Se realizó la modificación de la tupla con éxito";
					
				devolverRespuesta(res, respuesta);
			});
		break;
		case 1003:
			console.log(solicitud + "eliminar una campaña publicitaria");
			operaciones.eliminarCampania(params[1]);
			respuesta += "Operación realizada con éxito";
			
			devolverRespuesta(res, respuesta);
		break;
		/*
			Los parámetros deben de seguir el orden, 
				Nombre, Precio, Rendimiento, Informe, IdProducto
		*/
		
		case 1004:
			console.log(solicitud + "crear un informe de un producto competidor");
		
			operaciones.crearInfProdComp(params[1], params[2], params[3], params[4], params[5]);
			respuesta += "Operación realizada con éxito";
			
			devolverRespuesta(res, respuesta);
		break;
		default:
			console.log("Código de operación no válido");
	}
});

server.listen(8081);
console.log("Servicio HTTP iniciado en el puerto 8081");

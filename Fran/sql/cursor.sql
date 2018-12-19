/* Cursor de recursos humanos - Ignacio Vellido Expósito */

-- Listado de los nombres de las campañas junto con el nomre del producto que promocionan  --
/*
DECLARE
  CURSOR nombres IS
    SELECT Empleados.Nombre, Empleados.DNI FROM Empleados, Pertenece
    WHERE Pertenece.CodDep = 1 AND Pertenece.CodEnt = Empleados.CodEnt;

    SELECT CampaniaPublicitaria.Nombre, Producto.Nombre FROM CampaniaPublicitaria,
      Producto WHERE Promociona.CodEnt = CampaniaPublicitaria.CodEnt AND
                    Producto.CodProd = Promociona.CodProd;

  NombreCampania VARCHAR2(50);
  NombreProducto VARCHAR2(50);

BEGIN
  OPEN nombres;

  FETCH nombres INTO NombreCampania, NombreProducto;

  DBMS_OUTPUT.PUT_LINE('Pareja de nombres');

  WHILE nombres%found LOOP
    DBMS_OUTPUT.PUT_LINE('Nombre de la campaña: ' || NombreCampania);
    DBMS_OUTPUT.PUT_LINE('Nombre del producto: ' || NombreProducto);
    FETCH nombres INTO NombreCampania, NombreProducto;
  END LOOP;

  CLOSE nombres;
END;
*/

-- Comparar productos con productos competidores --
-- mostrando el nombre del producto y el del competidor --


DELIMITER $$

CREATE PROCEDURE cursorFran (INOUT listaNombres varchar(4000))
BEGIN
	declare nombreProductoCompetidor varchar(50);
	declare nombreProducto varchar(50);
	declare fin integer default 0;
	declare nombres CURSOR for
		select Producto.Nombre, ProductoCompetidor.Nombre from ProductoCompetidor, Producto, Compara
		where Compara.CodProdComp = ProductoCompetidor.CodProdComp and Compara.CodProd = Producto.CodProd;

	-- Equivalente a %found en PL/SQL --
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET fin = TRUE;

	OPEN nombres;

	bucle: loop
		fetch nombres into nombreProducto, nombreProductoCompetidor;

		IF fin = 1 THEN
      LEAVE bucle;
    END IF;

		SET listaNombres =
				CONCAT(listaNombres, "Producto: ", nombreProducto," y Competidor: ",
							 nombreProductoCompetidor, "<br\\>");
	end loop;

	close nombres;
end$$

DELIMITER ;

/* Cursor de recursos humanos - Ignacio Vellido Expósito */

-- Listado de los nombres de las campañas junto con el nomre del producto que promocionan  --

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
/
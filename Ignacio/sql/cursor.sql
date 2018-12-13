/* Cursor de producción - Ignacio Barragán Lozano */

-- Listado de productos enviados a un distribuidor y su familia --

DECLARE
  CURSOR cProductos IS
    SELECT Producto.Nombre, Producto.Familia 
    FROM Producto, Envia
    WHERE Envia.CodEnt = 1 AND Envia.CodProd = Producto.CodProd;

  NombreProducto VARCHAR(20);
  FamiliaProducto VARCHAR(20);

BEGIN
  OPEN cProductos;

  FETCH cProductos INTO NombreProducto, FamiliaProducto;

  DBMS_OUTPUT.PUT_LINE('Los productos enviados al distribuidor 1 son:');

  WHILE cProductos%found LOOP
    DBMS_OUTPUT.PUT_LINE(NombreProducto || ' de la familia: ' || FamiliaProducto);
    FETCH cproductos INTO NombreProducto, FamiliaProducto;
  END LOOP;

  CLOSE cProductos;
END;
/

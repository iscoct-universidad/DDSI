/* Listado de tablas de producción - Ignacio Barragán Lozano */

DECLARE
  CodProd             VARCHAR2(9); 
  Nombre              VARCHAR2(20);  
  Familia             VARCHAR2(20); 
  Modelo              VARCHAR2(20); 
  Especificaciones    VARCHAR2(60);
  Piezas              VARCHAR(50);
  Stock               INTEGER;
  Precio              INTEGER;
  
  CodEnt              VARCHAR2(9);
  Nombre              VARCHAR2(20);
  
  Fecha               VARCHAR2(10);
  Cantidad            INTEGER;

  contador INTEGER;

BEGIN
  FOR contador IN 0..9 LOOP
    SELECT * INTO CodProd, Nombre, Familia, Modelo, Especificaciones, Piezas, Stock, Precio
    FROM Productos WHERE CodProd = contador;

    DBMS_OUTPUT.PUT_LINE('Tabla productos: (' || Codprod || ', ' || Nombre || ', '
                          || Familia || ', ' || Modelo || ', ' || Especificaciones || ', '
                          || Piezas || ', ' || to_char(Stock) || ', '|| to_char(Precio) || ')');
  END LOOP;

  FOR contador IN 0..9 LOOP
    SELECT * INTO CodEnt, Nombre
    FROM Distribuidores WHERE CodEnt = contador;

    DBMS_OUTPUT.PUT_LINE('Tabla distribuidores: (' || CodEnt || ', ' || Nombre || ')');
  END LOOP;

  FOR contador IN 0..4 LOOP
    SELECT * INTO CodProd, CodEnt, Fecha, Cantidad
    FROM Envia WHERE CodProd = contador;

    DBMS_OUTPUT.PUT_LINE('Tabla envia: (' || CodProd || ', ' || CodEnt || ', '
                          || Fecha || ', ' || to_char(Cantidad) ')');    
  END LOOP;
END;
/
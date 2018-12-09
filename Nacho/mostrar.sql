/* Listado de tablas de recursos humanos - Ignacio Vellido Expósito */

DECLARE
  CodEnt       VARCHAR2(9); 
  Nombre       VARCHAR2(30);  
  DNI          VARCHAR2(9); 
  Telefono     VARCHAR2(13); 
  Direccion    VARCHAR2(50);
  Sueldo       INTEGER;
  Estado       CHAR(1);
  ----------------------------------------------------------------------------
  CodDep       VARCHAR2(9);
  Localizacion VARCHAR2(50);
  Area         VARCHAR2(30);
  ----------------------------------------------------------------------------
  Fecha        VARCHAR2(10);

  contador INTEGER;

BEGIN
  FOR contador IN 0..9 LOOP
    SELECT * INTO CodEnt, Nombre, DNI, Telefono, Direccion, Sueldo, Estado
    FROM Empleados WHERE CodEnt = contador;

    DBMS_OUTPUT.PUT_LINE('Tabla empleados: (' || CodEnt || ', ' || Nombre || ', '
                          || DNI || ', ' || Telefono || ', ' || Direccion || ', '
                          || to_char(Sueldo) || ', '|| Estado || ')');
  END LOOP;

  FOR contador IN 0..9 LOOP
    SELECT * INTO CodDep, Localizacion, Area
    FROM Departamentos WHERE CodDep = contador;

    DBMS_OUTPUT.PUT_LINE('Tabla departamentos: (' || CodDep || ', ' || Localizacion || ', '
                          || Area || ')');
  END LOOP;

  FOR contador IN 0..4 LOOP
    SELECT * INTO CodEnt, CodDep, Fecha
    FROM Pertenece WHERE CodEnt = contador;

    DBMS_OUTPUT.PUT_LINE('Tabla pertence: (' || CodEnt || ', ' || CodDep || ', '
                          || Fecha || ')');    
  END LOOP;
END;
/
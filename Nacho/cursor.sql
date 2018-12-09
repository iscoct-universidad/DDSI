/* Cursor de recursos humanos - Ignacio Vellido Expósito */

-- Listado de empleados pertenecientes a un departamento y su DNI --

DECLARE
  CURSOR cEmpleados IS
    SELECT Empleados.Nombre, Empleados.DNI FROM Empleados, Pertenece
    WHERE Pertenece.CodDep = 1 AND Pertenece.CodEnt = Empleados.CodEnt;

  NombreEmpleado VARCHAR2(30);
  DNIEmpleado VARCHAR2(9);

BEGIN
  OPEN cEmpleados;

  FETCH cEmpleados INTO NombreEmpleado, DNIEmpleado;

  DBMS_OUTPUT.PUT_LINE('Los empleados pertenecientes al departamento 1 son:');

  WHILE cEmpleados%found LOOP
    DBMS_OUTPUT.PUT_LINE(NombreEmpleado || ' con DNI: ' || DNIEmpleado);
    FETCH cEmpleados INTO NombreEmpleado, DNIEmpleado;
  END LOOP;

  CLOSE cEmpleados;
END;
/
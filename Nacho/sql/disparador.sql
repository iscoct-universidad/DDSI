/* Disparador de recursos humanos - Ignacio Vellido Expósito */

/* Modificar departamento de un empleado si se inserta uno nuevo que lo incluye */

CREATE OR REPLACE TRIGGER modificarDepartamento
BEFORE INSERT ON Pertenece
FOR EACH ROW
BEGIN  
  DELETE FROM Pertenece
  WHERE CodEnt = :new.CodEnt AND Fecha = :new.Fecha;
END;
/
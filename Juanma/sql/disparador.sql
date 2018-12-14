/* Disparador de Finanzas - Juan Manuel Rubio Rodr\'edguez */

/* Insertar la fecha actual en caso de que no se introduzca una */

CREATE OR REPLACE TRIGGER insertarFecha
BEFORE INSERT ON IngresarPagar
FOR EACH ROW
DECLARE
  tFecha VARCHAR(10);
BEGIN
  SELECT Fecha INTO tFecha
  FROM IngresarPagar
  WHERE CodIngPag = :new.CodIngPag;

  IF tFecha != :new.Fecha THEN
    UPDATE Producto
    SET Fecha = TO_CHAR(SYSDATE, 'dd-mm-yyyy')
    WHERE CodIngPag = :new.CodIngPag;
  END IF;
END;

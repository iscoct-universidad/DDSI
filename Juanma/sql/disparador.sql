{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang3082{\fonttbl{\f0\fnil\fcharset0 Courier New;}{\f1\fnil\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.17134}\viewkind4\uc1 
\pard\f0\fs22 /* Disparador de Finanzas - Juan Manuel Rubio Rodr\'edguez */\par
\par
/* Insertar la fecha actual en caso de que no se introduzca una */\par
\par
CREATE OR REPLACE TRIGGER insertarFecha\par
BEFORE INSERT ON IngresarPagar\par
FOR EACH ROW\par
DECLARE\par
  tFecha VARCHAR(10);\par
BEGIN  \par
  SELECT Fecha INTO tFecha\par
  FROM IngresarPagar\par
  WHERE CodIngPag = :new.CodIngPag;\par
  \par
  IF tFecha != :new.Fecha THEN\par
    UPDATE Producto\par
    SET Fecha = TO_CHAR(SYSDATE, 'dd-mm-yyyy')\par
    WHERE CodIngPag = :new.CodIngPag;\par
  END IF;\par
END;\par
/\par

\pard\sa200\sl276\slmult1\f1\lang10\par
}
 
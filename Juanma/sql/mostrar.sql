{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang3082{\fonttbl{\f0\fnil\fcharset0 Courier New;}{\f1\fnil\fcharset0 Calibri;}{\f2\fswiss\fprq2\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.17134}\viewkind4\uc1 
\pard\f0\fs22 /* Listado de tablas de finanzas - Juan Manuel Rubio Rodr\'edguez */\f1\par
\par
DECLARE\par
\par
CodEnt       \tab VARCHAR2(9); \par
\par
Nombre     \tab   VARCHAR2(30);  \par
\par
DNI        \tab   VARCHAR2(9);\par
\par
Telefono  \tab    VARCHAR2(13); \par
\par
Direccion  \tab   VARCHAR2(50);\par
\par
Sueldo       \tab INTEGER;\par
\par
Estado       \tab CHAR(1);\par

\pard\nowidctlpar\sa200\sl276\slmult1\f0   \par
\f2\lang10 CodGes\tab\tab VARCHAR (9)\tab\par
CodEnt\tab\tab VARCHAR (9)\tab\par
CodIngPag\tab VARCHAR (10)\tab\par
\lang3082 Fecha  \tab\tab VARCHAR2(10)  \par
Importe\tab FLOAT,\par

\pard\f0\par
  \par
\f1   Fecha        VARCHAR2(10);\par
\par
  contador INTEGER;\par
\par
BEGIN\par
  FOR contador IN 0..9 LOOP\par
    SELECT * INTO CodEnt, Nombre, DNI, Telefono, Direccion, Sueldo, Estado\par
    FROM Gestor WHERE CodEnt = contador;\par
\par
    DBMS_OUTPUT.PUT_LINE('Tabla gestores: (' || CodEnt || ', ' || Nombre || ', '\par
                          || DNI || ', ' || Telefono || ', ' || Direccion || ', '\par
                          || to_char(Sueldo) || ', '|| Estado || ')');\par
  END LOOP;\par
\par
  FOR contador IN 0..4 LOOP\par
    SELECT * INTO CodGes, CodEnt, CodIngPag, Fecha, Importe\par
    FROM Ingresarpagar WHERE CodIngPag = contador;\par
\par
    DBMS_OUTPUT.PUT_LINE('Tabla Ingresos/pagos: (' || CodGes || ', ' || CodEnt || ', '\par
                          || CodIngPag || ' , ' || Fecha || ' , ' || Importe || ')');\par
  END LOOP;\lang10\par
}
 
{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang3082{\fonttbl{\f0\fnil\fcharset0 Courier New;}{\f1\fnil\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.17134}\viewkind4\uc1 
\pard\f0\fs22 /* Cursor de finanzas - Juan Manuel Rubio Rodr\'edguez */\par
\par
\par
DECLARE\par
  CURSOR cGestor IS\par
    SELECT Gestor.Nombre, Gestor.DNI FROM Gestor;\par
\par
  NombreGestor VARCHAR2(30);\par
  DNIGestor VARCHAR2(9);\par
\par
BEGIN\par
  OPEN cGestor;\par
\par
  FETCH cGestor INTO NombreGestor, DNIGestor;\par
\par
  DBMS_OUTPUT.PUT_LINE('Los gestores de la empresa son:');\par
\par
  WHILE cGestor%found LOOP\par
    DBMS_OUTPUT.PUT_LINE(NombreGestor || ' con DNI: ' || DNIGestor);\par
    FETCH cGestor INTO NombreGestor, DNIGestor;\par
  END LOOP;\par
\par
  CLOSE cGestor;\par
END;\par

\pard\sa200\sl276\slmult1\f1\lang10\par
}
 
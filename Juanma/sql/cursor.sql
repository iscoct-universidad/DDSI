/* Cursor de finanzas - Juan Manuel Rubio Rodr\'edguez */

DECLARE
  CURSOR cGestor IS
    SELECT Gestor.Nombre, Gestor.DNI FROM Gestor;

  NombreGestor VARCHAR2(30);
  DNIGestor VARCHAR2(9);

BEGIN
  OPEN cGestor;

  FETCH cGestor INTO NombreGestor, DNIGestor;

  DBMS_OUTPUT.PUT_LINE('Los gestores de la empresa son:');

  WHILE cGestor%found LOOP
    DBMS_OUTPUT.PUT_LINE(NombreGestor || ' con DNI: ' || DNIGestor);
    FETCH cGestor INTO NombreGestor, DNIGestor;
  END LOOP;

  CLOSE cGestor;
END;

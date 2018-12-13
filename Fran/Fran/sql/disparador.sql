/* Disparador de marketing -- Francisco José Cotán López */

/* 
	Sólo puede haber 1 campañia con un solo tipo de esta.
	Si no es así, elimina la campaña antigua
*/

CREATE OR REPLACE TRIGGER crearCampaniaPublicitaria
BEFORE INSERT ON CampaniaPublicitaria
FOR EACH ROW
BEGIN
  DELETE FROM CampaniaPublicitaria
  WHERE Tipo = :new.Tipo;
END;
/
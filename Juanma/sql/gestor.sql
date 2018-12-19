CREATE TABLE Gestor(
	CodEnt		INT		NOT NULL,
	Nombre		VARCHAR(30),
	DNI			VARCHAR(9)	NOT NULL,
	TELEFONO		VARCHAR(13)	NOT NULL,
	Direccion		VARCHAR(50),
	Sueldo		INT,
	Estado		CHAR(1),

	PRIMARY KEY (CodEnt),
	FOREIGN KEY (CodEnt)
	REFERENCES Empleados(CodEnt)

);


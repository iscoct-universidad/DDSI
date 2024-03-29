CREATE TABLE Gestor(
	CodEnt		VARCHAR(9)	NOT NULL	REFERENCES Empleados(CodEnt) PRIMARY KEY,
	Nombre		VARCHAR(30),
	DNI			VARCHAR(9)	NOT NULL,
	TELEFONO		VARCHAR(13)	NOT NULL,
	Direccion		VARCHAR(50),
	Sueldo		INT,
	Estado		CHAR(1),
);

CREATE TABLE Ingresarpagar (
	CodGest 	VARCHAR (9)	NOT NULL	REFERENCES Gestor(CodEnt),
	CodEnt	VARCHAR (9)	NOT NULL  	REFERENCES Entidad(CodEnt),
	CodIngPag	VARCHAR (10)	NOT NULL,
	Fecha		VARCHAR(10)  	NOT NULL,
	Importe FLOAT,
	PRIMARY KEY (CodEnt, CodIngPag)
);

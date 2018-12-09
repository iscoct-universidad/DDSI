/* Creación de tablas de recursos humanos - Ignacio Vellido Expósito */
-- Las PRIMARY KEYs son NOT NULL de por sí --

-- Recursos Humanos - Ignacio Vellido Expósito --

CREATE TABLE Empleados (
  CodEnt    VARCHAR2(9)   NOT NULL  REFERENCES Entidad(CodEnt)  PRIMARY KEY,
  Nombre    VARCHAR2(30),
  DNI       VARCHAR2(9)   NOT NULL,
  Telefono  VARCHAR2(13)  NOT NULL,
  Direccion VARCHAR2(50),
  Sueldo    INT,
  Estado    CHAR(1)
);

CREATE TABLE Departamentos (
  CodDep       VARCHAR2(9)    PRIMARY KEY,
  Localizacion VARCHAR2(50),
  Area         VARCHAR2(30)
);

CREATE TABLE Pertenece (
  CodEnt VARCHAR2(9)    NOT NULL  REFERENCES Empleados(CodEnt),
  CodDep VARCHAR2(9)    NOT NULL  REFERENCES Departamentos(CodDep),  
  Fecha  VARCHAR2(10)   NOT NULL,
  PRIMARY KEY (CodEnt, Fecha)
);
/ 

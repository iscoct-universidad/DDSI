/* Creación de tablas de recursos humanos - Ignacio Vellido Expósito */
-- Las PRIMARY KEYs son NOT NULL de por sí --

-- Recursos Humanos - Ignacio Vellido Expósito --

CREATE TABLE Empleados (
  CodEnt    INT          NOT NULL  REFERENCES Entidad(CodEnt)  PRIMARY KEY,
  Nombre    VARCHAR(30),
  DNI       VARCHAR(9)   NOT NULL,
  Telefono  VARCHAR(13)  NOT NULL,
  Direccion VARCHAR(50),
  Sueldo    INT,
  Estado    CHAR(1)
);

CREATE TABLE Departamentos (
  CodDep       INT          PRIMARY KEY,
  Localizacion VARCHAR(50),
  Area         VARCHAR(30)
);

CREATE TABLE Pertenece (
  CodEnt INT           NOT NULL  REFERENCES Empleados(CodEnt),
  CodDep VARCHAR(9)    NOT NULL  REFERENCES Departamentos(CodDep),
  Fecha  VARCHAR(10)   NOT NULL,
  PRIMARY KEY (CodEnt, Fecha)
);

CREATE TABLE Empleados (
  CodEnt    INT          NOT NULL  REFERENCES Entidad(CodEnt),
  Nombre    VARCHAR(30),
  DNI       VARCHAR(9)   NOT NULL,
  Telefono  VARCHAR(13)  NOT NULL,
  Direccion VARCHAR(50),
  Sueldo    INT,
  Estado    CHAR(1)
);

CREATE TABLE Pertenece (
  CodEnt INT           NOT NULL  REFERENCES Empleados(CodEnt),
  CodDep VARCHAR(9)    NOT NULL  REFERENCES Departamentos(CodDep),
  Fecha  VARCHAR(10)   NOT NULL,
  PRIMARY KEY (CodEnt, Fecha)
);

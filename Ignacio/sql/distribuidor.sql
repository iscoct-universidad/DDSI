CREATE TABLE Distribuidor (
  CodEnt       INT,
  Nombre VARCHAR(20)

  PRIMARY KEY (CodEnt),
  CONSTRAINT CodEnt_fk
    FOREIGN KEY (CodEnt)
    REFERENCES Entidad(CodEnt)
    ON DELETE CASCADE
);

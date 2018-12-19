CREATE TABLE Envia (
  CodProd INT    NOT NULL,
  CodEnt INT    NOT NULL,  
  Fecha  VARCHAR(10)   NOT NULL,
  Cantidad  INT   NOT NULL,

  PRIMARY KEY (CodProd, CodEnt, Fecha),
  CONSTRAINT CodProd_fk
    FOREIGN KEY (CodProd)
    REFERENCES Producto(CodProd)
    ON DELETE CASCADE,
  CONSTRAINT CodEnt_Envia_fk
    FOREIGN KEY (CodEnt)
    REFERENCES Distribuidor(CodEnt)
    ON DELETE CASCADE
);

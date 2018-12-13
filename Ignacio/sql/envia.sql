CREATE TABLE Envia (
  CodProd INT    NOT NULL  REFERENCES Producto(CodProd),
  CodEnt INT    NOT NULL  REFERENCES Distribuidor(CodEnt),  
  Fecha  VARCHAR(10)   NOT NULL,
  Cantidad  INT   NOT NULL,
  PRIMARY KEY (CodProd, CodEnt, Fecha)
);

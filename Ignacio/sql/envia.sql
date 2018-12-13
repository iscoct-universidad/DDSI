CREATE TABLE Envia (
  CodProd VARCHAR2(9)    NOT NULL  REFERENCES Producto(CodProd),
  CodEnt VARCHAR2(9)    NOT NULL  REFERENCES Distribuidor(CodEnt),  
  Fecha  VARCHAR2(10)   NOT NULL,
  Cantidad  INT   NOT NULL,
  PRIMARY KEY (CodProd, CodEnt, Fecha)
);

CREATE TABLE Compara (
  CodProdComp   VARCHAR(9)    NOT NULL  REFERENCES ProductoCompetidor(CodProdComp),
  CodProd       VARCHAR(9)    NOT NULL  REFERENCES Producto(CodProd),  
  CodComp       VARCHAR(10)   NOT NULL,
  Informe       VARCHAR(100),
  PRIMARY KEY (CodProdComp, CodProd, CodComp)
);

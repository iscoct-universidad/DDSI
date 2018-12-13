CREATE TABLE Promociona (
  CodEnt          VARCHAR(9) NOT NULL REFERENCES CampaniaPublicitaria(CodEnt),
  CodProd         VARCHAR(9) NOT NULL REFERENCES Producto(CodProd)
);

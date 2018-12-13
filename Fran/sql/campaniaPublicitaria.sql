CREATE TABLE CampaniaPublicitaria (
  CodEnt          INT   NOT NULL  REFERENCES Entidad(CodEnt),
  Tipo            VARCHAR(50)  NOT NULL,
  PublicoObjetivo VARCHAR(50)  NOT NULL
);

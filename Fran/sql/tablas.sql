/* Creación de tablas de marketing - Francisco José Cotán López */

CREATE TABLE CampaniaPublicitaria (
  CodEnt          VARCHAR2(9)   NOT NULL  REFERENCES CampaniaPublicitaria(CodEnt)  PRIMARY KEY,
  Tipo            VARCHAR2(50)  NOT NULL,
  PublicoObjetivo VARCHAR2(50)  NOT NULL
);

CREATE TABLE Promociona (
  CodEnt          VARCHAR2(9) NOT NULL REFERENCES CampaniaPublicitaria(CodEnt),
  CodProd         VARCHAR2(9) NOT NULL REFERENCES Producto(CodProd)
);

CREATE TABLE ProductoCompetidor (
  CodProdComp   VARCHAR2(9)    PRIMARY KEY,
  Precio        REAL  NOT NULL,
  Nombre        VARCHAR2(50) NOT NULL,
  Rendimiento   REAL
);

CREATE TABLE Compara (
  CodProdComp   VARCHAR2(9)    NOT NULL  REFERENCES ProductoCompetidor(CodProdComp),
  CodProd       VARCHAR2(9)    NOT NULL  REFERENCES Producto(CodProd),  
  CodComp       VARCHAR2(10)   NOT NULL,
  Informe       VARCHAR2(100),
  PRIMARY KEY (CodProdComp, CodProd, CodComp)
);

/ 

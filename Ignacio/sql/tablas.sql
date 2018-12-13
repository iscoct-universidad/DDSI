/* Creación de tablas de producción - Ignacio Barragán Lozano */

CREATE TABLE Producto (
  CodProd    INT  PRIMARY KEY,
  Nombre    VARCHAR(20) NOT NULL
  Familia    VARCHAR(20) NOT NULL,
  Modelo       VARCHAR(20)   NOT NULL,
  Especificaciones  VARCHAR(60),
  Piezas VARCHAR(50),
  Stock    INT,
  Precio    INT
);

CREATE TABLE Distribuidor (
  CodEnt       INT    PRIMARY KEY,
  Nombre VARCHAR(20)
);

CREATE TABLE Envia (
  CodProd INT    NOT NULL  REFERENCES Producto(CodProd),
  CodEnt VARCHAR(9)    NOT NULL  REFERENCES Distribuidor(CodEnt),  
  Fecha  VARCHAR(10)   NOT NULL,
  Cantidad  INT   NOT NULL,
  PRIMARY KEY (CodProd, CodEnt, Fecha)
);
/ 

/* Creación de tablas de producción - Ignacio Barragán Lozano */

CREATE TABLE Producto (
  CodProd    VARCHAR2(9)  PRIMARY KEY,
  Nombre    VARCHAR(20) NOT NULL
  Familia    VARCHAR2(20) NOT NULL,
  Modelo       VARCHAR2(20)   NOT NULL,
  Especificaciones  VARCHAR2(60),
  Piezas VARCHAR2(50),
  Stock    INT,
  Precio    INT
);

CREATE TABLE Distribuidor (
  CodEnt       VARCHAR2(9)    PRIMARY KEY,
  Nombre VARCHAR2(20)
);

CREATE TABLE Envia (
  CodProd VARCHAR2(9)    NOT NULL  REFERENCES Producto(CodProd),
  CodEnt VARCHAR2(9)    NOT NULL  REFERENCES Distribuidor(CodEnt),  
  Fecha  VARCHAR2(10)   NOT NULL,
  Cantidad  INT   NOT NULL,
  PRIMARY KEY (CodProd, CodEnt, Fecha)
);
/ 

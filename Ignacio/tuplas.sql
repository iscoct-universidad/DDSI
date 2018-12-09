INSERT INTO Producto VALUES ('0','A', '000', '0A', '', '', 6, 100);
INSERT INTO Producto VALUES ('1','B', '000', '0B', '', '', 8, 200);
INSERT INTO Producto VALUES ('2','C', '000', '0C', '', '', 3, 300);
INSERT INTO Producto VALUES ('3','D', '000', '0D', '', '', 5, 400);
INSERT INTO Producto VALUES ('4','E', '000', '0E', '', '', 9, 500);
INSERT INTO Producto VALUES ('5','F', '111', '1A', '', '', 0, 600);
INSERT INTO Producto VALUES ('6','G', '111', '1B', '', '', 0, 700);
INSERT INTO Producto VALUES ('7','H', '111', '1C', '', '', 0, 800);
INSERT INTO Producto VALUES ('8','I', '111', '1D', '', '', 0, 900);
INSERT INTO Producto VALUES ('9','J', '111', '1E', '', '', 0, 1000);

INSERT INTO Distribuidor VALUES ('0','A');
INSERT INTO Distribuidor VALUES ('1','B');
INSERT INTO Distribuidor VALUES ('2','C');
INSERT INTO Distribuidor VALUES ('3','D');
INSERT INTO Distribuidor VALUES ('4','E');
INSERT INTO Distribuidor VALUES ('5','F');
INSERT INTO Distribuidor VALUES ('6','G');
INSERT INTO Distribuidor VALUES ('7','H');
INSERT INTO Distribuidor VALUES ('8','I');
INSERT INTO Distribuidor VALUES ('9','J');

INSERT INTO Envia VALUES ('0', '1', 6, TO_CHAR(SYSDATE, 'dd-mm-yyyy'));
INSERT INTO Envia VALUES ('1', '2', 8, TO_CHAR(SYSDATE, 'dd-mm-yyyy'));
INSERT INTO Envia VALUES ('2', '6', 3, TO_CHAR(SYSDATE, 'dd-mm-yyyy'));
INSERT INTO Envia VALUES ('3', '1', 5, TO_CHAR(SYSDATE, 'dd-mm-yyyy'));
INSERT INTO Envia VALUES ('4', '6', 9, TO_CHAR(SYSDATE, 'dd-mm-yyyy'));

CREATE DATABASE gestion_projet;
USE gestion_projet;
CREATE TABLE logiciel (
    code_log VARCHAR(10) PRIMARY KEY,
    nom_log VARCHAR(30) NOT NULL,
    Prixlog VARCHAR(6) NOT NULL, 
    NumProj INT(8) FOREIGN KEY REFERENCES projet(NumProj)
);

CREATE TABLE projet (
    NumProj INT(8) PRIMARY KEY,
    NomProj VARCHAR(30) NOT NULL,
    DateDebut DATE NOT NULL,
    DateFin DATE NOT NULL
);

CREATE TABLE realisation (
    NumProj INT(8) FOREIGN KEY REFERENCES projet(NumProj),
    NumDev INT(8) FOREIGN KEY REFERENCES developpeur(NumDev)
);

CREATE TABLE developpeur (
    NumDev INT(8) PRIMARY KEY,
    NomDev VARCHAR(30) NOT NULL,
    Adresse VARCHAR(30) NOT NULL,
    TelDev VARCHAR(10) NOT NULL,
);

--inserer cinq valeurs dans chaque table
INSERT INTO logiciel VALUES ("L1", "logiciel1", 100, 1);
INSERT INTO logiciel VALUES ("L2", "logiciel2", 200, 2);
INSERT INTO logiciel VALUES ("L3", "logiciel3", 300, 3);
INSERT INTO logiciel VALUES ("L4", "logiciel4", 400, 4);
INSERT INTO logiciel VALUES ("L5", "logiciel5", 500, 5);

INSERT INTO projet VALUES (1, "projet1", "2020-01-01", "2020-01-02");
INSERT INTO projet VALUES (2, "projet2", "2020-01-01", "2020-01-02");
INSERT INTO projet VALUES (3, "projet3", "2020-01-01", "2020-01-02");
INSERT INTO projet VALUES (4, "projet4", "2020-01-01", "2020-01-02");
INSERT INTO projet VALUES (5, "projet5", "2020-01-01", "2020-01-02");

INSERT INTO realisation VALUES (1, 1);
INSERT INTO realisation VALUES (2, 2);
INSERT INTO realisation VALUES (3, 3);
INSERT INTO realisation VALUES (4, 4);
INSERT INTO realisation VALUES (5, 5);

INSERT INTO developpeur VALUES (1, "dev1", "adresse1", "0101010101");
INSERT INTO developpeur VALUES (2, "dev2", "adresse2", "0202020202");
INSERT INTO developpeur VALUES (3, "dev3", "adresse3", "0303030303");
INSERT INTO developpeur VALUES (4, "dev4", "adresse4", "0404040404");
INSERT INTO developpeur VALUES (5, "dev5", "adresse5", "0505050505");


ALTER TABLE developpeur ADD genre CHAR(1) NOT NULL;
ALTER TABLE logiciel MODIFY Prixlog DECIMAL(6,3) NOT NULL;
--retirer la colonne TelDev de la table developpeur
ALTER TABLE developpeur DROP COLUMN TelDev;
--afficher les noms, les logiciels et les prix des logiciels appartenant au projet ayant pour titre "gestion de stock" tries dans lordre croissant des prix
SELECT NomLog, PrixLog FROM logiciel WHERE NumProj = (SELECT NumProj FROM projet WHERE NomProj = "gestion de stock") ORDER BY PrixLog ASC;
--afficher le total des prix des logiciels du projet numero 10. Lors de laffichage le titre de la colonne sera "cout total des projets"
SELECT SUM(PrixLog) AS "cout total des projets" FROM logiciel WHERE NumProj = 10;
--afficher les projets qui ont plus de 5 logiciels
SELECT * FROM projet WHERE NumProj IN (SELECT NumProj FROM logiciel GROUP BY NumProj HAVING COUNT(*) > 5);
--afficher les numeros et les noms des developpeurs qui ont travaille sur tout les projets
SELECT NumDev, NomDev FROM developpeur WHERE NumDev IN (SELECT NumDev FROM realisation GROUP BY NumDev HAVING COUNT(*) = (SELECT COUNT(*) FROM projet));



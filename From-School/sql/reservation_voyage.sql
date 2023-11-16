CREATE DATABASE IF NOT EXISTS reservation_voyage DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE TABLE Client (
    NumCli int NOT NULL,
    NomCli varchar(30) NOT NULL,
    PrenomCli varchar(30) NOT NULL,
    EmailCli varchar(30) NOT NULL,
    NumCB int NOT NULL
)

CREATE TABLE Voyage(
    CodeVoyage INT NOT NULL,
    Destination VARCHAR(30) NOT NULL,
    Duree INT NOT NULL,
    Prix INT NOT NULL,
)

CREATE TABLE Reservation(
    NumCli FOREIGN KEY REFERENCES Client(NumCli),
    CodeVoyage FOREIGN KEY REFERENCES Client(CodeVoyage),
    DateRes DATE NOT NULL,
)

afficher nom, prenom et email des clients ayant une reservation en cours
SELECT NomCli, PrenomCli, EmailCli FROM Client WHERE NumCli IN (SELECT NumCli FROM Reservation WHERE DateRes > NOW())

--afficher les noms et prenoms et email des clients ayant aucune reservation en cours
SELECT NomCli, PrenomCli, EmailCli FROM Client WHERE NumCli NOT IN (SELECT NumCli FROM Reservation WHERE DateRes > NOW())

--afficher destination et liste des clients ayant reserves pour un voyage de plus de 10 jours et coutant moins de 1000 dinars DT
SELECT Destination, NomCli, PrenomCli, EmailCli FROM Voyage, Client, Reservation WHERE Voyage.CodeVoyage = Reservation.CodeVoyage AND Client.NumCli = Reservation.NumCli AND Duree > 10 AND Prix < 1000

--afficher les numeros de tout les clients ayant reserves sur tout les voyages proposes
SELECT NumCli FROM Reservation WHERE NumCli IN (SELECT NumCli FROM Reservation WHERE DateRes > NOW())
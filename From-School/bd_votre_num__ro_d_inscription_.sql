-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2024 at 01:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd<votre numéro d'inscription>`
--

-- --------------------------------------------------------

--
-- Table structure for table `participant`
--

CREATE TABLE `participant` (
  `IdParticipant` int(11) NOT NULL,
  `Mail` varchar(50) DEFAULT NULL,
  `Mdp` varchar(6) DEFAULT NULL,
  `Genre` char(1) DEFAULT NULL CHECK (`Genre` in ('M','F'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `NumQ` int(11) NOT NULL,
  `NumS` int(11) DEFAULT NULL,
  `Contenu` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`NumQ`, `NumS`, `Contenu`) VALUES
(1, 1, 'Les informations partagées sur les réseaux sociaux sont fiables'),
(2, 1, 'L\'usage des réseaux sociaux par les enfants doit être sous le contrôle parental'),
(3, 1, 'Les réseaux sociaux deviennent une nécessité pour les citoyens');

-- --------------------------------------------------------

--
-- Table structure for table `reponse`
--

CREATE TABLE `reponse` (
  `NumQ` int(11) NOT NULL,
  `NumS` int(11) NOT NULL,
  `IdParticipant` int(11) NOT NULL,
  `Rep` char(1) DEFAULT NULL CHECK (`Rep` in ('O','N','S'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sondage`
--

CREATE TABLE `sondage` (
  `NumS` int(11) NOT NULL,
  `Theme` varchar(50) NOT NULL,
  `DateDebut` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sondage`
--

INSERT INTO `sondage` (`NumS`, `Theme`, `DateDebut`) VALUES
(1, 'Les réseaux sociaux', '2019-05-01'),
(2, 'Les jeux vidéo', '2019-06-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `participant`
--
ALTER TABLE `participant`
  ADD PRIMARY KEY (`IdParticipant`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD KEY `NumS` (`NumS`),
  ADD KEY `NumQ` (`NumQ`);

--
-- Indexes for table `reponse`
--
ALTER TABLE `reponse`
  ADD KEY `NumQ` (`NumQ`),
  ADD KEY `NumS` (`NumS`),
  ADD KEY `IdParticipant` (`IdParticipant`);

--
-- Indexes for table `sondage`
--
ALTER TABLE `sondage`
  ADD PRIMARY KEY (`NumS`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `participant`
--
ALTER TABLE `participant`
  MODIFY `IdParticipant` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sondage`
--
ALTER TABLE `sondage`
  MODIFY `NumS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`NumS`) REFERENCES `sondage` (`NumS`);

--
-- Constraints for table `reponse`
--
ALTER TABLE `reponse`
  ADD CONSTRAINT `reponse_ibfk_1` FOREIGN KEY (`NumQ`) REFERENCES `question` (`NumQ`),
  ADD CONSTRAINT `reponse_ibfk_2` FOREIGN KEY (`NumS`) REFERENCES `sondage` (`NumS`),
  ADD CONSTRAINT `reponse_ibfk_3` FOREIGN KEY (`IdParticipant`) REFERENCES `participant` (`IdParticipant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

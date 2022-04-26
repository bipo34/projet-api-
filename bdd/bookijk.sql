-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 05 fév. 2022 à 14:39
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bookijk`
--

-- --------------------------------------------------------

--
-- Structure de la table `activities`
--

DROP TABLE IF EXISTS `activities`;
CREATE TABLE IF NOT EXISTS `activities` (
  `id_activities` int NOT NULL AUTO_INCREMENT,
  `city` varchar(50) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(250) NOT NULL,
  PRIMARY KEY (`id_activities`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `activities`
--

INSERT INTO `activities` (`id_activities`, `city`, `name`, `img`) VALUES
(1, 'Marseille', 'Vieux Port', 'img/activities/vieux_port.jpg'),
(2, 'Marseille', 'Fort de Pomègues', 'img/activities/fort_de_pomegues.jpg'),
(3, 'Marseille', 'Îles du Frioul', 'img/activities/iles_du_frioul.jpg'),
(4, 'Marseille', 'Parc National des Calanques', 'img/activities/parc_national_des_calanques.jpg'),
(5, 'Marseille', 'Notre-Dame-de-la-Garde', 'img/activities/notre_dame_de_la_garde.jpg'),
(6, 'Marseille', 'Parc Longchamp', 'img/activities/parc_longchamp.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `hosting`
--

DROP TABLE IF EXISTS `hosting`;
CREATE TABLE IF NOT EXISTS `hosting` (
  `id_hosting` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(250) NOT NULL,
  `price` int NOT NULL,
  `rate` enum('0','1','2','3','4','5') NOT NULL,
  `most_popular` int DEFAULT '0',
  PRIMARY KEY (`id_hosting`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `hosting`
--

INSERT INTO `hosting` (`id_hosting`, `name`, `img`, `price`, `rate`, `most_popular`) VALUES
(1, 'Auberge La Cannebière', 'img/hosting/house1.jpg', 25, '4', 0),
(2, 'Hôtel du port', 'img/hosting/house2.jpg', 52, '5', 0),
(3, 'Hôtel Les mouettes', 'img/hosting/house3.jpg', 76, '4', 0),
(4, 'Hôtel de la mer', 'img/hosting/house4.jpg', 46, '3', 0),
(5, 'Auberge Le Panier', 'img/hosting/house5.jpg', 23, '4', 0),
(6, 'Hôtel chez Amina', 'img/hosting/house6.jpg', 96, '5', 0),
(7, 'Hôtel Le soleil du matin', 'img/hosting/house7.jpg', 128, '5', 1),
(8, 'Au coeur de l\'eau Chambre d\'hôtes', 'img/hosting/house8.jpg', 71, '4', 1),
(9, 'Hôtel Tout bleu et Blanc', 'img/hosting/house9.jpg', 68, '4', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

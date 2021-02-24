SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `clinica` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `clinica`;

CREATE TABLE `cliente` (
  `dni` varchar(35) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cliente` (`dni`, `nombre`, `apellidos`) VALUES
('11131154F', 'Susana', 'Torio'),
('41143154D', 'Esteban', 'Dido'),
('42131154E', 'Rosa', 'Gutierrez'),
('49131154G', 'Jesús', 'Rodríguez'),
('87122154G', 'Lola', 'Mento'),
('98131154A', 'Armando', 'Jaleo');

CREATE TABLE `dieta` (
  `id` int(35) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tratamiento` varchar(100) NOT NULL,
  `duracion` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `dieta` (`id`, `nombre`, `tratamiento`, `duracion`) VALUES
(1, 'Tropical', 'Proteinas', '30'),
(2, 'Mediterranea', 'Aminoacidos', '20');

CREATE TABLE `dietaporpaciente` (
  `dniCliente` varchar(35) NOT NULL,
  `idDieta` int(35) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `dietaporpaciente` (`dniCliente`, `idDieta`, `estado`) VALUES
('98131154A', 1, 'si');

CREATE TABLE `dietista` (
  `apellidos` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `dni` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `dietista` (`apellidos`, `nombre`, `dni`) VALUES
('Manolo', 'Botero', '66131154A'),
('Viyuela', 'Pepe', '77131154A');

CREATE TABLE `dietistaporpaciente` (
  `dniDietista` varchar(35) NOT NULL,
  `dniCliente` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `dietistaporpaciente` (`dniDietista`, `dniCliente`) VALUES
('66131154A', '98131154A');


ALTER TABLE `cliente`
  ADD PRIMARY KEY (`dni`);

ALTER TABLE `dieta`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `dietaporpaciente`
  ADD UNIQUE KEY `idDieta` (`idDieta`),
  ADD UNIQUE KEY `dniCliente` (`dniCliente`);

ALTER TABLE `dietista`
  ADD PRIMARY KEY (`dni`);

ALTER TABLE `dietistaporpaciente`
  ADD PRIMARY KEY (`dniDietista`),
  ADD UNIQUE KEY `dniCliente` (`dniCliente`);


ALTER TABLE `dieta`
  MODIFY `id` int(35) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `dietaporpaciente`
  ADD CONSTRAINT `dietaporpaciente_ibfk_1` FOREIGN KEY (`dniCliente`) REFERENCES `cliente` (`dni`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietaporpaciente_ibfk_2` FOREIGN KEY (`idDieta`) REFERENCES `dieta` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `dietistaporpaciente`
  ADD CONSTRAINT `dietistaporpaciente_ibfk_1` FOREIGN KEY (`dniDietista`) REFERENCES `dietista` (`dni`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietistaporpaciente_ibfk_2` FOREIGN KEY (`dniCliente`) REFERENCES `cliente` (`dni`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

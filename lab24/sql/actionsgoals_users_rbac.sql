-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 15, 2023 at 03:58 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `actionsgoals`
--

-- --------------------------------------------------------

--
-- Table structure for table `actions`
--

CREATE TABLE `actions` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `img` varchar(400) DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `idtype` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `actions`
--

INSERT INTO `actions` (`id`, `name`, `img`, `description`, `idtype`, `created_at`) VALUES
(1, 'Pick up my sister', 'https://blog.directauto.com/wp-content/uploads/2019/07/School-Pick-Up-Drop-Off-Tips-for-Parents-3.jpg', 'Pick up my sister from school.', 1, '2023-03-13 00:26:02');

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE `goals` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `img` varchar(400) DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `idtype` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`id`, `name`, `img`, `description`, `idtype`, `created_at`) VALUES
(1, 'Read more books', 'https://www.oberlo.com/media/1612639204-image3.jpg', 'Read 20 more books by the end of the year.', 1, '2023-03-13 00:00:15'),
(3, 'adsadasdsa', 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80', 'adsdas', 2, '2023-03-13 16:45:57');

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`, `created_at`) VALUES
(1, 'privileges_goals', '2023-03-14 22:28:58'),
(2, 'privileges_actions', '2023-03-15 00:51:48'),
(3, 'all', '2023-03-15 03:53:10');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(400) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `descripcion`, `created_at`) VALUES
(1, 'admin', NULL, '2023-03-14 22:28:34'),
(2, 'actor_action', NULL, '2023-03-14 22:28:34'),
(3, 'actor_goal', NULL, '2023-03-14 22:28:34');

-- --------------------------------------------------------

--
-- Table structure for table `rol_privilegio`
--

CREATE TABLE `rol_privilegio` (
  `idRol` int(11) NOT NULL,
  `idPrivilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`idRol`, `idPrivilegio`, `created_at`) VALUES
(1, 3, '2023-03-14 22:29:27'),
(2, 1, '2023-03-14 22:29:27'),
(3, 2, '2023-03-14 22:29:35');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id`, `name`, `created_at`) VALUES
(1, 'URGENT', '2023-03-13 00:10:48'),
(2, 'NORMAL', '2023-03-13 00:10:48'),
(3, 'LOW', '2023-03-13 00:10:55');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(400) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `username` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password` varchar(400) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `username`, `password`, `created_at`) VALUES
(1, 'Gregorio Gus', 'gregs', '$2a$12$0PZftid4ZOt1.J6SY8i4juQexAPSQUAar1GQoMK6QhNckjUdZALoa', '2023-03-15 00:34:05'),
(2, 'Jane Doe', 'janedoe', '$2a$12$B5HhjJKZuT2oup0oNqaT2e6pRQrQyUq9FW/si0ZVRXtjCVR0mY4FC', '2023-03-15 00:34:36'),
(3, 'Joe Eyre', 'jeyre', '$2a$12$Lp10FTVbZbH0FKdLzRlxsOc5I9TjZY8SkPP4WMyKsd/kTQszSIuTm', '2023-03-15 00:34:57');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `idUsuario` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `usuario_rol`
--

INSERT INTO `usuario_rol` (`idUsuario`, `idRol`, `created_at`) VALUES
(1, 1, '2023-03-14 22:30:00'),
(2, 2, '2023-03-14 22:30:00'),
(3, 3, '2023-03-14 22:30:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actions`
--
ALTER TABLE `actions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_idfk_1` (`idtype`);

--
-- Indexes for table `goals`
--
ALTER TABLE `goals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idtype` (`idtype`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD PRIMARY KEY (`idRol`,`idPrivilegio`),
  ADD KEY `idPrivilegio` (`idPrivilegio`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actions`
--
ALTER TABLE `actions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `goals`
--
ALTER TABLE `goals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `actions`
--
ALTER TABLE `actions`
  ADD CONSTRAINT `type_idfk_1` FOREIGN KEY (`idtype`) REFERENCES `type` (`id`);

--
-- Constraints for table `goals`
--
ALTER TABLE `goals`
  ADD CONSTRAINT `goals_ibfk_1` FOREIGN KEY (`idtype`) REFERENCES `type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

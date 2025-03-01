  -- phpMyAdmin SQL Dump
  -- version 5.2.1
  -- https://www.phpmyadmin.net/
  --
  -- Host: 127.0.0.1
  -- Generation Time: Mar 01, 2025 at 04:47 AM
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
  -- Database: `task_manager`
  --

  -- --------------------------------------------------------

  --
  -- Table structure for table `tasks`
  --
  CREATE DATABASE task_manager ; 
  USE  task_manager ; 

  CREATE TABLE `tasks` (
    `id` int(11) NOT NULL,
    `title` varchar(255) NOT NULL,
    `description` text DEFAULT NULL,
    `assigned_to` varchar(100) DEFAULT NULL,
    `status` enum('To-Do','In Progress','Completed') DEFAULT 'To-Do',
    `due_date` date DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

  --
  -- Dumping data for table `tasks`
  --

  INSERT INTO `tasks` (`id`, `title`, `description`, `assigned_to`, `status`, `due_date`) VALUES
  (2, 'Project 1 ', 'FullStack DevelopMent', 'I_MS_', 'Completed', '2025-01-06');

  --
  -- Indexes for dumped tables
  --

  --
  -- Indexes for table `tasks`
  --
  ALTER TABLE `tasks`
    ADD PRIMARY KEY (`id`);

  --
  -- AUTO_INCREMENT for dumped tables
  --

  --
  -- AUTO_INCREMENT for table `tasks`
  --
  ALTER TABLE `tasks`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
  COMMIT;

  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

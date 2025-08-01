-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2025 at 12:09 PM
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
-- Database: `reactshooldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_new_student`
--

CREATE TABLE `add_new_student` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `dob` date NOT NULL,
  `roll` varchar(100) NOT NULL,
  `bloodGroup` varchar(5) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `StudentClass` varchar(150) NOT NULL,
  `section` varchar(50) DEFAULT NULL,
  `admissionId` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `bio` text DEFAULT NULL,
  `photo` longblob NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `add_new_student`
--

INSERT INTO `add_new_student` (`id`, `firstName`, `lastName`, `gender`, `dob`, `roll`, `bloodGroup`, `religion`, `email`, `StudentClass`, `section`, `admissionId`, `phone`, `bio`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Rohit', 'Kumar', 'Male', '2025-04-28', '1234', 'A+', 'Hindu', 'rohit@gmail.com', '1', 'A', 'rk123', '9835806788', 'Hi Rohit', 0x313734353637343831373333352e6a7067, '2025-04-26 13:40:17', '2025-04-26 13:40:17'),
(17, 'sfsd', 'sdfsdf', 'Male', '2025-04-29', '12345', 'B+', 'Islam', '12rohit@gmail.com', '1', 'B', 'rk1235', '9835806788', 'sdfdf', 0x313734353638363636383734312e6a7067, '2025-04-26 16:57:48', '2025-04-26 16:57:48'),
(18, 'das', 'sdsad', 'Male', '2025-04-29', '123456', 'B+', 'Islam', '125rohit@gmail.com', '2', 'A', 'rk1239', '9771023492', 'vxcx', 0x313734353638373437393833302e6a7067, '2025-04-26 17:11:19', '2025-04-26 17:11:19'),
(19, 'rohit', 'kumar', 'Female', '2025-04-28', '12344', 'A+', 'Hindu', 'rohit4@gmail.com', '2', 'A', 'rk123m', '9771023492', 'fgsgs', 0x313734353735353639383634302e6a7067, '2025-04-27 12:08:18', '2025-04-27 12:08:18'),
(20, 'err', 'were', 'Male', '2025-04-30', '12234', 'B+', 'Hindu', '44rohit@gmail.com', '3', 'A', 'rkp123', '9771023492', 'fgxb', 0x313734353735383136313336322e6a7067, '2025-04-27 12:49:21', '2025-04-27 12:49:21'),
(21, 'err', 'were', 'Female', '2025-04-29', '666', 'A+', 'Hindu', '445rohit@gmail.com', '1', 'B', 'rk1237', '9771023492', 'gndfnn', 0x313734353735383233373733382e6a7067, '2025-04-27 12:50:37', '2025-04-27 12:50:37'),
(22, 'sdf', 'dsff', 'Male', '2025-04-29', '1112345', 'B+', 'Christian', '33rohit@gmail.com', '2', 'A', 'adrk123', '9771023492', 'sfsfasd', 0x313734353836303432383231312e6a7067, '2025-04-28 17:13:48', '2025-04-28 17:13:48'),
(23, 'saurabh', 'dubey', 'Male', '2025-04-30', '123400', 'O+', 'Islam', '6rohit@gmail.com', '1', 'A', '6rk123', '9771023492', 'fvdvd', 0x313734353933373838353530392e6a7067, '2025-04-29 14:44:45', '2025-04-29 14:44:45'),
(24, 'ughk', 'bjkhb', 'Male', '2025-04-30', '1234rrr', 'B+', 'Islam', 'ghrohit@gmail.com', '3', 'Pink', 'nbrk123', '9771023492', 'ghg', 0x313734353934343538343635342e6a7067, '2025-04-29 16:36:24', '2025-04-29 16:36:24'),
(25, 'manisha', 'kumari', 'Female', '1998-01-07', 'manisha123', 'A+', 'Hindu', 'manisha@gaimll.com', '3', 'A', 'maniii123', '7461923893', 'i am maniaha', 0x313734353934353332303435362e6a7067, '2025-04-29 16:48:40', '2025-04-29 16:48:40'),
(26, 'cdxzz', 'xzczxc', 'Female', '2025-05-21', '1234566', 'AB+', 'Islam', '15rohit@gmail.com', '2', 'B', 'rk1234', '9771023492', 'xczxzc', 0x313734373131373833353030352e706e67, '2025-05-13 06:30:35', '2025-05-13 06:30:35'),
(27, 'asd', 'das', 'Male', '2025-05-21', '123456nn', 'A+', 'Christian', '12drohit@gmail.com', '1', 'A', 'rk123w2', '9771023492', 'vxcxvzxc', 0x313734373732313935383834312e6a706567, '2025-05-20 06:19:18', '2025-05-20 06:19:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` enum('admin','teacher','student','parents') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Admin', 'admin@example.com', '123456', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_new_student`
--
ALTER TABLE `add_new_student`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `admission_id` (`admissionId`),
  ADD UNIQUE KEY `roll` (`roll`),
  ADD KEY `admissionId` (`admissionId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_new_student`
--
ALTER TABLE `add_new_student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

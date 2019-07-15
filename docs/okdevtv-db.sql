# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: okdevtv.com (MySQL 5.5.5-10.0.38-MariaDB)
# Database: okdevtv
# Generation Time: 2019-07-15 03:04:36 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table article
# ------------------------------------------------------------

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `uri` varchar(2048) NOT NULL DEFAULT '/',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table tip
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tip`;

CREATE TABLE `tip` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(127) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `clientip` varchar(15) NOT NULL DEFAULT '127.0.0.1' COMMENT 'ip address',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `seq` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT '사용자아이디-email',
  `passwd` varchar(120) NOT NULL DEFAULT '' COMMENT '비밀번호',
  `created_at` datetime NOT NULL COMMENT '생성일시',
  `updated_at` datetime DEFAULT NULL COMMENT '갱신일시',
  PRIMARY KEY (`seq`),
  UNIQUE KEY `idx_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table user_candidate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_candidate`;

CREATE TABLE `user_candidate` (
  `seq` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '연번',
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT 'email',
  `uuid` varchar(40) NOT NULL DEFAULT '' COMMENT 'uuid',
  `reset` char(1) NOT NULL DEFAULT 'N' COMMENT '비번리셋',
  `created_at` datetime NOT NULL COMMENT '생성일시',
  `finish` char(1) NOT NULL DEFAULT 'N' COMMENT '완료',
  `finished_at` datetime DEFAULT NULL COMMENT '완료일시',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

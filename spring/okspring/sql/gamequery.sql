/* Setting */
GRANT ALL PRIVILEGES ON *.* TO javauser@localhost
   IDENTIFIED BY 'javadude' WITH GRANT OPTION;
create database javatest;

/*Table structure for table `game` */
drop table javatest.game;
CREATE TABLE javatest.`game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `choice` int(11) NOT NULL,
  `computerChoice` int(11) NOT NULL,
  `judgement` varchar(50) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/*Data for the table `game` */

insert into javatest.`game` values (1,1,1,'비겼습니다.','2012-03-06 06:49:57'),(2,2,2,'비겼습니다.','2012-03-06 06:50:00'),
(3,0,1,'컴퓨터가 이겼습니다.','2012-03-06 06:52:34'),(4,1,2,'컴퓨터가 이겼습니다.','2012-03-06 08:19:26'),
(5,0,1,'컴퓨터가 이겼습니다.','2012-03-06 08:20:06'),(6,1,0,'당신이 이겼습니다.','2012-03-06 08:20:13');


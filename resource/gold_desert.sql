# SQL-Front 5.1  (Build 4.16)

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40101 SET SQL_MODE='NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;
/*!40103 SET SQL_NOTES='ON' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;


# Host: localhost    Database: gold_desert
# ------------------------------------------------------
# Server version 5.5.5-10.1.31-MariaDB

#
# Source for table current_day
#

DROP TABLE IF EXISTS `current_day`;
CREATE TABLE `current_day` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_num` int(11) NOT NULL DEFAULT '0',
  `terrain` int(11) NOT NULL DEFAULT '0' COMMENT '0：无 1：沙漠 2 ：绿洲 3：村庄 4：大山 5：王陵',
  `district_weather` int(11) NOT NULL DEFAULT '0' COMMENT '0：无 1：高温 2 沙尘暴 3：高温+沙尘暴 4：晴天',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=latin1;

#
# Dumping data for table current_day
#

LOCK TABLES `current_day` WRITE;
/*!40000 ALTER TABLE `current_day` DISABLE KEYS */;
INSERT INTO `current_day` VALUES (1,0,0,0);
INSERT INTO `current_day` VALUES (4,1,1,1);
INSERT INTO `current_day` VALUES (5,1,2,1);
INSERT INTO `current_day` VALUES (6,1,5,1);
INSERT INTO `current_day` VALUES (7,1,3,4);
INSERT INTO `current_day` VALUES (8,1,4,4);
INSERT INTO `current_day` VALUES (9,2,1,1);
INSERT INTO `current_day` VALUES (10,2,2,1);
INSERT INTO `current_day` VALUES (11,2,3,4);
INSERT INTO `current_day` VALUES (12,2,4,4);
INSERT INTO `current_day` VALUES (13,2,5,4);
INSERT INTO `current_day` VALUES (14,3,1,4);
INSERT INTO `current_day` VALUES (15,3,2,4);
INSERT INTO `current_day` VALUES (16,3,3,4);
INSERT INTO `current_day` VALUES (17,3,4,4);
INSERT INTO `current_day` VALUES (18,3,5,4);
INSERT INTO `current_day` VALUES (19,4,1,4);
INSERT INTO `current_day` VALUES (20,4,2,4);
INSERT INTO `current_day` VALUES (21,4,3,4);
INSERT INTO `current_day` VALUES (22,4,4,4);
INSERT INTO `current_day` VALUES (23,4,5,4);
INSERT INTO `current_day` VALUES (24,5,1,4);
INSERT INTO `current_day` VALUES (25,5,2,4);
INSERT INTO `current_day` VALUES (26,5,3,1);
INSERT INTO `current_day` VALUES (27,5,4,1);
INSERT INTO `current_day` VALUES (28,5,5,1);
INSERT INTO `current_day` VALUES (29,6,1,1);
INSERT INTO `current_day` VALUES (30,6,2,1);
INSERT INTO `current_day` VALUES (31,6,3,4);
INSERT INTO `current_day` VALUES (32,6,4,4);
INSERT INTO `current_day` VALUES (33,6,5,1);
INSERT INTO `current_day` VALUES (34,7,1,1);
INSERT INTO `current_day` VALUES (35,7,2,1);
INSERT INTO `current_day` VALUES (36,7,3,4);
INSERT INTO `current_day` VALUES (37,7,4,4);
INSERT INTO `current_day` VALUES (38,7,5,1);
INSERT INTO `current_day` VALUES (39,8,1,4);
INSERT INTO `current_day` VALUES (40,8,2,4);
INSERT INTO `current_day` VALUES (41,8,3,4);
INSERT INTO `current_day` VALUES (42,8,4,4);
INSERT INTO `current_day` VALUES (43,8,5,4);
INSERT INTO `current_day` VALUES (44,9,1,4);
INSERT INTO `current_day` VALUES (45,9,2,4);
INSERT INTO `current_day` VALUES (46,9,3,4);
INSERT INTO `current_day` VALUES (47,9,4,4);
INSERT INTO `current_day` VALUES (48,9,5,4);
INSERT INTO `current_day` VALUES (49,10,1,4);
INSERT INTO `current_day` VALUES (50,10,2,4);
INSERT INTO `current_day` VALUES (51,10,3,1);
INSERT INTO `current_day` VALUES (52,10,4,1);
INSERT INTO `current_day` VALUES (53,10,5,4);
INSERT INTO `current_day` VALUES (54,11,1,3);
INSERT INTO `current_day` VALUES (55,11,2,3);
INSERT INTO `current_day` VALUES (56,11,3,4);
INSERT INTO `current_day` VALUES (57,11,4,4);
INSERT INTO `current_day` VALUES (58,11,5,1);
INSERT INTO `current_day` VALUES (59,12,1,2);
INSERT INTO `current_day` VALUES (60,12,2,2);
INSERT INTO `current_day` VALUES (61,12,3,4);
INSERT INTO `current_day` VALUES (62,12,4,4);
INSERT INTO `current_day` VALUES (63,12,5,1);
INSERT INTO `current_day` VALUES (64,13,1,4);
INSERT INTO `current_day` VALUES (65,13,2,4);
INSERT INTO `current_day` VALUES (66,13,3,4);
INSERT INTO `current_day` VALUES (67,13,4,4);
INSERT INTO `current_day` VALUES (68,13,5,1);
INSERT INTO `current_day` VALUES (69,14,1,4);
INSERT INTO `current_day` VALUES (70,14,2,4);
INSERT INTO `current_day` VALUES (71,14,3,4);
INSERT INTO `current_day` VALUES (72,14,4,4);
INSERT INTO `current_day` VALUES (73,14,5,4);
INSERT INTO `current_day` VALUES (74,15,1,4);
INSERT INTO `current_day` VALUES (75,15,2,4);
INSERT INTO `current_day` VALUES (76,15,3,1);
INSERT INTO `current_day` VALUES (77,15,4,1);
INSERT INTO `current_day` VALUES (78,15,5,4);
INSERT INTO `current_day` VALUES (79,16,1,1);
INSERT INTO `current_day` VALUES (80,16,2,1);
INSERT INTO `current_day` VALUES (81,16,3,4);
INSERT INTO `current_day` VALUES (82,16,4,4);
INSERT INTO `current_day` VALUES (83,16,5,4);
INSERT INTO `current_day` VALUES (84,17,1,1);
INSERT INTO `current_day` VALUES (85,17,2,1);
INSERT INTO `current_day` VALUES (86,17,3,4);
INSERT INTO `current_day` VALUES (87,17,4,4);
INSERT INTO `current_day` VALUES (88,17,5,1);
INSERT INTO `current_day` VALUES (89,18,1,4);
INSERT INTO `current_day` VALUES (90,18,2,4);
INSERT INTO `current_day` VALUES (91,18,3,4);
INSERT INTO `current_day` VALUES (92,18,4,4);
INSERT INTO `current_day` VALUES (93,18,5,1);
INSERT INTO `current_day` VALUES (94,19,1,4);
INSERT INTO `current_day` VALUES (95,19,2,4);
INSERT INTO `current_day` VALUES (96,19,3,4);
INSERT INTO `current_day` VALUES (97,19,4,4);
INSERT INTO `current_day` VALUES (98,19,5,1);
INSERT INTO `current_day` VALUES (99,20,1,4);
INSERT INTO `current_day` VALUES (100,20,2,4);
INSERT INTO `current_day` VALUES (101,20,3,1);
INSERT INTO `current_day` VALUES (102,20,4,1);
INSERT INTO `current_day` VALUES (103,20,5,4);
INSERT INTO `current_day` VALUES (104,21,1,3);
INSERT INTO `current_day` VALUES (105,21,2,3);
INSERT INTO `current_day` VALUES (106,21,3,4);
INSERT INTO `current_day` VALUES (107,21,4,4);
INSERT INTO `current_day` VALUES (108,21,5,4);
INSERT INTO `current_day` VALUES (109,22,1,2);
INSERT INTO `current_day` VALUES (110,22,2,2);
INSERT INTO `current_day` VALUES (111,22,3,4);
INSERT INTO `current_day` VALUES (112,22,4,4);
INSERT INTO `current_day` VALUES (113,22,5,4);
INSERT INTO `current_day` VALUES (114,23,1,4);
INSERT INTO `current_day` VALUES (115,23,2,4);
INSERT INTO `current_day` VALUES (116,23,3,4);
INSERT INTO `current_day` VALUES (117,23,4,4);
INSERT INTO `current_day` VALUES (118,23,5,1);
INSERT INTO `current_day` VALUES (119,24,1,4);
INSERT INTO `current_day` VALUES (120,24,2,4);
INSERT INTO `current_day` VALUES (121,24,3,4);
INSERT INTO `current_day` VALUES (122,24,4,4);
INSERT INTO `current_day` VALUES (123,24,5,1);
INSERT INTO `current_day` VALUES (124,25,1,4);
INSERT INTO `current_day` VALUES (125,25,2,4);
INSERT INTO `current_day` VALUES (126,25,3,1);
INSERT INTO `current_day` VALUES (127,25,4,1);
INSERT INTO `current_day` VALUES (128,25,5,1);
/*!40000 ALTER TABLE `current_day` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table district_weather_table
#

DROP TABLE IF EXISTS `district_weather_table`;
CREATE TABLE `district_weather_table` (
  `district_id` int(11) NOT NULL AUTO_INCREMENT,
  `terrain` int(11) DEFAULT '0' COMMENT '0：无 1：沙漠 2 ：绿洲 3：村庄 4：大山 5：王陵',
  `district_weather` int(11) DEFAULT '0' COMMENT '0：无  1：高温 2 沙尘暴 3：高温+沙尘暴 4：晴天',
  `team_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '0',
  PRIMARY KEY (`district_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

#
# Dumping data for table district_weather_table
#

LOCK TABLES `district_weather_table` WRITE;
/*!40000 ALTER TABLE `district_weather_table` DISABLE KEYS */;
INSERT INTO `district_weather_table` VALUES (1,0,0,'0');
INSERT INTO `district_weather_table` VALUES (2,1,4,'0');
INSERT INTO `district_weather_table` VALUES (3,1,4,'0');
INSERT INTO `district_weather_table` VALUES (4,1,4,'0');
INSERT INTO `district_weather_table` VALUES (5,1,4,'0');
INSERT INTO `district_weather_table` VALUES (6,1,4,'0');
INSERT INTO `district_weather_table` VALUES (7,1,4,'0');
INSERT INTO `district_weather_table` VALUES (8,1,4,'0');
INSERT INTO `district_weather_table` VALUES (9,1,4,'0');
INSERT INTO `district_weather_table` VALUES (10,1,4,'0');
INSERT INTO `district_weather_table` VALUES (11,1,4,'0');
INSERT INTO `district_weather_table` VALUES (12,3,1,'0');
INSERT INTO `district_weather_table` VALUES (13,1,4,'0');
INSERT INTO `district_weather_table` VALUES (14,1,4,'0');
INSERT INTO `district_weather_table` VALUES (15,1,4,'0');
INSERT INTO `district_weather_table` VALUES (16,2,4,'0');
INSERT INTO `district_weather_table` VALUES (17,1,4,'0');
INSERT INTO `district_weather_table` VALUES (18,1,4,'0');
INSERT INTO `district_weather_table` VALUES (19,3,1,'0');
INSERT INTO `district_weather_table` VALUES (20,1,4,'0');
INSERT INTO `district_weather_table` VALUES (21,2,4,'0');
INSERT INTO `district_weather_table` VALUES (22,5,1,'0');
INSERT INTO `district_weather_table` VALUES (23,1,4,'0');
INSERT INTO `district_weather_table` VALUES (24,1,4,'0');
INSERT INTO `district_weather_table` VALUES (25,1,4,'0');
INSERT INTO `district_weather_table` VALUES (26,1,4,'0');
INSERT INTO `district_weather_table` VALUES (27,1,4,'0');
INSERT INTO `district_weather_table` VALUES (28,1,4,'0');
INSERT INTO `district_weather_table` VALUES (29,1,4,'0');
INSERT INTO `district_weather_table` VALUES (30,1,4,'0');
INSERT INTO `district_weather_table` VALUES (31,3,1,'0');
INSERT INTO `district_weather_table` VALUES (32,1,4,'0');
INSERT INTO `district_weather_table` VALUES (33,3,1,'0');
INSERT INTO `district_weather_table` VALUES (34,1,4,'0');
INSERT INTO `district_weather_table` VALUES (35,3,1,'0');
INSERT INTO `district_weather_table` VALUES (36,3,1,'0');
INSERT INTO `district_weather_table` VALUES (37,1,4,'0');
INSERT INTO `district_weather_table` VALUES (38,4,1,'0');
/*!40000 ALTER TABLE `district_weather_table` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table group_table
#

DROP TABLE IF EXISTS `group_table`;
CREATE TABLE `group_table` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `group_money` int(11) DEFAULT '1000',
  `group_camel` int(11) DEFAULT '0',
  `group_max_camel` int(11) DEFAULT '1000',
  `group_food` int(11) DEFAULT '0',
  `group_compass` int(11) DEFAULT '0',
  `group_tent` int(11) DEFAULT '0',
  `group_water` int(11) DEFAULT '0',
  `group_gold` int(11) DEFAULT '0',
  `district_id` int(11) DEFAULT '1',
  `advice_num` varchar(50) DEFAULT '0,0,0,0',
  `group_now_day` int(11) DEFAULT '0',
  `team_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '0',
  `alive_flag` tinyint(1) DEFAULT '1' COMMENT '0:淘汰 1：活着',
  `lost_flag` int(1) DEFAULT '0' COMMENT '0:正常 大于0：迷失天数',
  `shop_flag` tinyint(1) DEFAULT '0' COMMENT '0:不允许购买 1:允许购买',
  `allow_get_water` tinyint(1) DEFAULT '0' COMMENT '0:不能取水 1：可以取水',
  `allow_next` tinyint(1) DEFAULT '0',
  `stay_flag` int(11) DEFAULT '0' COMMENT '0:允许离开 大于0：待原地几天',
  `allow_mountain_get_water` tinyint(1) DEFAULT '0' COMMENT '0：允许大山取水 1：不允许',
  `end_flag` int(3) DEFAULT '0',
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `group_name` (`group_name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

#
# Dumping data for table group_table
#

LOCK TABLES `group_table` WRITE;
/*!40000 ALTER TABLE `group_table` DISABLE KEYS */;
INSERT INTO `group_table` VALUES (1,'rocket',1000,0,1000,0,0,0,0,0,1,'0,0,0,0',0,'0',1,-1,0,0,0,0,0,0);
INSERT INTO `group_table` VALUES (9,'sky',1000,0,1000,0,0,0,0,0,1,'0,0,0,0',0,'12',1,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `group_table` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table team_day_table
#

DROP TABLE IF EXISTS `team_day_table`;
CREATE TABLE `team_day_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `team_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `now_day` int(11) DEFAULT '0',
  `finshed_group_num` int(3) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

#
# Dumping data for table team_day_table
#

LOCK TABLES `team_day_table` WRITE;
/*!40000 ALTER TABLE `team_day_table` DISABLE KEYS */;
INSERT INTO `team_day_table` VALUES (1,'0',0,0);
INSERT INTO `team_day_table` VALUES (2,'12',0,0);
/*!40000 ALTER TABLE `team_day_table` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table time_table
#

DROP TABLE IF EXISTS `time_table`;
CREATE TABLE `time_table` (
  `time_id` int(11) NOT NULL AUTO_INCREMENT,
  `day_num` int(11) NOT NULL,
  `group_name` varchar(20) NOT NULL,
  `water_changenum` int(11) DEFAULT '0',
  `food_changenum` int(11) DEFAULT '0',
  `tent_changenum` int(11) DEFAULT '0',
  `camel_changenum` int(11) DEFAULT '0',
  `max_camel_changenum` int(11) DEFAULT '0',
  `money_changenum` int(11) DEFAULT '0',
  `compass_changenum` int(11) DEFAULT '0',
  `gold_changenum` int(11) DEFAULT '0',
  `old_man` tinyint(1) DEFAULT '0',
  `wang_lin` int(11) DEFAULT '0',
  `team_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '0',
  PRIMARY KEY (`time_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

#
# Dumping data for table time_table
#

LOCK TABLES `time_table` WRITE;
/*!40000 ALTER TABLE `time_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_table` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table user_table
#

DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) CHARACTER SET gbk NOT NULL,
  `user_pwd` varchar(50) NOT NULL,
  `user_chracter` varchar(50) DEFAULT '999',
  `group_name` varchar(50) DEFAULT '999',
  `team_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '999',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

#
# Dumping data for table user_table
#

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,'zhangsan','123','1','rocket','0');
INSERT INTO `user_table` VALUES (2,'lisi','123','2','rocket','0');
INSERT INTO `user_table` VALUES (3,'m1','1234','0','0','0');
INSERT INTO `user_table` VALUES (6,'m2','123','0','0','12');
INSERT INTO `user_table` VALUES (13,'m3','1234','0','0','999');
INSERT INTO `user_table` VALUES (23,'wangwu','123','1','sky','12');
INSERT INTO `user_table` VALUES (25,'zhaoyi','123','3','rocket','0');
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

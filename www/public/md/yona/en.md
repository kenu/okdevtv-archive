# Yona
- SW project collaboration management tool
- http://yona.io
- GitHub-like interface + wiki-type bbs
- en, ko, jp, ru, uz languages
- project home
  * https://github.com/yona-projects/yona

## In AWS install Yona

### Prerequisite
* MariaDB
  * CentOS
```
sudo yum update -y
# for aws ec2 with 10.2.16
rpm -ev --nodeps mariadb-libs-5.5.56-2.amzn2.x86_64
wget https://rpmfind.net/linux/Mandriva/official/2010.0/x86_64/media/main/release/lib64boost5-1.39.0-2mdv2010.0.x86_64.rpm
rpm -iv --nodeps lib64boost5-1.39.0-2mdv2010.0.x86_64.rpm
sudo vi /etc/yum.repos.d/MariaDB.repo
```

    * MariaDB.repo
```
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.2/centos6-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

    * MariaDB config
```
sudo yum install MariaDB-server
```

```
sudo service mysql start
sudo mysql_secure_installation
```

```
mysql -uroot -p
```

  * Ubuntu https://downloads.mariadb.org/mariadb/repositories/#mirror=kaist&distro=Ubuntu


  * yona account, DB init

```
GRANT ALL PRIVILEGES ON yona.* TO yona@localhost
IDENTIFIED BY 'yonadan' WITH GRANT OPTION;

set global innodb_file_format = BARRACUDA;
set global innodb_large_prefix = ON;
create database yona DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_bin;
```

  * Server config
```
sudo vi /etc/my.cnf.d/server.cnf
```
    * ubuntu : `sudo vi /etc/mysql/my.cnf`

```
[mysqld]
collation-server=utf8mb4_unicode_ci
init-connect='SET NAMES utf8mb4'
character-set-server=utf8mb4
lower_case_table_names=1
innodb_file_format=barracuda
innodb_large_prefix=on
```

  * Client config
```
sudo vi /etc/my.cnf.d/mysql-clients.cnf
```

```
[mysql]
default-character-set=utf8mb4
```

* JDK 1.8 required
  * [install](/mib/java)

### Install Yona
* Yona installation

```
mkdir local && cd local
# MariaDB 10.2 required
wget https://github.com/yona-projects/yona/releases/download/v1.11.0/yona-v1.11.0-bin.zip

unzip yona-v1.11.0-bin.zip
ln -s yona-1.11.0/ yona
cd yona
bin/yona # first for unarchive folders
vi conf/application.conf
```
  * DB info in conf/application.conf

```
# MariaDB
db.default.driver=org.mariadb.jdbc.Driver
db.default.url="jdbc:mariadb://127.0.0.1:3306/yona?useServerPrepStmts=true"
db.default.user=yona
db.default.password="yonadan"
```

  * run yona
```
bin/yona
```
* open browser and register admin account
* http://ipaddress:9000

## Run Yona in Background

```
nohup bin/yona &
```

## Errors
* `[error] play - Specified key was too long; max key length is 767 bytes [ERROR:1071, SQLSTATE:42000]`
If you see this, delete MariaDB and reinstall
* `sudo yum uninstall -y MariaDB-server MariaDB-client`

## Yona in Windows
* env variables
```
SET YONA_HOME=c:\yona\yona-1.11.0
SET JAVA_OPTS=-Dyona.home=%YONA_HOME% -Dconfig.file=%YONA_HOME%\conf\application.conf -Dlogger.file=%YONA_HOME%\conf\application-logger.xml
```

## Yona restart shell
```
#!/bin/bash
source /home/ec2-user/.bash_profile

cd /home/ec2-user/local/yona
sudo kill -9 `cat RUNNING_PID`
sudo rm -rf RUNNING_PID
sleep 5
/usr/bin/nohup /home/ec2-user/local/yona/bin/yona &

```

## ref
* yona-1.4.1 (ko)
  * https://youtu.be/B3Q2FVXZWBM
* gmail security
  * http://okky.kr/article/343036

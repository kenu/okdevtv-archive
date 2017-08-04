# Yona
- 21세기 SW 협업 개발 환경
- http://yona.io
- GitHub의 설치형 + 프로젝트별 게시판
- 한국어, 영어, 일어 지원
- installation
  * https://github.com/yona-projects/yona

## In AWS install Yona

### Prerequisite
* MariaDB 설치
  * CentOS
```
sudo yum update -y
sudo vi /etc/yum.repos.d/MariaDB.repo
```

    * MariaDB.repo
```
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.0/centos6-amd64
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


  * yona 계정, DB 생성

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

* JDK 1.8 설치
  * [install](/mib/java)

### Install Yona
* Yona 설치

```
mkdir local && cd local
wget https://github.com/yona-projects/yona/releases/download/v1.6.1/yona-v1.6.1-bin.zip
unzip yona-v1.6.1-bin.zip
ln -s yona-1.6.1/ yona
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

## Err 발생시
* `[error] play - Specified key was too long; max key length is 767 bytes [ERROR:1071, SQLSTATE:42000]`
에러메시지를 만나면, MariaDB 삭제했다가 다시 설치
* `sudo yum uninstall -y MariaDB-server MariaDB-client`

## Yona in Windows
* 환경변수
```
SET YONA_HOME=c:\yona\yona-1.6.1
SET JAVA_OPTS=-Dyona.home=%YONA_HOME% -Dconfig.file=%YONA_HOME%\conf\application.conf -Dlogger.file=%YONA_HOME%\conf\application-logger.xml
```

## 참고
* yona-1.6.1 설치 영상
  * https://youtu.be/B3Q2FVXZWBM
* gmail 보안 설정 조정법
  * http://okky.kr/article/343036

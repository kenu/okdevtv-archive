# MariaDB
* Monty Widenius 2009/01/22
* MySQL과 동일한 API
* https://www.mariadb.org
* install MariaDB
  * `vi /etc/yum.repos.d/MariaDB.repo`

```
# MariaDB 10.0 CentOS repository list - created 2015-06-10 04:26 UTC
# http://mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.2/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```
 * CentOS 6.x는 `baseurl = http://yum.mariadb.org/10.2/centos6-amd64`


```
sudo yum install MariaDB-server MariaDB-client
sudo service mysql start
sudo mysql_secure_installation
```
* login
  * `mysql -uroot -p`

```
GRANT ALL PRIVILEGES ON devdb.* TO devuser@localhost
IDENTIFIED BY 'devpass' WITH GRANT OPTION;
```

* Read only account
```
GRANT SELECT, SHOW VIEW ON devdb.* TO devuser2@localhost
IDENTIFIED BY 'devpass';
```

* role account
```
GRANT TRIGGER, SELECT, SHOW VIEW ON devdb.* TO devuser2@localhost
IDENTIFIED BY 'devpass';
```

## DB backup
```
mysqldump -h localhost -u devuser -p devpass devdb > okdevdb-20180724.sql
# low CPU
mysqldump -h localhost -u devuser -p devpass --single-transaction --quick --lock-tables=false $DBNAME > okdevdb-20180724.sql
```

## Timezone
```
sudo cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime
sudo service mysql restart
```


## all process
```
show processlist;
```

## MariaDB on ubuntu
* https://downloads.mariadb.org/mariadb/repositories/#mirror=kaist
```
sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://ftp.kaist.ac.kr/mariadb/repo/10.1/ubuntu trusty main'
```

## MariaDB + node.js
* https://github.com/felixge/node-mysql
* https://github.com/mscdex/node-mariasql

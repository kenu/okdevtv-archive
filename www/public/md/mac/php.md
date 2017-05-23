# PHP on Mac
Last login: Thu Jul 14 15:22:02 on ttys000
➜  ~ sudo apachectl start
Password:
➜  ~ httpd -v
Server version: Apache/2.4.18 (Unix)
Server built:   Feb 20 2016 20:03:19
➜  ~ apachectl configtest
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using GWANGui-MacBook.local. Set the 'ServerName' directive globally to suppress this message
Syntax OK
➜  ~ cd /Library/WebServer/Documents/
➜  Documents ls -altr
total 72
-rw-r--r--  1 root  wheel     45 Jun 12  2007 index.html.en
drwxr-xr-x  5 root  wheel    170 Aug 23  2015 ..
-rw-r--r--  1 root  wheel  31958 Aug 23  2015 PoweredByMacOSXLarge.gif
-rw-r--r--  1 root  wheel   3726 Aug 23  2015 PoweredByMacOSX.gif
drwxr-xr-x  5 root  wheel    170 Aug 23  2015 .
➜  Documents sudo vi /etc/apache2/httpd.conf
➜  Documents sudo apachectl restart
➜  Documents sudo echo "<?php phpinfo(); ?>" > php.php
➜  Documents open http://localhost/php.php


## Ref
https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-osx-10-11-el-capitan/
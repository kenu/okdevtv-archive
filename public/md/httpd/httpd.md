# HTTPd a.k.a Apache Web Server
* https://httpd.apache.org

* 2.2.29 + php-5.2.17
```
wget http://archive.apache.org/dist/httpd/httpd-2.2.29.tar.gz
tar xvfz httpd-2.2.29.tar.gz
cd httpd-2.2.29/
yum groupinstall "Development Tools"
yum install openssl-devel -y

./configure --prefix=/usr/local/apache  --enable-so  --enable-cgi  --enable-info  --enable-rewrite  --enable-speling  --enable-usertrack  --enable-deflate  --enable-ssl  --enable-mime-magic
make && make install


wget http://museum.php.net/php5/php-5.2.17.tar.gz
tar xvfz php-5.2.17.tar.gz
cd php-5.2.17/

yum install libxml2-devel mysql-devel gdbm-devel -y 

./configure --with-apxs2=/usr/local/apache/bin/apxs  --with-mysql  --prefix=/usr/local/apache/php  --with-config-file-path=/usr/local/apache/php  --enable-force-cgi-redirect  --disable-cgi  --with-zlib  --with-gettext --with-gdbm --with-libdir=lib64

wget http://storage.googleapis.com/google-code-attachments/php52-backports/issue-16/comment-2/libxml29_compat.patch
patch -p0 < libxml29_compat.patch 

make

make install

cp -p php.ini-recommended /usr/local/apache/php/php.ini

cd /usr/local/apache/conf

vi httpd.conf

cd /usr/local/apache/htdocs/


```


```
/usr/local/apache/bin/httpd -v
/usr/local/apache/bin/httpd -t
/usr/local/apache/bin/httpd -V
```

## ref
* https://dan.drydog.com/apache2php.html
# PHP-FPM with nginx
* PHP FastCGI Process Manager
* on AWS

## install
```
sudo yum install nginx -y
sudo yum install php-fpm -y
```

```
sudo chown -R ec2-user:ec2-user /var/log/nginx /usr/share/nginx/html
echo "<?php phpinfo(); ?>" > /usr/share/nginx/html/info.php
```

## nginx config
```
sudo vi /etc/nginx/nginx.conf
```

```
        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        location ~ \.php$ {
            try_files $uri =404;
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
            fastcgi_pass   unix:/var/run/php-fpm.sock;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
```

## php-fpm config
```
sudo vi /etc/php-fpm.d/www.conf
```

```
;listen = 127.0.0.1:9000
listen = /var/run/php-fpm.sock

listen.owner = nginx
listen.group = nginx
listen.mode = 0666

user = nginx

group = nginx
```

```
sudo service php-fpm restart
sudo service nginx restart
```

`open http://ipaddress/info.php`


## 참고
* NGINX-PHP-MySQL 설치(ubuntu)
  * https://opentutorials.org/module/384/4332

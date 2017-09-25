# php

## php for windows
* https://nginx.org
* http://windows.php.net
  * x86 Non Thread Safe

### config
* conf/nginx.conf
```
location / {
    root   html;
    index  index.html index.htm index.php;
}
```

* Uncomment and change to nginx home path
```
# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
#
location ~ \.php$ {
    root           html;
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param  SCRIPT_FILENAME  D:/dev/nginx-1.13.4/html$fastcgi_script_name;
    include        fastcgi_params;
}
```

### start

```
start nginx
```

```
php-cgi.exe -b 127.0.0.1:9000
```

### check process

```
tasklist /fi "imagename eq nginx.exe"
```


* stop
```
nginx -s stop
```

  * close `php-cgi.exe` window


## Reserved Keywords

* Read Environment Variables
```
$_ENV["USER"]
```

* Web root path
```
$_SERVER['DOCUMENT_ROOT']
```


## ref
* 윈도우(Windows) nginx와 php 연동하기
  * http://homaki.tistory.com/
* nginx for Windows
  * http://nginx.org/en/docs/windows.html

## nginx 설치

```
sudo yum install nginx -y
sudo service nginx start
curl -i http://localhost
sudo chown -R ec2-user:ec2-user /var/log/nginx /usr/share/nginx/html
echo "<h1>Hello World</h1>" > /usr/share/nginx/html/hello.html
```

* http://아이피/
* http://아이피/hello.html

### nginx (Optional)

* CentOS는 `yum install nginx` 전에 `yum install epel-release` 필요
* CentOS 6.x에서 epel-release는 1.0.x 버전의 구형 nginx 설치됨
* CentOS 7.x에서 service는 systemctl로 바뀜  

```
### CentOS 7.x
[root@elk1 local]# service nginx start
Redirecting to /bin/systemctl start  nginx.service
[root@elk1 local]# systemctl start nginx
[root@elk1 local]# systemctl stop nginx
[root@elk1 local]# ps -ef | grep nginx
root     17933  9025  0 20:47 pts/0    00:00:00 grep --color=auto nginx

[root@elk1 local]# systemctl start nginx
[root@elk1 local]# ps -ef | grep nginx
root     17952     1  0 20:48 ?        00:00:00 nginx: master process /usr/sbinnginx
nginx    17953 17952  0 20:48 ?        00:00:00 nginx: worker process
nginx    17954 17952  0 20:48 ?        00:00:00 nginx: worker process
root     17956  9025  0 20:48 pts/0    00:00:00 grep --color=auto nginx
[root@elk1 local]#
```

### Ubuntu 14.x nginx 설치
```
sudo apt-get install nginx -y
  404  Not Found [IP: 54.179.105.228 80]
Err http://ap-northeast-2.ec2.archive.ubuntu.com/ubuntu/ trusty-updates/main nginx-core amd64 1.4.6-1ubuntu3.3
# 위 에러를 만나면
sudo sed -i 's/ap-northeast-2.ec2\.//g' /etc/apt/sources.list
sudo apt-get update
```
from: http://www.develople.com/blog/archives/108

```
sudo apt-get install nginx -y
sudo service nginx start
curl -i http://localhost
sudo chown -R ubuntu:ubuntu /var/log/nginx /usr/share/nginx/html
echo "<h1>Hello World</h1>" > /usr/share/nginx/html/hello.html
```


## nginx 설치(for letsencrypt)
```
su
# 개발 관련 패키지 설치
yum install development #CentOS 7.x

# 사용자id dev 생성
adduser dev
passwd dev

# nginx 설치, 시작
yum install epel-release #centos7.*
yum install nginx -y
service nginx start #centos6.*
systemctl start nginx #centos7.*
curl -i http://localhost

# 폴더 접근권한 변경
chown -R dev:dev /var/log/nginx /usr/share/nginx/html

# html 파일 생성
su - dev
echo "<h1>Hello World</h1>" > /usr/share/nginx/html/hello.html
```

## htpasswd 설정
```
sudo yum install httpd-tools
sudo htpasswd -c /etc/nginx/htpasswd.users kibanaadmin
sudo htpasswd /etc/nginx/htpasswd.users kenuheo
sudo vi /etc/nginx/nginx.conf
```

* `/server_name` 으로 검색해서 아래와 같이 수정

```
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  localhost;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/htpasswd.users;
```


```
sudo service nginx restart
```
## proxy
```
    auth_basic "Restricted Access";
    auth_basic_user_file /etc/nginx/htpasswd.users;
    location / {
        sendfile off;
        proxy_pass         http://127.0.0.1:9090;
        proxy_redirect     default;
        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_max_temp_file_size 0;
    }
```

## client ip forward to WAS
```
        proxy_set_header        X-Real-Ip       $remote_addr;
        proxy_set_header        X-Fowarded-For  $remote_addr;
```


## proxy 안되는 경우
* /var/log/nginx/error.log 파일 확인
```
2017/03/31 06:03:21 [crit] 1915#0: *8 connect() to 127.0.0.1:3000 failed (13: Permission denied) while connecting to upstream, client: 223.38.60.90, server: _, request: "GET /poweredby.png HTTP/1.1", upstream: "http://127.0.0.1:3000/poweredby.png", host: "104.197.6.69", referrer: "http://104.197.6.69/"
```
  * from: http://stackoverflow.com/questions/23948527/13-permission-denied-while-connecting-to-upstreamnginx
* 해결 방법
```
sudo setsebool -P httpd_can_network_connect 1
sudo service nginx restart
```


## centos6.* 경우
* epel의 nginx 버전이 `1.0.*`로 낮음
* ssl_stapling 옵션 지원 안됨.
```
nginx           x86_64           1.0.15-12.el6           @epel           1.1 M
```
* nginx repo 지정 후 설치
```
vi /etc/yum.repos.d/nginx.repo
```

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/6/$basearch/
gpgcheck=0
enabled=1
```

## 자동 시작
```
sudo chkconfig nginx on
```

## config

### gzip
```
http {
...
    keepalive_timeout  65;

    gzip  on;
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
...
}
```

### max file upload
```
client_max_body_size 200M;
```

## CentOS on GCP
* [err]
`connect() to 127.0.0.1:5601 failed (13: Permission denied) while connecting to upstream, client`

```
# grep nginx /var/log/audit/audit.log | audit2allow -M nginx
# yum install policycoreutils-python -y
# semodule -i nginx.pp
```

## 관련
* elk https://okdevtv.com/mib/elk
* letsencrypt https://okdevtv.com/mib/letsencrypt

## 참고
* http://nginx.org/
* https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elk-stack-on-ubuntu-14-04

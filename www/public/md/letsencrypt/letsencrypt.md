# LetsEncrypt SSL
* SSL 무료 서비스
  * Secure Socket Layer
* 세계적인 루트 인증기관이 도메인을 안전하다고 보증하는 서비스
  * DigiCert, VeriSign, Thawte, ...
  * 고비용, 도메인값 * 10, 대략 20만원/1년
* https://letsencrypt.org/
* https 프로토콜을 무료로 서비스
  * 네트워크 패킷을 암호화
  * 중간에 패킷을 가로채서 볼 수 없음
  * 보안성이 좋아짐
* 2016.01.02 현재 베타 서비스 중
* 90일마다 갱신이 필요함


## 필요사항
* 도메인 (예 okdevtest.net)
* 서버 (예 digitalocean.com 임대)
  * http://80port.com 도메인 서비스 추천
  * CentOS 7.1(python 2.7 built-in)로 예제 실행
  * python 2.6은 안됨(?)

## nginx 설치
* [nginx 설치](//okdevtv.com/mib/nginx)

## letencrypt 설치
* certbot 가이드 이용한 설치 가이드 추천
  * https://certbot.eff.org/

* AWS Linux일 경우
  * from: https://coderwall.com/p/e7gzbq/https-with-certbot-for-nginx-on-amazon-linux

```
curl -O https://dl.eff.org/certbot-auto
chmod +x certbot-auto
sudo mv certbot-auto /usr/local/bin/certbot-auto
sudo service nginx stop
sudo su -
```

```
certbot-auto certonly --standalone --debug -d okdevtest.net
```

## dhparams.pem
```
cd /etc/letsencrypt/archive/okdevtest.net
openssl dhparam -out dhparams.pem 2048
```

## 인증서 확인
```
# ls /etc/letsencrypt/live/okdevtest.net/
cert.pem  chain.pem  fullchain.pem  privkey.pem
```


## nginx 설정
```
vi /etc/nginx/nginx.conf
#또는
vi /etc/nginx/conf.d/default.conf
```

## WebSocket 추가
```
proxy_set_header Upgrade $http_upgrade; # ws
proxy_set_header Connection "upgrade"; # ws
```

* nginx.conf 교체, **domain 변경 필요**

```
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /var/run/nginx.pid;

# Load dynamic modules. See /usr/share/nginx/README.fedora.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    index   index.html index.htm;

    server {
        listen       80;
        listen       [::]:80;
        server_name  okdevtest.net;
#        return 301 https://$host$request_uri;



        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
                sendfile off;
                proxy_pass         http://127.0.0.1:8080;
                proxy_redirect     default;
                proxy_http_version 1.1;
                proxy_set_header   Host              $host;
                proxy_set_header   X-Real-IP         $remote_addr;
                proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
                proxy_set_header   X-Forwarded-Proto $scheme;
                proxy_cache_bypass $http_upgrade;
                proxy_max_temp_file_size 0;
        }

        # redirect server error pages to the static page /40x.html
        #
        error_page 404 /404.html;
            location = /40x.html {
        }

        # redirect server error pages to the static page /50x.html
        #
        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }

    }
    server {
        listen 443 ssl;
        server_name okdevtest.net;
        # add Strict-Transport-Security to prevent man in the middle attacks
        add_header Strict-Transport-Security "max-age=31536000";

        ssl_certificate /etc/letsencrypt/live/okdevtest.net/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/okdevtest.net/privkey.pem;
        ssl_stapling on;
        ssl_stapling_verify on;
        ssl_trusted_certificate /etc/letsencrypt/live/okdevtest.net/fullchain.pem;
        #ssl_dhparam /etc/letsencrypt/live/okdevtest.net/dhparams.pem;
        ssl_prefer_server_ciphers on;

ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';


        #charset koi8-r;
        access_log  /var/log/nginx/access.log  main;

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


        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }
    }

}
```

## nginx 설정 테스트
```
sudo nginx -t

nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful


```


## HTTP to HTTPS redirect
```
server {
	listen 80 default_server;
	listen [::]:80 default_server;
	server_name _;
	return 307 https://$host$request_uri;
}
```
* https://bjornjohansen.no/redirect-to-https-with-nginx

## update alert email
```
Hello,

Your certificate (or certificates) for the names listed below will expire in 20 days (on 31 Oct 16 03:55 +0000). Please make sure to renew your certificate before then, or visitors to your website will encounter errors.

okdevtv.com
www.okdevtv.com

For any questions or support, please visit https://community.letsencrypt.org/. Unfortunately, we can't provide support by email.
```

## nginx update expiry
```
service nginx stop && certbot-auto renew && service nginx start
```
* 무중단 갱신 가능 : http://www.phpschool.com/gnuboard4/bbs/board.php?bo_table=tipntech&wr_id=80590
  * thanks to @shjxenoside

## when stuck

* do it first

```
rm -rf ~/.local/share/letsencrypt
rm -rf /opt/eff.org/certbot/
certbot-auto renew --debug
unset PYTHON_INSTALL_LAYOUT
/opt/eff.org/certbot/venv/local/bin/pip install --upgrade certbot
certbot-auto renew --debug
service nginx stop
certbot-auto renew --debug
service nginx start
```

* such as zope.interface no module named interface

```
unset PYTHON_INSTALL_LAYOUT
/root/.local/share/letsencrypt/bin/pip install --upgrade certbot
/opt/eff.org/certbot/venv/local/bin/pip install --upgrade certbot
```

## when stuck 2
* `from cryptography.hazmat.bindings.openssl.binding import Binding
ImportError: No module named cryptography.hazmat.bindings.openssl.binding`

```
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/cryptography /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/cryptography
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/cryptography-2.0.2.dist-info /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/cryptography-2.0.2.dist-info
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/cffi /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/cffi
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/cffi-1.10.0.dist-info /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/cffi-1.10.0.dist-info
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/_cffi_backend.so /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/_cffi_backend.so
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/.libs_cffi_backend /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/.libs_cffi_backend
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/zope.interface-4.1.3-py2.7-nspkg.pth /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/zope.interface-4.1.3-py2.7-nspkg.pth
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/zope.interface-4.1.3-py2.7.egg-info /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/zope.interface-4.1.3-py2.7.egg-info
ln -s /opt/eff.org/certbot/venv/local/lib64/python2.7/dist-packages/zope/interface /opt/eff.org/certbot/venv/local/lib/python2.7/dist-packages/zope/interface
```
* https://github.com/certbot/certbot/issues/2544#issuecomment-358740272

## apache2.2.15 on CentOS 6.8
```
yum update -y
yum install git
yum install httpd
vi /etc/httpd/conf/httpd.conf
service httpd restart
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
cd /opt/letsencrypt/
yum install epel-release
yum install -y python-pip
pip install virtualenv
./letsencrypt-auto --apache -d www.okdevtest.net
```


## wireshark 패킷 테스트
* http vs https
* http://www.wireshark.org

## 크롬 https 도메인 캐쉬 삭제 방법
* 주소창에서 `chrome://net-internals/#hsts` 입력
* delete domain 에서 도메인 입력 후 delete 하면 http로 접속 가능

## 참고
* SSL Test
  * https://www.ssllabs.com/ssltest/analyze.html
* for windows
  * http://youtil.wo.tc/163
* 설치 동영상
  * https://youtu.be/sWl8W0ILUmE
* Let's Encrypt를 적용시켜 보았다
  * https://blog.korsnack.kr/entry/lets-encrypt-with-nginx
* Lets' Encrypt로 무료로 HTTPS 지원하기 - by Outsider
  * https://blog.outsider.ne.kr/1178
* https://danpalmer.me/blog/ssl-labs-grade-a
* https://www.gypthecat.com/how-to-install-a-ssl-certificate-on-nginx
* https://community.letsencrypt.org/t/getting-certbot-auto-to-include-the-x3-public-key/18472
* zope.interface issue
  * https://github.com/certbot/certbot/issues/2872
* 휴대폰으로 5분만에 letsencrypt 적용
  * https://synd.kr/articles/1814
* 에러 메시지와 처리
  * https://okdevtv.com/mib/letsencrypt/err

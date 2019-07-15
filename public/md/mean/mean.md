# DB에서 프론트까지 JS풀스택

## 절차
* 서버 임대
* 시스템 설치
* MEAN 서비스 테스트

## 서버 임대
* http://www.digitalocean.com/
* 클라우드 VM 생성 시간 1분
* SSD 20G
* IP, root 계정 비밀번호 이메일로 전달
* 시간당 0.007달러
* 샌프란시스코 서버

## 시스템 설치
### root 계정
* CentOS 6.5 64bit
* passwd
* yum update -y
* yum install -y wget

* git 설치(선택)
* yum install -y curl-devel zlib-devel.x86_64 perl-ExtUtils-MakeMaker.x86_64
* yum groupinstall -y "Development Tools"
* cd /tmp
* wget https://git-core.googlecode.com/files/git-1.9.0.tar.gz
* tar xvfz git-1.9.0.tar.gz
* cd git-1.9.0
* ./configure
* make
* make install

### dev 계정
* adduser dev
* passwd dev
* su - dev

* mkdir ~/local && cd ~/local
* wget http://nodejs.org/dist/v0.10.26/node-v0.10.26-linux-x64.tar.gz
* wget http://fastdl.mongodb.org/linux/mongodb-linux-x86_64-2.4.9.tgz
* PATH에 node.js, mongodb 추가
* grunt, bower 설치
```
npm install -g grunt-cli
npm install -g bower
```


### MEAN 서비스 설치
* 조건
  * git
  * node
  * mongod --dbpath=~/data/db
  * grunt
  * bower
* git clone http://github.com/linnovate/mean.git
* cd mean
* npm install
* grunt

## 서비스 테스트
* http://1xx.2xx.1xx.xx:3000

* 80port 연결
```sh
iptables -t nat -A PREROUTING -p tcp -d 1xx.2xx.1xx.xx --dport 80 -j REDIRECT --to-port 3000
```

# 계정 연결
## SNS
* 페이스북
* 트위터
* 구글플러스
* 깃허브
* 링크드인

### 페이스북
* https://developers.facebook.com
* APP_ID
* APP_SECRET

#### 절차
1. 앱 생성
2. 설정 > 플랫폼 추가 > 웹사이트
3. 사이트 URL

mean/config/env/development.js
```js
facebook: {
        clientID: '1417763...476376',
        clientSecret: 'a535v2.......adf68c53f41ae6c73b',
        callbackURL: 'http://okdevtv.com/auth/facebook/callback'
    },
```

### 깃허브
* https://github.com/settings/applications/



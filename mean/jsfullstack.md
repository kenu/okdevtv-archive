# DB에서 프론트까지 JS풀스택

## 절차
* 서버 임대
* 설치
* 서비스 테스트

## 서버 임대
http://www.digitalocean.com/
* 생성 시간 1분
* SSD 20G
* IP, root 계정 비밀번호 이메일로 전달
* 시간당 0.007달러
* 샌프란시스코 서버

## 설치
* yum update -y
* yum install -y wget curl-devel zlib-devel.x86_64 perl-ExtUtils-MakeMaker.x86_64
* yum groupinstall -y "Development Tools"
* wget https://git-core.googlecode.com/files/git-1.9.0.tar.gz
* git 설치
* adduser dev
* passwd dev
* su - dev

* mkdir ~/local && cd ~/local
* wget http://nodejs.org/dist/v0.10.26/node-v0.10.26-linux-x64.tar.gz
* wget http://fastdl.mongodb.org/linux/mongodb-linux-x86_64-2.4.9.tgz
* PATH에 node.js, mongodb 추가
* npm install -g grunt-cli
* npm install -g bower

### 서비스 설치
* git clone http://github.com/linnovate/mean.git
* cd mean
* npm install
* grunt

## 서비스 테스트
http://ip:3000

80port 연결
* iptables -t nat -A PREROUTING -p tcp -d 192.241.192.91 --dport 80 -j REDIRECT --to-port 3000


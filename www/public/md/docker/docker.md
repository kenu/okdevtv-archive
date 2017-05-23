# Docker

* http://docker.io
* Build, Ship, Run
* 개발자와 시스템어드민을 위한 분산 애플리케이션용 오픈 플랫폼

## Install
* Docker.dmg 엔진 다운받아 복사 후 실행
```
docker ps
docker info
docker images
docker version
```
* Docker Toolbox 다운로드
* https://www.docker.com/products/docker-toolbox
* docker quick start terminal 실행
* `docker run hello-world`
  * docker : 시스템에 있는 docker 사용
  * run : 서브명령, 컨테이너 실행
  * hello-world : 컨테이너에 실을 이미지 이름
* 컨테이너는 아무것도 꾸미지 않은 버전의 리눅스 운영체제
* 고래가라사대
  * docker hub 이미지 정보
    * 포함한 소프트웨어 종류와 사용법
  * 우분투 OS
* `docker run -d -p 80:80 --name webserver nginx`
* stop
```
➜  ~ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                         NAMES
92d58318f84e        nginx               "nginx -g 'daemon off"   27 hours ago        Up 27 hours         0.0.0.0:80->80/tcp, 443/tcp   webserver
0235bd537f03        nginx               "nginx -g 'daemon off"   27 hours ago        Up 27 hours         80/tcp, 443/tcp               boring_hypatia
➜  ~ docker stop nginx
Error response from daemon: No such container: nginx
➜  ~ docker stop 92d58318f84e
92d58318f84e
```

## 이미지 불러오기
* `docker pull imagename`

## 이미지 만들기
* Dockerfile
* `docker build`
* `docker commit`

## 이미지 업로드
* `docker push`

## 업로드 이미지 삭제

## 네트워크
* https://docs.docker.com/engine/tutorials/networkingcontainers/


## 참고

* Docker 창시자 발표 https://youtu.be/Q5POuMHxW-0

```
docker ps
docker images
docker images ubuntu
docker run -i -t ubuntu:12.10 /bin/bash

ps faxw
ls
rm -rf /var /usr /lib
ls /var
exit

ssh dockerdev
sudo -s
docker ps
docker diff 7b882b11bc8e
docker commit 7b882b11bc8e shykes/broken-ubuntu
docker run -i -t shykes/broken-ubuntu /bin/bash

docker push shykes/broken-ubuntu
https://index.docker.io
```

* Getting Started for non-technical
  * https://docs.docker.com/mac/
  * https://docs.docker.com/docker-for-windows/
* https://docs.docker.com/mac/step_three/
* docker/whalesay
  * https://hub.docker.com/r/docker/whalesay/
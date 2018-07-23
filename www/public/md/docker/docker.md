# Docker

* http://docker.io
* Build, Ship, Run
* 개발자와 시스템어드민을 위한 분산 애플리케이션용 오픈 플랫폼

## Install
* https://hub.docker.com/ id 생성
* Docker.dmg 엔진 다운받아 복사 후 실행 (login 필요)
  * https://www.docker.com/community-edition#/download

## Basic keywords
```
docker ps
docker info
docker images
docker version
```

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
* https://docs.docker.com/get-started/part2/
* `Dockerfile`

```
# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```

* `requirements.txt`

```
Flask
Redis
```

* `app.py`

```
from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"

    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visits:</b> {visits}"
    return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
```

* `docker build -t friendlyhello .`
* `docker run -p 4000:80 friendlyhello`
* `curl localhost:4000`
* `docker tag friendlyhello kenu/get-started:part2`

## 이미지 업로드
* `docker push kenu/get-started:part2`

## 원격 이미지 로컬에서 실행
* `docker run -p 4000:80 kenu/get-started:part2`
* `curl localhost:4000`

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

## ref
* Getting Started for non-technical
  * https://docs.docker.com/mac/
  * https://docs.docker.com/docker-for-windows/
* https://docs.docker.com/mac/step_three/
* docker/whalesay
  * https://hub.docker.com/r/docker/whalesay/
* docker for mac
  * https://pilsniak.com/how-to-install-docker-on-mac-os-using-brew/

## deprecated

* Docker Toolbox 다운로드
* https://www.docker.com/products/docker-toolbox
* docker quick start terminal 실행

```
brew install docker docker-compose docker-machine xhyve docker-machine-driver-xhyve
sudo chown root:wheel /usr/local/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
sudo chmod u+s /usr/local/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve\nsudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
docker-machine create default --driver xhyve --xhyve-experimental-nfs-share
eval $(docker-machine env default)
docker run hello-world
```

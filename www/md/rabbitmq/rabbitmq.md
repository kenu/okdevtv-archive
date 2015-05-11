# RabbitMQ
* 메시지 큐 데몬 (Message Queue Daemon)
* 스프링 프레임워크의 pivotal社에서 주도하는 오픈 소스
* erlang 기반
* 경쟁 제품으로 activemq.apache.org
* AMQP 스펙 준수

## AMQP
* Advanced Message Queuing Protocol

* define: AMQP is the Internet Protocol for Business Messaging

## RabbitMQ
* http://www.rabbitmq.com/

* message broker
  * producers
  * consumers
  * 메시지 전달 기능
    * 경로 지정, route
    * 버퍼링 buffer
    * 보관 persist

### 설치
* https://www.rabbitmq.com/download.html


### tutorial 해설
* http://www.rabbitmq.com/getstarted.html
* Python | Java | Ruby | PHP | C# 언어 지원

#### 1. Hello World
* Producer, Consumer, Message Queue
* 메시지 전달의 기본 특수 기호
* Send와 Recv의 코드 실행과 설명

#### 2. Work Queues
* 메시지는 문자열뿐만 아니라 작업명령을 감싸서 전달 가능
* Consumer를 Worker로 두고 여러 Worker들이 동시에 메시지를 처리하는 구조
* Round-robin 방식으로 작업 배분
* 작업 무결성을 위한 acknowledgement 설명

#### 3. Publish/Subscribe
* exchange를 통해서 하나의 메시지를 여러 Queue에 보내는 법

#### 4. Routing
* exchange의 binding Key를 이용해 routing Key로 매칭시켜 보내는 법

#### 5. Topic
* 패턴으로 메시지를 Queue에 보내는 방법

#### 6. RPC
* 원격에 있는 함수를 호출해서 결과를 가져오는 방식


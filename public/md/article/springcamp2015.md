# 스프링캠프 2015

## inside spring.io
* grunt.js vs gulp.js
* Config based : Code based
* 플러그인 다수 : 적음

curl.js

bye bye src/main/webapp

.addResourceLocations

WebJar 클라이언스 리소스를 묶은 것


* 왜 Client를 분리해야할까?
  * 프론트엔드 영역을 백엔드 개발자들만 잘 아는 환경 안에 두는 것은 유연성이 떨어진다.
  * 프론트엔드 빌드 도구를 독립적으로 사용할 수 있다.

ElephantDB

New Relic
모니터링 서비스 사용



## 스프링 환경변수
* 그냥 하면 되는 것이 아니다.
* 자주 변경되거나 확정되지 않은 데이터
  * 소스에 박아 넣으면 안되는 정보
* 같은 용도이지만 개발, 테스트, 운영 등 다양한 조건마다 다른 데이터
  * DB 커넥션 정보
  * 외부 연동 URL 정보
* 다양한 곳에서 사용하는 공통 데이터 존재

* 환경변수가 중요한 이유?
  * 시스템의 유연성

(1) 클래스 상수
(2) properties 파일
(3) Spring without Profile
   * 3.1 이상에서 지원

* 약간 무식한(?) 방법
  * java -Dkey=value

* Maven과 Profile 기능 그리고, properties
* `mvn -P프로파일명 install`
* Maven Profile 장점
  * 스프링 애플리케이션에서는 단순한 설정형태 유지
* 단점: 클래스 수가 많아지면 IDE 멍하게 도는 경우가 많아짐

### Spring Boot와 YAML
* YAML 핵심 장점
* 하나의 문서 안에 문서를 나눌 수 있는 문법 `---`

운영할수록 늘어가는 서버, 애플리케이션, 환경변수
* Spring Cloud Config
  * 환경변수를 제공해주는 REST API 서버
  * 환경변수에 대한 암복호화 기능 내장
  * JSON 형식으로 제공

* 예제 샘플
  * https://github.com/sbcoba/spring-camp-2015-sample



## 스프링 부트의 로깅 의존성 관리
* 어떤 로거를 썼는지 알 수 있는가?
* 스프링 부트는 JCL을 사용
* 애플리케이션은 SLF4j를 사용한다.
* 애플리케이션은 Logback을 사용한다.

### JCL (commons-logging)  

* 로깅 추상화 라이브러리
* log -> log4j


* JCL을 꺼리는 이유
  * JCL은 클래스로더에 의존적인 방법으로 구현체를 찾는다.
* SLF4J는 로깅 라이브러리를 런타임이 아닌 컴파일 타임에 정한다.
  * 세 가지 모듈(Bridging, API, Binding)을 제공
  * 로그 문자열의 연산이 없다. 나은 성능



## 모니터링 시스템
* 기존 모니터링 시스템 서비스별로 사용
  * Zabbix, Nagios, splunk, Ganglia, Cacti
* 개발자가 보기 편한 모니터링 환경
* collectd + logstash + elasticsearch + kibana
* collectd의 소모 리소스가 매우 작아서 좋다.


* elasticsearch는 kafka를 통해서 로그 데이터를 전달
* kafka 로그를 스트링으로 보내주고 네트워크 장애시 큐 역할


* 프론트엔드는 루비온레일즈로 완전히 분리


* Spring Boot Actuator
  * HTTP endpoint(REST API), JMX, 등을 통해서 모니터링


## Spring Integeration으로 본 메시징 세계
* RestTemplate vs Http-outbound-gateway
* 시스템 통합에 대한 해결방싱
  * File Transfer
  * Shared Database
  * Remote Procedure Invocation
  * Messaging
* Messaging
  * 프로그램 간에 빠르고 신뢰할 수 있는 통신을 비동기 방식으로 가능케 하는 전송 기술
* Enterprise Integration Patterns
* Why Spring Integration?
* 퍼포먼스가 잘 나올까요?
* 



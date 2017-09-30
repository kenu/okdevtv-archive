## 리액티브 스트림 Reactive Streams
원본: http://www.reactive-streams.org/

리액티브 스트림은 non-blocking back pressure으로 비동기 스트림 처리를 위한 표준을 제공하기 위한 이니셔티브입니다. 여기에는 런타임 환경 (JVM 및 JavaScript)과 네트워크 프로토콜을 위한 노력이 포함됩니다.

## 뉴스 : JDK9 `java.util.concurrent.Flow`

JDK9의 <a href="http://download.java.net/java/jdk9/docs/api/java/util/concurrent/Flow.html">`java.util.concurrent.Flow`</a> 에서 사용할 수 있는 인터페이스는 각각의 리액티브 스트림 대응물과 의미상으로 1:1입니다. 즉, 철학 기간이 있을 것이며 라이브러리는 JDK에서 새로운 유형을 채택하기 위해 이동하지만 이 기간은 곧 라이브러리의 전체 의미론적 동일성 및 곧 출시될 리액티브 스트림 릴리스로 인해 짧을 것으로 예상됩니다. 컨버터 라이브러리는 물론 JDK 유형과 직접 호환되는 TCK를 지원합니다.

JVM용 `Reactive Streams`에 대해 더 자세히 배우고 싶다면 <a href="https://github.com/reactive-streams/reactive-streams-jvm/blob/v1.0.1/README.md">이 글</a>을 읽으십시오.

## 이슈

데이터 스트림 (특히 볼륨이 미리 결정되지 않은 "라이브"데이터)을 처리하려면 비동기 시스템에서 특별한 주의가 필요합니다. 가장 중요한 이슈는 빠른 데이터 소스가 스트림 대상을 압도하지 않도록 리소스 소비를 제어해야 한다는 것입니다. 비동기성은 컴퓨팅 리소스를 병렬로 사용하거나 네트워크 호스트 또는 단일 시스템 내의 여러 CPU 코어를 공동 작업할 때 필요합니다.

리액티브 스트림의 주요 목표는 수신 측이 임의의 양의 데이터를 버퍼링하지 않도록 보장하면서 비동기 경계를 통과하는 스트림 데이터를 다른 스레드 또는 스레드 풀로 전달하는 것을 제어하는 ​​것입니다. 다시 말하면, 배압은 스레드 사이를 중재하는 큐를 묶는 것을 허용하기 위해 이 모델의 필수적인 부분입니다. 역 압력의 통신이 동기이면 비동기 처리의 이점은 무효화됩니다 (<a href="http://reactivemanifesto.org/">Reactive Manifesto</a> 참조). 따라서 리액티브 스트림 구현의 모든 측면에서 완전히 비차단 및 비동기 동작을 수행하도록 주의를 기울여야 합니다.

규칙을 준수함으로써 스트림 응용 프로그램의 전체 처리 그래프에서 앞서 언급한 이점과 특성을 유지하면서 원활하게 상호 운용할 수있는 많은 구현을 만들 수 있는 것이 스펙의 의도입니다.

## 범위

리액티브 스트림의 범위는 목표를 달성하기 위해 필요한 작업과 엔티티를 설명하는 인터페이스, 메소드 및 프로토콜의 최소 집합을 찾는 것입니다. non-blocking back pressure으로 데이터의 비동기 스트림을 달성합니다.

최종 사용자 DSL 또는 프로토콜 바인딩 API는 의도적으로 다른 프로그래밍 언어를 사용하여 플랫폼의 관용구에 가능한 한 사실대로 머무를 수 있는 여러 가지 구현을 장려하고 가능하게 하는 범위에서 벗어났습니다.

우리는 이 리액티브 스트림 스펙 및 구현 경험을 받아들이면 향후 JDK 릴리스에서의 Java 플랫폼 지원 또는 향후 웹 브라우저에서의 네트워크 프로토콜 지원을 비롯한 광범위한 통합으로 이어질 것으로 예상합니다.

### 워킹 그룹
#### 기본 의미
기본 의미론은 back-pressure를 통해 흐름 요소의 전달이 조절되는 방법을 정의합니다. 요소가 전송되는 방법, 전송 중 표시 또는 back-pressure의 신호 방법은 이 스펙의 일부가 아닙니다.

#### JVM 인터페이스 (완료)
이 워킹 그룹은 공유 메모리 힙을 사용하여 JVM 내의 객체와 스레드 간에 스트림을 전달하기 위해 서로 다른 구현 및 언어 바인딩의 상호 운용을 허용하는 것을 주된 목적으로 하는 프로그래밍 인터페이스 세트에 기본 의미를 적용합니다.

현재 2017년 8월 9일 우리는 자바를 포함한 JVM에 대한 반응성 스트림 버전 1.0.1을 릴리스했습니다. <a href="http://www.reactive-streams.org/reactive-streams-1.0.1-javadoc">API</a>, 텍스트 <a href="https://github.com/reactive-streams/reactive-streams-jvm/blob/v1.0.1/README.md#specification">스펙</a>, <a href="http://www.reactive-streams.org/reactive-streams-tck-1.0.1-javadoc">TCK 및 <a href="http://www.reactive-streams.org/reactive-streams-examples-1.0.1-javadoc">구현 예제</a>. Maven Central에서 해당 코드 아티팩트를 사용할 수 있습니다:

```
<dependency>
  <groupId>org.reactivestreams</groupId>
  <artifactId>reactive-streams</artifactId>
  <version>1.0.1</version>
</dependency>
<dependency>
  <groupId>org.reactivestreams</groupId>
  <artifactId>reactive-streams-tck</artifactId>
  <version>1.0.1</version>
</dependency>
```
이 소스 코드는 <a href="https://github.com/reactive-streams/reactive-streams-jvm/tree/v1.0.1">github</a>에서 사용할 수 있습니다. 피드백을 제공하기 위해 github 이슈를 사용하십시오.

모든 아티팩트 및 스펙은 <a href="http://creativecommons.org/publicdomain/zero/1.0">Creative Commons Zero</a>에서 퍼블릭 도메인으로 공개됩니다.

리액티브 스트림 1.0.1 JVM에 대한 자세한 내용은 <a href="http://www.reactive-streams.org/announce-1.0.1">여기</a>를 참조하십시오.

#### 구현자에 대한 참고 사항
최종 스펙을 구현하려면 <a href="https://github.com/reactive-streams/reactive-streams-jvm/blob/v1.0.1/README.md">README</a> 및 <a href="http://www.reactive-streams.org/reactive-streams-1.0.1-javadoc">Java API 문서</a>를 읽은 다음 <a href="https://github.com/reactive-streams/reactive-streams-jvm/blob/v1.0.1/README.md#specification">스펙</a>을 살펴보고 <a href="https://github.com/reactive-streams/reactive-streams-jvm/tree/v1.0.1/tck">TCK</a> 및 <a href="https://github.com/reactive-streams/reactive-streams-jvm/tree/v1.0.1/examples/src/main/java/org/reactivestreams/example/unicast">구현된 예제</a>를 살펴 보는 것이 좋습니다. 위의 이슈가 있는 경우
<a href="https://github.com/reactive-streams/reactive-streams-jvm/issues?page=1&state=closed">닫힌 이슈</a>를 살펴 본 다음 아직 해결되지 않은 경우 <a href="https://github.com/reactive-streams/reactive-streams-jvm/issues/new">새로운 이슈</a>를 여십시오.

이 작업은 <a href="https://github.com/reactive-streams/reactive-streams-jvm/">reactive-streams-jvm</a> 저장소에서 수행됩니다.

#### JavaScript 인터페이스
이 작업 그룹은 JavaScript 런타임 환경에서 요소 스트림을 관리하기 위한 최소한의 오브젝트 특성 세트를 정의합니다. 목표는 여러 구현이 동일한 런타임 환경에서 상호 운용되도록 하는 테스트 가능한 스펙을 제공하는 것입니다.

이 작업은 <a href="https://github.com/reactive-streams/reactive-streams-js/">reactive-streams-js</a> 저장소에서 수행됩니다.

#### 네트워크 프로토콜
이 작업 그룹은 데이터 요소의 직렬화 및 비직렬화와 관련된 다양한 전송 매체를 통해 반응성 스트림을 전달하기 위한 네트워크 프로토콜을 정의합니다. 그러한 전송의 예는 TCP, UDP, HTTP 및 WebSockets입니다.

이 작업은 <a href="https://github.com/reactive-streams/reactive-streams-io/">reactive-streams-io</a> 저장소에서 수행됩니다.


## 역자 참고
* non-blocking back pressure
  * https://www.slideshare.net/johanandren/asynchronous-stream-processing-with-akka-streams

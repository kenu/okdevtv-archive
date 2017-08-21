# Spring AOP
* Aspect Oriented Programming

## Concept
* Scattered duplicated code
* Devide Concerns
<img src="./images/aop01.png" alt="AOP">

* Weaving
<img src="./images/aop02.png" alt="Weaving">

## Terms
* JoinPoint
  * Crosscutting Concerns 모듈이 삽입되어 동작할 수 있는 실행 가능한 특정 위치
  * 메소드 호출, 메소드 실행 자체, 클래스 초기화, 객체 생성 시점 등
* Pointcut
  * Pointcut은 어떤 클래스의 어느 JoinPoint를 사용할 것인지를 결정하는 선택 기능
  * 가장 일반적인 Pointcut은 ‘특정 클래스에 있는 모든 메소드 호출’로 구성
* 애스펙트(Aspect)
  * Advice와 Pointcut의 조합
  * 어플리케이션이 가지고 있어야 할 로직과 그것을 실행해야 하는 지점을 정의한 것
* Advice
  * Advice는 관점(Aspect)의 실제 구현체로 결합점에 삽입되어 동작할 수 있는 코드
  * Advice 는 결합점(JoinPoint)과 결합하여 동작하는 시점에 따라 before advice, after advice, around advice 타입으로 구분
  * 특정 JoinPoint에 실행하는 코드
* Weaving
  * Pointcut에 의해서 결정된 JoinPoint에 지정된 Advice를 삽입하는 과정
  * Weaving은 AOP가 기존의 Core Concerns 모듈의 코드에 전혀 영향을 주지 않으면서 필요한 Crosscutting Concerns 기능을 추가할 수 있게 해 주는 핵심적인 처리 과정

## ref
* Spring AOP Tutorial with Example 2017
  * https://www.dineshonjava.com/spring-aop-tutorial-with-example-aspect-advice-pointcut-joinpoint/
* AOP with spring
  * https://www.tutorialspoint.com/spring/aop_with_spring.htm

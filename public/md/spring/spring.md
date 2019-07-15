# Spring Framework
* http://spring.io
* 2002 Rod Johnson

## 시작하기

* [자바](/mib/java)의 대표적인 프레임워크
* Spring Framework를 중심으로 다양한 프로젝트 제품군
* EJB(Enterprise Java Beans)의 무거운 구조 대체
* 매년 업그레이드되면서 Java의 새로운 기능 적용
* 최초 빌드 도구 [Maven](/mib/java/maven) 활용, 4.0부터 빌드도구 [Gradle](/mib/java/gradle) 사용
* 스프링 프로젝트 개발 구조는 [Maven](/mib/java/maven) 스타일

## 필요조건

* [Java](/mib/java)
* [JSP](/jsp.html), 웹 개발을 할 경우

## 기본 개념

* IoC/DI Inversion of Control/Dependency Injection
* AOP Aspect Oriented Programming
* PSA Portable Service Abstraction

## 스프링 아키텍처

* from: [Spring Framework Reference](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#spring-introduction)
* <img src="/images/spring/spring-overview.png" alt="Spring Framework Architecture">

## Simple Spring Code
* bean : HelloWorld.java
* config : Beans.xml
* use : MainApp.java

* HelloWorld.java

```java
package okdevtvspring;

public class HelloWorld {
	private String message;

	public void setMessage(String message) {
		this.message = message;
	}

	public void getMessage() {
		System.out.println("Your Message : " + message);
	}
}
```

* Beans.xml

```java
package okdevtvspring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		HelloInterface obj = (HelloInterface) context.getBean("helloWorld");
		obj.getMessage();
	}
}
```

* MainApp.java

```xml
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

	<bean id="helloWorld" class="okdevtvspring.HelloWorld">
		<property name="message" value="# Hello World!" />
	</bean>

</beans>
```

## Bean scope
* singleton
* prototype
* request
* session
* global-session

### example
```xml
<bean id="..." class="..." scope="singleton">
</bean>
```

## Bean lifecycle
* Initialization callbacks
  * init-method="init"
  * InitializingBean interface
```java
public class ExampleBean implements InitializingBean {
       public void afterPropertiesSet() {
           // do some initialization work
       }
}
```
* Destruction callbacks
  * destroy-method="destroy"
  * DisposableBean interface
```java
public class ExampleBean implements DisposableBean {
        public void destroy() {
           System.out.println("destroy");
        }
}
```


## 참고

* Spring 동영상 강의
  * http://bit.ly/okdevtv-spring

* Spring Guides
  * http://spring.io/guides

* 스프링 프레임워크 레퍼런스 번역
  * http://blog.outsider.ne.kr/tag/스프링%20프레임워크

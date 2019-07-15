# Spring Security

* 인증(Authentification)과 권한(Authorization)을 다루는 프레임워크
* 프로그램 로직보다 설정으로 페이지나 리소스 접근 제어

## 필요조건
* Spring Framework 3.2
* Spring Security 3.2
* Maven

## 간단 테스트
* 소스 다운로드 <a href="springsecurity.zip">springsecurity.zip</a>
* pom.xml
```
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-web</artifactId>
			<version>${spring.security.version}</version>
		</dependency>

		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-config</artifactId>
			<version>${spring.security.version}</version>
		</dependency>
```
* root-context.xml
```
<?xml version="1.0" encoding="UTF-8"?>
<beans:beans xmlns="http://www.springframework.org/schema/security"
	xmlns:beans="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans
	http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
	http://www.springframework.org/schema/security
	http://www.springframework.org/schema/security/spring-security-3.2.xsd">

	<!-- Root Context: defines shared resources visible to all other web components -->
	<http auto-config="true">
		<intercept-url pattern="/admin**" access="ROLE_USER" />
	</http>

	<authentication-manager>
		<authentication-provider>
			<user-service>
				<user name="okdevtv" password="123456" authorities="ROLE_USER" />
			</user-service>
		</authentication-provider>
	</authentication-manager>

</beans:beans>
```
* servlet-context.xml
```
<beans:beans xmlns="http://www.springframework.org/schema/mvc"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:beans="http://www.springframework.org/schema/beans"
	xmlns:context="http://www.springframework.org/schema/context"
	xsi:schemaLocation="http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd
		http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

```

* web.xml
```
	<!-- Spring Security -->
	<filter>
		<filter-name>springSecurityFilterChain</filter-name>
		<filter-class>org.springframework.web.filter.DelegatingFilterProxy
		</filter-class>
	</filter>

	<filter-mapping>
		<filter-name>springSecurityFilterChain</filter-name>
		<url-pattern>/*</url-pattern>
	</filter-mapping>
```
* HomeController.java
```

```
* admin.jsp
```
```


## References
* JavaSchool Spring Security
  * http://java-school.net/spring/spring-security.php
* MKyoung Spring Security
  * http://www.mkyong.com/tutorials/spring-security-tutorials/


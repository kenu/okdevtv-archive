# 하이버네이트

## 개요
* ORM: 자바의 객체(Object)와 관계형 DB(Relational DB)를 매핑(Mapping)해주는 프레임워크, DB의 SQL을 직접 다루지 않고, 객체지향 언어의 특징을 살려서 DB를 제어
* Gavin King이 2001년 시작. JPA(Java Persistence API, 2006)의 효시가 되었으며, 스프링 프레임워크와 잘 어울림
* 국내에서 하이버네이트 프레임워크 사용은 희귀함. DBA 중심의 프로젝트 문화

## 아키텍처
* http://www.tutorialspoint.com/hibernate/hibernate_quick_guide.htm

## Dialect List
|Database	|Dialect Property
|---|---|
|DB2	|org.hibernate.dialect.DB2Dialect
|HSQLDB	|org.hibernate.dialect.HSQLDialect
|HypersonicSQL	|org.hibernate.dialect.HSQLDialect
|Informix	|org.hibernate.dialect.InformixDialect
|Ingres	|org.hibernate.dialect.IngresDialect
|Interbase	|org.hibernate.dialect.InterbaseDialect
|Microsoft SQL Server 2000	|org.hibernate.dialect.SQLServerDialect
|Microsoft SQL Server 2005	|org.hibernate.dialect.SQLServer2005Dialect
|Microsoft SQL Server 2008	|org.hibernate.dialect.SQLServer2008Dialect
|MySQL	|org.hibernate.dialect.MySQLDialect
|Oracle (any version)	|org.hibernate.dialect.OracleDialect
|Oracle 11g	|org.hibernate.dialect.Oracle10gDialect
|Oracle 10g	|org.hibernate.dialect.Oracle10gDialect
|Oracle 9i	|org.hibernate.dialect.Oracle9iDialect
|PostgreSQL	|org.hibernate.dialect.PostgreSQLDialect
|Progress	|org.hibernate.dialect.ProgressDialect
|SAP DB	|org.hibernate.dialect.SAPDBDialect
|Sybase	|org.hibernate.dialect.SybaseDialect
|Sybase Anywhere	|org.hibernate.dialect.SybaseAnywhereDialect


## 시작하기
* JAR 의존성 관리 때문에 Maven을 빌드도구로 사용하면 개발하기 용이함

1. DB 설치와 연결
2. example 프로젝트 import 및 리뷰
3. Hibernate와 Spring Framework 연결
4. CRUD 예제

## 관계
1. one to one (xml, annotation)
2. one to many (xml, annotation)
3. many to many (xml, annotation)
4. many to many with extra column

## Spring with Hibernate


## 참고
* http://www.hibernate.org
* Quick Guide
  * http://www.tutorialspoint.com/hibernate/hibernate_quick_guide.htm
* Spring 3.2 and Hibernate 4
  * http://www.mkyong.com/spring-security/spring-security-hibernate-xml-example/
* Spring 4 and Hibernate 3
  * http://www.journaldev.com/3524/spring-hibernate-integration-example-tutorial-spring-4-hibernate-3-and-hibernate-4
* Hibernate Core Tutorials
  * http://www.mkyong.com/tutorials/hibernate-tutorials/

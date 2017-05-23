# Open PaaS
* PaaS Builder


```
## Database(MY_SQL)
spring.datasource.driverClassName=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost/ieda?useUnicode=true&charaterEncoding=utf-8
spring.datasource.username=root
spring.datasource.password=1q2w3e4r5t
spring.datasource.test-on-borrow=true
spring.datasource.validationQuery=SELECT 1

spring.jpa.database=MYSQL
```


# 데이터베이스 테이블 스키마 설정(schema.sql) ## 설치환경에 맞게 스키마 경로를 수정
spring.datasource.schema=/home/ubuntu/OPENPAAS-IEDA-WEB/src/main/resources/schema.sql

# 초기 업로드 데이터 설정(data.sql)           ## 설치환경에 맞게 설정파일 경로를 수정
spring.datasource.data=/home/ubuntu/OPENPAAS-IEDA-WEB/src/main/resources/data.sql


* https://github.com/OpenPaaSRnD/Documents
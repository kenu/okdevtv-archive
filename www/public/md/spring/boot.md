# Spring Boot
* https://github.com/spring-projects/spring-boot

## Goals
* 매우 빠른 스프링 개발
* 기본도 충실하지만, 요구사항 변화에 빨리 대응
* 다양한 비기능 특징 제공(임베디드 서버, 보안, 메트릭, 헬스 체크, 외부 설정)
* 코드 생성이 없고, XML 요구되지 않음

## Simple Example
* Example.java
```
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@RestController
@SpringBootApplication
public class Example {

	@RequestMapping("/")
	String home() {
		return "Hello World!";
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Example.class, args);
	}

}
```

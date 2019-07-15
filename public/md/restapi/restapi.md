# REST API
* Roy Fielding - 2000
* RESTful API
* REpresentational State Transfer

## 구성
* 자원(RESOURCE) - URI
* 행위(Verb) - HTTP METHOD
* 표현(Representations)

## 특징
1. Uniform Interface
2. Stateless
3. Cacheable
4. Self-descriptiveness
5. Client - Server
6. 계층형 구조

## REST API 디자인 가이드

* URI는 정보의 자원 표현 
* 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다

### 중심 규칙

* 잘못 사용한 예
  * `GET /members/delete/1`
  * `GET /members/show/1`
  * `GET /members/insert/2`

* 수정
  * `DELETE /members/1`
  * `GET /members/1`
  * `POST /members/2`

* HTTP METHOD 역할

| Method | 역할 |
|---|---|
|POST | 리소스 생성 |
|GET | 리소스 조회 |
|PUT | 수정 |
|DELETE | 삭제 |

### 주의할 점
1. `/`구분자는 계층 관계 표현
2. 마지막 문자로 `/`를 포함하지 않는다
3. `-`은 URI 가독성을 높이는데 사용
4. `_`는 URI에 사용하지 않는다
5. URI 경로에는 소문자가 적합
6. 파일 확장자는 URI에 포함시키지 않는다

### 리소스 간의 관계를 표현하는 방법

`/리소스명/리소스 ID/관계가 있는 다른 리소스명`

### Collection과 Document

* `http://restapi.exxample.com/sports/soccer`
  * `sports` : Collection
  * `soccer` : Document


## HTTP 응답 상태 코드

200
201

400
401
403
405

301
500


## ref
* http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
* REST API 제대로 알고 사용하기
  * https://meetup.toast.com/posts/92
# Passport
* Node용 인증 미들웨어
* 하나의 목적: 인증 요청
* 모듈 작성시, 캡슐화는 미덕, 그래서 모든 다른 기능은 애플리케이션에 위임
* 관심의 분리 때문에 코드 깔끔, 애플리케이션에 통합 쉬움


* 요즘 웹 애플리케이션에서, 인증은 다양한 형태
* 전통방식, username + password
* 페이스북, 트위터 같은 소셜 네트워크가 흥하면서, OAuth 제공자를 통한 싱글사인온이 인증방식으로 유행
* 접근 보호를 위해 API 서비스는 토큰 기반의 신임장(credentials) 요청


* 각각의 애플리케이션마다 독특한 인증 요구사항
* 전략이라 불리는 인증 메커니즘은 개별 모듈로 패키징
* 불필요한 의존성 없이도 애플리케이션은 어떤 전략을 사용할지 선택


* 인증시 복잡하지만, 코드는 복잡할 필요없음
```
app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));
```

### 설치
```
npm install passport
```

## 인증하기


* 인증 요청은 `passport.authenticate()` 호출하면서 사용할 전략 지정하면 끝
* `authenticate()` 함수 시그니처는 표준 Connect 미들웨어
* Express 애플리케이션에서 라우트 미들웨어로 사용하기 편리함

```
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
```

* 인증 실패시, `401 Unauthorized` 인증안됨 상태값 응답, 추가적인 라우트 핸들러 없음
* 인증 성공시, 다음 핸들러 호출하고 `req.user` 프로퍼티가 인증된 사용자로 지정됨


* 주의: 전략은 라우트에서 사용하기 전에 설정되어야 함

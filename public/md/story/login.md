## Sign Up

1\. 등록
  * `GET /user/signup`

2\. 확인메일 발송
  * `POST /user/signup`

3\. 메일 링크로 보낸 비밀번호 입력 페이지
  * 메일에 보낸 키와 함께 
  * `GET /user/setup`

4\. 회원 등록 완료
  * `POST /user/setup`

## 로그인(Sign In)

1\. 로그인 페이지
  * `GET /user/login`
  * `email`, `passwd`

2\. 로그인 체크
  * `POST /user/login`
  * 세션 생성



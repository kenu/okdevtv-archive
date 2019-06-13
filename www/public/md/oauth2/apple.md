# `Sign In With Apple` : 새로운 ID 제공 업체에 대해 알아보십시오.
원문: https://auth0.com/blog/what-is-sign-in-with-apple-a-new-identity-provider/
Apple WWDC 2019에서 발표된 새로운 ID 제공 업체인 `Sign In With Apple`에 대해 알아보십시오.

[브루노 크렙스](https://auth0.com/blog/authors/bruno-krebs/)
2019-06-06

목차
Apple에 로그인 하시겠습니까? 왜?
`Sign In With Apple`을 지원해야 합니까?
애플리케이션 개발자를 위한 과제
`Sign In With Apple` 구현
다음은 무엇입니까?
AUTH0 문서  
분 단위로 인증 구현
AUTH0 커뮤니티  
토론

 이제 Auth0의 맞춤식 소셜 연결 덕분에 앱에 특별한 코드를 추가하지 않고도 Apple에서 로그인을 구현할 수 있습니다! Sign In With Apple을 구현하십시오 .
TL;DR: Apple WWDC 2019에서 발표된 `Sign In With Apple` 기능에 대해 알아보십시오 . 이 인증 옵션은 곧 모든 App Store 응용 프로그램에 필수가 될 것이며, 응용 프로그램 개발자에게 몇 가지 문제점을 제기할 수 있습니다. 웹 및 네이티브 애플리케이션 전반에 걸쳐 향상된 개인 정보 보호 및 완벽한 로그인을 통해 Apple 에코 시스템 사용자에게 더 나은 사용자 경험을 제공합니다.

Apple 기능 방문 페이지 모형 사진으로 로그인하십시오.

"Apple WWDC 2019에서 발표된 새로운 ID 제공 업체 인 `Sign In With Apple`에 대해 알아보십시오."


Tweet this
Apple에 로그인 하시겠습니까? 왜?
올해 WWDC에서 애플이 전하려고 하는 주요 메시지 중 하나는 회사가 프라이버시를 염려한다는 것입니다. 이 메시지를 유지하기 위해 다른 노력과 함께, 소프트웨어 공학의 수석 부사장 크레이그 페더리기는 "Sign In With Apple" 기능의 도입 아이폰 OS(13)와 맥 OS 카탈리나 출시될 예정으로 선보였습니다.

그가 언급한 것처럼, 소셜 계정을 사용하여 응용 프로그램에 로그인하면 응용 프로그램 개발자와 소셜 공급자가 추적할 수 있습니다. 이 일반적인 관행에 소개된 개인 정보 보호 문제를 제시한 후 Craig는 문제에 대한 해결책을 제시했습니다 . Apple에 로그인하십시오 .

크레이그 (Craig)의 말에 따르면, 이 솔루션은 "개발자가 자신의 앱에 바로 서명 버튼을 넣을 수있는 간단한 API"를 갖게 될 것입니다. 그런 다음 사용자가 이 아이디 공급자를 사용하여 앱에 로그인하는 경우 Apple은 "사용자가 별도로 선택하지 않는 한" 어떠한 개인 정보도 공개하지 않고 인증합니다.

WWDC 2019 기조 연설 중 이 부분의 초점 중 하나는 이 기능을 통해 사용자는 다음 중 하나를 수행 할 수 있었습니다.

* 실제 이메일 주소 공유 (대부분의 소셜 아이덴티티 제공 업체의 기본 동작)
* 사용자의 실제 전자 메일 주소에 대한 방화벽으로 작동하는 임의로 생성 된 고유 한 전자 메일 주소 공유

개인 정보를 중요시하는 사용자에게는 첫 번째 옵션이 적합하지 않습니다. 개인 이메일 주소가 사용하려고 하는 앱과 공유되기 때문입니다. 이러한 사용자에게는 두 번째 옵션이 매우 매력적입니다.

크레이그 (Craig)는 사용자가 전자 메일 주소를 숨기려고 결심했을 때 애플은 각 앱마다 고유하게 무작위로 생성 된 전자 메일 주소 만 공유 할 것이라고 설명했다. 애플리케이션 당 이메일 주소의 고유성은 새로운 기능에서 가장 흥미로운 부분 중 하나입니다. 이 접근 방식을 통해 애플은 사용자가 몇 번의 클릭만으로 더 이상 신경 쓰지 않는 앱을 ​​"음소거"하도록 허용할 것입니다. 앱이 무작위로 생성한 이메일 주소를 제거하면 됩니다.

"Sign In With Apple은 사용자가 각 앱마다 고유하게 생성 된 이메일 주소를 무작위로 공유할 수 있게 되므로 소음 앱을 제거하는 것은 매우 간편합니다."


Tweet this
`Sign In With Apple`을 지원해야 합니까?
Apple의 발표 에서 알 수 있듯이 Apple에서 로그인 기능을 채택하는 것이 좋습니다. 사실, 애플은이 기능을 언급 :

"올해 후반기에 상업적으로 이용할 수 있을 때 제 3 자 로그인을 지원하는 앱 사용자에게는 옵션이 필요할 것입니다."

즉, 앱 스토어에 앱을 게시하고 다른 제 3 자 로그인 옵션 (예 : Facebook, Google 또는 Twitter)을 지원하는 경우 곧 이 기능을 지원해야 합니다. 당분간 애플은 앱에서 아이덴티티 공급자로서 애플을 지원할 필요가 없다. 같은 문서에서 "이 기능은 아직 베타 테스트 중"이라고 되어 ​​있으며 아직 공개 의무가 만료된 날짜는 없습니다.

"애플이 대부분의 애플리케이션이 애플의 새로운 로그인 기능을 지원할 것을 요구하는 것처럼 보입니다."


Tweet this
애플리케이션 개발자를위한 과제
이 기능에 대한 지원은 응용 프로그램 개발자에게 많은 도움이 될 수 있습니다. 앱 리팩터링은 쉬운 작업이 아닙니다. 특히 리팩토링에 ID 관리와 같은 민감한 기능이 포함되어있는 경우 더욱 그렇습니다.

아이덴티티 프로바이더를 독자적으로 관리하고, 하나씩 통합하는 회사는 또 다른 프로바이더에 대한 지원을 추가해야 합니다. 이는 더 중요한 코드 및 통합을 작성하는 것을 의미하며, 여러 언어로 작성해야 할 경우 작업 부하가 급격히 커질 수 있습니다.

당신이 이것이 iOS 응용 프로그램에 대한 관심사 일 뿐이라고 생각할 수도 있지만, 그렇게 간단하지는 않습니다. 예를 들어 관련 iOS 앱이있는 웹 애플리케이션이있는 경우 `Sign In With Apple`도 지원해야 합니다. 그렇지 않은 경우이 상황을 상상해보십시오. iOS 사용자가 웹 버전의 앱을 사용하기를 원합니다. 로그인 방법은 무엇입니까? 다른 계정을 만들 수 있다고 기대할 수는 없습니다.

반면에 Auth0 과 같은 ID 관리 시스템 을 사용하면 이러한 부담을 줄일 수 있습니다. 신원 관리 시스템이 새로운 신원 제공 업체에 대한 지원을 추가하고 나면 스위치 옵션을 사용하여이 옵션을 애플리케이션으로 확장 할 수 있습니다 .

다음 섹션에서는 웹 응용 프로그램을 Apple에서 로그인 기능과 통합하려는 첫 시도 중 하나를 볼 수 있습니다. 기술 단계에 아직 관심이 없다면이 섹션을 건너 뛰어도 좋습니다.

`Sign In With Apple` 구현
이 새로운 아이덴티티 프로바이더는 여전히 베타 테스트 중이지만 , Node.js와 Express 웹 애플리케이션에 `Sign In With Apple` 기능을 통합 한 샘플을 이미 통합했습니다 .

이 절에서는 샘플을 실행하기 위해 수행해야 할 작업을 학습합니다. 그러나 여기서 설명하는 단계는 데모 용입니다. 즉, 다음 코드는 참조 용이며 프로덕션 환경에서 사용하면 안됩니다 (공급자와 통합하는 방법에 대한 공식 지침으로 간주해서는 안 됨).

`Sign In With Apple` 방법
다행히 커뮤니티를 위해 Apple은 Apple의 로그인 기능을 지원하는 공개 표준을 고수하기로 결정했습니다. 그들은 공식적으로이 표준을 사용하고 있다고 공개적으로 말하지 않으며, 공식 문서에는 언급이 하나도 없습니다. 그러나 다음 섹션에서 보게 될 것처럼 Apple은 OAuth 2.0 및 OIDC (OpenID Connect) 표준의 일부를 사용 하고 있습니다.

참고 : Apple이 지금까지 표준에 제시한 유일한 언급은 WWDC 2019에서 "Sign In With Apple 소개" 프레젠테이션 의 11분(11:00)입니다 . 이 부분에서 연사는 다음과 같이 말합니다. "기존 OAuth 시스템과 통합된 경우 `Sign In With Apple`은 매우 익숙할 것입니다."

다음에 보게 될 것은 사용자가 생성하려고 하는 응용 프로그램이 인증 코드 부여 플로 의 OIDC 특징을 사용하여 사용자를 인증한다는 것입니다. 따라서 사용자가 앱에 로그인하려고하면 다음 프로세스가 수행됩니다.

앱에서 사용자를 Apple로 리디렉션하여 인증 할 수있게합니다 .
인증이 성공하면 Apple은 인증 코드를 사용하여 사용자를 앱으로 리디렉션합니다.
앱 에서이 코드를 토큰으로 교환합니다 .
스텝 번호 세 가지가 완료되면 앱 전달하는 ID 토큰 획득 할 몇 가지 (그러나, 민감한 아무것도) 사용자에 대한 정보를 표시합니다.

참고 : 현재로서는 임의의 사용자 식별자 (예 : 이메일 주소)보다 의미있는 것을 얻는 방법을 알 수 없습니다. 함께 놀지도 마 scopes.

"운 좋게도, 애플은 OAuth와 OpenID Connect를 고수하면서 애플 로그인 기능을 구축하기로 결정했습니다."


Tweet this
전제 조건
제시된 단계를 따르는 데 관심이 있다면 주로 다음 두 가지가 필요합니다. 사용할 수있는 도메인 (예 :) brunokrebs.com과 작성하려는 웹 응용 프로그램을 가리 킵니다. 앱을 실행하고이 도메인을 대신하여 응답하는 "실제"서버 (인터넷에 액세스 할 수있는 실제 서버처럼)가 있습니다.

게다가이 서버는 TLS 인증서 (Apple은 보안되지 않은 HTTP 연결을 허용하지 않음)와 npm 및 Node.js (웹 응용 프로그램을 실행할 수 있도록)로 구성해야 합니다. 마지막으로 Email Relay Service 를 사용 하려면 SPF (Sender Policy Framework) DNS TXT 레코드로 도메인을 구성해야 합니다. Apple 설명서와 함께 공식 로그인하면 어떻게 얻을 수 있는지 설명되어 있습니다.

참고 : 이 디지털 오션 (와 같은 일부 자습서를 사용하는 것처럼 쉬운 방법은 설정까지 얻는 이것 과 이것 ), Freenom 및 하자 암호화를 .

계속하기 전에 올바르게 구성했는지 확인하십시오.

Apple 개발자 계정 구성
우선, 플랫폼에 응용 프로그램을 등록하는 데 사용할 수 있는 Apple 개발자 계정 이 필요합니다 . 유감스럽게도 이러한 유형의 계정은 유료이며 iOS 개발자 대학 프로그램에 참여하지 않는 한 무료 평가판을 사용할 수 없습니다 .

개발자 계정에 로그인하면 "인증서, ID 및 프로필"섹션 으로 이동하여 왼쪽 메뉴에서 "식별자"하위 섹션 을 선택 해야 합니다.

Apple Developer - 개발자 계정의 인증서, ID 및 프로필 페이지

이 하위 섹션에서 '앱 ID 등록 버튼'을 클릭하고 식별자 유형으로 앱 ID를 선택한 다음 '계속'을 클릭합니다. 그렇게 한 후에는 새로운 App ID ( "Apple Experimentation으로 로그인"과 같은 기능) 및 번들 ID에 대한 설명을 제공해야 합니다. 후자의 경우, 역 도메인 이름 스타일 문자열 (예 :)을 사용하는 것이 좋습니다 com.brunokrebs.appid. 그런 다음 조금 아래로 스크롤하여 "Apple에서 로그인"기능을 확인하십시오. Apple이 제공하는 "편집"버튼을 사용할 필요가 없습니다. 이 기능은 조금만 구성하면됩니다.

이제 다른 옵션을 기본값으로두고 "계속"을 누르십시오. 이 단추를 클릭하면 방금 채운 옵션에 대한 요약 정보가 표시됩니다. 모든 것이 제대로 작동하면 "Register"버튼을 눌러 프로세스를 종료하십시오.

잠시 후, Apple은 "인증서, 식별자 및 프로필"하위 섹션으로 다시 리디렉션합니다. 이번에는 새 앱 ID를 나열합니다. 다음에 필요한 것은 Node.js 응용 프로그램을 나타내는 서비스 ID를 만드는 것입니다. 이것은 중복 된 노력처럼 보일지도 모르지만 애플은 같은 것을 정리하여 동일한 앱 ID로 여러 서비스 ID를 중첩 할 수 있습니다. 이는 서로 다른 장치를 지원하는 앱의 버전이 다를 때 훨씬 더 적합합니다.

따라서 "식별자"헤더 옆에 있는 둥근 파란색 아이콘을 클릭하십시오. "서비스 ID"를 선택하고 "계속"을 클릭하십시오. 다음 화면에서 이전과 동일한 필드 (설명 및 식별자)를 채워야하고 "Apple에서 로그인"기능을 활성화해야 합니다. 두 필드의 경우 "Apple Web App에서 로그인"(설명)과 같은 값을 사용할 수 있습니다 com.brunokrebs.webapp.

Apple 개발자 - 새로운 서비스 ID 등록, 식별자 및 설명 입력

그 외에도 "Apple에서 로그인"기능을 확인한 후에는 옆에 있는 "구성"버튼을 클릭해야 합니다. 이 버튼을 클릭하면 Apple은 "웹 도메인"을 정의하고 (예 :), brunokrebs.com"Return URL"(예 :)을 추가 해야하는 대화 상자를 표시합니다 brunokrebs.com/callback. 이 정보를 입력 한 후 "저장"버튼을 클릭하십시오. 그런 다음 "서비스 ID 등록"화면으로 돌아가서 "계속"을 클릭하고 다음 화면에서 "등록"을 클릭하십시오.

서비스 ID를 등록하면 Apple에서 "인증서, 식별자 및 프로필"페이지로 다시 연결됩니다. 거기에 새로 생성 된 서비스 ID가 표시되며 마지막 구성 단계를 수행하기 위해 클릭해야 합니다 (불행하게도이 단계는 서비스를 등록해야만 사용할 수 있습니다).

클릭하면 Apple에서 서비스의 세부 정보를 보여줍니다. 거기에서 "Apple에서 로그인"기능 옆에 있는 "구성"버튼을 눌러야합니다. 이번에는 귀하의 도메인 옆에 "다운로드"및 "확인"이라는 두 개의 새로운 단추가 있음을 알 수 있습니다.

"다운로드"버튼을 클릭하면 Apple에서 파일을 보냅니다 apple-developer-domain-association.txt. 이 파일은 곧 사용해야하므로 주변에 보관하십시오. 또한 페이지를 열어 두십시오. 잠시 후에 "확인"버튼을 사용해야 합니다.

웹 응용 프로그램 만들기
Apple 개발자 계정을 구성한 후 웹 응용 프로그램 코드 작업을 시작할 수 있습니다. 이렇게 하려면 터미널을 열고 일반적으로 프로젝트를 저장할 새 디렉토리를 만듭니다 (이 디렉토리를 호출할 수 있음 apple-sign-in-sample). 그런 다음 새 디렉토리에서 npm 프로젝트를 만들고 몇 가지 종속성을 설치하십시오.

# start the npm project
npm init -y

# install its dependencies
npm i dotenv \
  express \
  express-session \
  jsonwebtoken \
  passport \
  passport-oauth
다음과 같은 이유로 이러한 종속성이 필요합니다.

* dotenv: 코드 자체에서 더 잘 유지되는 환경 변수가 필요합니다.
* express: 프로젝트를 Express 웹 응용 프로그램으로 만들어야 합니다.
* express-session: passport사용자의 세션을 관리하려면 이 패키지가 필요합니다.
* jsonwebtoken: 구성하는 동안 클라이언트 비밀 번호로 작동 하도록 JWT 를 생성해야 합니다 passport.
* passport:이 패키지를 사용하여 앱의 사용자 인증을 처리해야 합니다.
* passport-oauth:이 passport Strategy를 사용하여 Apple의 ID 제공 업체와 통합해야 합니다 .
이 패키지를 설치한 후, 호출 된 새 파일을 작성 app.js하고 다음 코드를 삽입하십시오.

```js
const express = require("express");
const session = require("express-session");
const port = process.env.PORT || 3000;
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
const fs = require("fs");
const jwt = require("jsonwebtoken");

const domainAssociation = fs.readFileSync(
  "./apple-developer-domain-association.txt",
  "utf8"
);
const appleStrategy = "apple";

const app = express();

app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  "apple",
  new OAuth2Strategy(
    {
      authorizationURL: "https://appleid.apple.com/auth/authorize",
      tokenURL: "https://appleid.apple.com/auth/token",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK,
      state: Date.now() // bleh
    },
    (accessToken, refreshToken, payload, profile, done) => {
      done(null, { profile, payload });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/.well-known/apple-developer-domain-association.txt", (req, res) => {
  res.send(domainAssociation);
});

app.get("/auth/apple", passport.authenticate(appleStrategy));

app.get(
  "/callback",
  passport.authenticate(appleStrategy, {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.get("/profile", (req, res) => {
  res.send(
    jwt.decode(req.session.passport.user.payload.id_token, { complete: true })
  );
});

app.get("/", (req, res) => {
  console.log("User", req.user);
  res.send(JSON.stringify({ Hello: "World" }));
});

app.listen(port, () => {
  console.log(`Apple Login POC listening on port ${port}!`);
});
```
위의 코드를 확인하면 apple-developer-domain-association.txt파일에 대한 참조가 있음을 알 수 있습니다. 이 파일을 서버에서 실행하는 동안이 파일을 응용 프로그램에서 사용할 수있게해야 합니다. 그러면 Apple에서 이전 섹션에서 사용한 도메인의 소유자인지 확인할 수 있습니다. 따라서, Apple에서 다운로드 한 파일을 프로젝트 루트로 이동하십시오.

그런 다음 코드가 작동하는지 확인하려면 다음 명령을 로컬에서 실행하십시오.

export CLIENT_ID=test
export CLIENT_SECRET=test
export CALLBACK=test

npm start
참고 :test 현재 환경 변수에 값을 남겨 둘 수 있습니다 . 나중에이 변수들을 구성 할 것입니다.

모든 것이 예상대로 작동하면 다음 링크에서 도메인 연결 파일의 내용을 볼 수 있습니다 http://localhost:3000/.well-known/apple-developer-domain-association.txt. 이 경우 실제 서버에서 앱을 실행할 준비가 된 것입니다.

Apple에서 도메인 소유권 확인하기
이제 프로젝트 코드를 서버로 옮겨 로컬에서했던 것처럼 실행합니다 (즉, 최종 환경 변수를 제공 할 필요가 없습니다). 이를 달성하기 위해 원하는 것을 사용하면됩니다. 예를 들어 힘내기를 사용하거나 파일을 수동으로 이동할 수 있습니다 (도움 scp이나 비슷한 방법으로). 전자는 아마 더 쉬울 것이다.

이 프로젝트를 실제 서버 (Apple 개발자 계정에서 구성한 도메인을 대신하여 응답해야 함)에서 실행 한 후에는 열려있는 페이지로 돌아가서 "확인"버튼을 클릭 할 수 있습니다. 모든 것이 올바르게 이루어진다면 Apple은 귀하가 정보를 갖고있는 도메인을 소유하고 있음을 확인할 수 있습니다.

Apple 개발자 - 도메인 소유권 확인 및 콜백 반환 URL 추가

그 외에도 Apple에서 제공하는 전자 메일 릴레이 서비스를 사용하려면 "인증서, 식별자 및 프로필"섹션 에서 "자세히" 를 클릭하고 "구성"을 누르십시오. 다음 페이지 brunokrebs.com에서 "도메인 및 관련 이메일 주소"에있는 입력란에 도메인 (예 :)을 추가하고 "등록"을 누르십시오. 그런 다음 me@brunokrebs.com"개별 이메일 주소"에 이메일 주소 (예 :)를 추가하고 "등록"을 누르십시오.

참고 : 잠시 동안이 속성을 구성하더라도 릴레이 서비스를 사용할 수 없습니다. 이 문서는 로그인하는 사용자를 위해 임의로 생성 된 고유 한 전자 메일을 얻는 방법에 대해서는 언급하지 않았습니다. 또한 OpenID Connect 스코프를 사용하면 email(적어도 아직은) 작동하지 않습니다.

Apple 개발자 - `Sign In With Apple` 구성 - 전자 메일 중계 서비스

Apple이 설명하는대로 :

Apple의 개인 전자 메일 중계 서비스를 사용하는 사용자에게 연락하려면 조직에서 통신에 사용할 도메인과 전자 메일 주소를 등록해야 합니다. 전자 메일 주소와 관련된 도메인 및 도메인은 Sender Policy Framework 표준을 준수해야하며 성공적으로 등록되기 전에 Apple에서 확인해야 합니다.

Apple 구성으로 로그인을위한 클라이언트 비밀 번호 생성하기
이제 Apple에서 도메인을 확인 했으므로이 ID 공급자를 사용하는 데 필요한 환경 변수를 정의하는 것에 대해 걱정할 수 있습니다. 처음에는 다음 변수 중 두 가지를 쉽게 구성 할 수 있습니다.

CLIENT_ID:이 값은 Apple에서 만든 서비스 ID (예 :)의 식별자로 사용한 값을 가져옵니다 com.brunokrebs.webapp.
CALLBACK:이 URL은 인증 프로세스가 수행 된 후 사용자가 리디렉션되는 URL을 나타냅니다. brunokrebs.com/callback동일한 서비스 ID 에서 "Return URL"필드 (예 :)로 전달한 값을 사용해야 합니다 .
이러한 변수를 정의한 후에 마지막으로 남은 변수가 CLIENT_SECRET있습니다. OAuth를 준수하는 대부분의 아이디 공급자에서이 매개 변수는 정적입니다. 그러나 애플에 의해이 비밀 회전을하기로 결정 서명 JSON 웹 토큰 (JWT를) 사용하여 수행 주장 .exp

이 키를 생성하려면 먼저 개발자 대시 보드 의 "인증서, 식별자 및 프로필" 섹션에서 "키" 로 이동해야 합니다. 여기서 새 키를 추가하려면 둥근 파란색 아이콘을 클릭해야 합니다. Apple이 양식을 표시하면 "Apple Key로 로그인"을 사용하여 "Key Name"필드를 채우고 "Apple로 로그인"옵션을 선택하십시오. 이 페이지에서 "구성"을 클릭하여 "기본 응용 프로그램 ID 선택"필드가 응용 프로그램 ID로 채워 졌는지 확인하십시오. 그 자리를 지키면 "저장"을 누른 다음 "계속"을 누른 다음 "등록"(세 개의 버튼, 세 페이지)을 눌러야합니다.

Apple 개발자 - `Sign In With Apple`을 위해 새로운 비공개 키를 등록하는 방법

마지막 화면에서 "등록"을 클릭하면 Apple에서 새 키를 다운로드 할 수있는 페이지로 리디렉션합니다. 따라서이 버튼을 클릭하고 다운로드 한 후 파일을 프로젝트 루트로 이동하십시오. 파일을 이동하는 동안 작업을 용이하게하려면 이름을 바꿉니다 authkey.p8. Apple Developer Portal로 돌아가서 "완료"를 클릭하고 키 ID를 적어 두십시오.

그런 generate-secret.js다음 프로젝트 루트 내부에서 호출되는 새 파일을 만들고 다음 코드를 추가합니다.

const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKey = fs.readFileSync("./authkey.p8");
const token = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "2 days",
  audience: "https://appleid.apple.com",
  issuer: "TEAM_ID",
  subject: "com.brunokrebs.webapp",
  keyid: "KEY_ID"
});

console.log("The token is:", token);
참고 :com.brunokrebs.webapp 서비스 ID 및 TEAM_ID팀 ID 의 식별자 로 교체 해야 합니다 . 이 값을 찾으려면 이 페이지를 방문하십시오 . 또한 KEY_ID앞서 언급한 키 ID 로 교체해야 합니다 .

이제이 작은 스크립트를 실행하여 새 토큰을 생성하십시오.

node generate-secret.js
스크립트가 출력하는 값은 CLIENT_SECRET환경 변수 에서 사용할 값입니다 . 따라서 서버로 가서 실행중인 웹 응용 프로그램 인스턴스를 중지하고 다음 명령을 실행하십시오.

# now you need to use the real values
export CLIENT_ID=com.brunokrebs.webapp
export CLIENT_SECRET=eyJ...KsA
export CALLBACK=https://brunokrebs.com/callback

npm start
참고 : 이번에는 최종 값으로 환경 변수를 설정해야 합니다.

일이 예상대로 작동하면 도메인에서 다시 실행되는 앱을 다시 볼 수 있습니다. 그런 다음 /auth/.apple이 도메인 에서 경로 를 요청 하면 응용 프로그램에 로그인 할 수 있도록 응용 프로그램이 Apple에서 로그인 페이지로 리디렉션됩니다.

Apple ID (Apple에서 로그인) 기능을 사용하여 웹 응용 프로그램에 로그인하는 예

이 페이지에서 유효한 자격 증명을 사용하면 Apple에서 다중 인증 프로세스가 끝난 후 앱에 로그인합니다.

내용은 아직 초기 단계이지만 이 항목과 위에서 설명한 단계에 대한 자세한 내용은 Apple 에서 의 로그인 설명서 를 참조하십시오.

다음은 무엇입니까?
Apple의 로그인 기능에 대해 알아야 할 것이 많습니다. 발표 이후, Auth0의 여러 팀이 전체적인 함의를 이해하기 위해 노력했으며, Apple의 사용자 및 앱 개발자에게 이것이 어떻게 영향을 미치는지에 대해 계속 알려줄 것입니다. 동시에, 우리는 Auth0이 어떻게 Apple의 로그인 기능을 가능한 한 쉽고 강력하게 구현할 수 있는지에 대한 지원을하고 공유하는 예를 제시 할 것 입니다.

이 기능에 대해 문의 사항이 있으시면이 게시물의 하단에있는 의견란에 문의하십시오!

 지저귀다 아이콘
 링크드 인 아이콘
 페이 스북 아이콘
브루노
브루노 크렙스
R & D 콘텐츠 설계자

확장 성이 뛰어나고 복원력이 뛰어난 응용 프로그램 개발에 열정적입니다. 전 데이터베이스에서부터 마이크로 서비스 (Kubernetes, Docker 등), 프론트 엔드에 이르기까지 모든 것을 좋아합니다. 나는 "단순한"앱이 얼마나 복잡한 지 전혀 알지 못하기 때문에 모든 피스가 함께 작동하여 최종 사용자에게 빠르고 즐거운 경험을 제공하는 방법에 대해 생각하는 것이 놀랍습니다.

프로필보기
# node.js
[toc]

## JS Warm Up

* JavaScript platform
* [JSON](http://www.json.org)

## 설치
* https://nodejs.org
* LTS (Long Term Support) 버전 또는 Current
* `node` and `npm`

## node.js 개요

```
Node.js® is a platform 
built on Chrome's JavaScript runtime 
for easily building fast, scalable network applications. 
Node.js uses an event-driven, non-blocking I/O model 
that makes it lightweight and efficient, perfect 
for data-intensive real-time applications 
that run across distributed devices.
```

### 특징
* JavaScript 기반 플랫폼
* Server-side
* Command Tool
* Desktop Application

### 장점
* 쉬운 시작
* 안정적인 서비스 w/ pm2
* 모듈 248,062 total packages(2016/03/04)
* 성능 개선
  * [linkedin 사례](http://highscalability.com/blog/2012/10/4/linkedin-moved-from-rails-to-node-27-servers-cut-and-up-to-2.html)
    * 서버 감축 Ruby + Mongrel 30대 -> node.js 3대
    * Frontend, Backend 개발자 소통 원활
    * 잡다한 작업 감소해서 로직에 집중
  * [paypal 사례](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/)
    * Java를 Node.js로 대치
    * 더 적은 인원으로 개발 2배 정도 빨라짐
    * 코드량 33%, 파일 40% 감소
    * 성능 개선됨 (15-user: 11.3 vs 21.6 pages/sec)
* C/C++ Addon
  * https://nodejs.org/api/addons.html

### 단점
* No Silver Bullet
  * CPU과다 사용시 이슈
* 예외처리 실수하면 서버 다운 (pm2로 자동 재시작 가능)
* Callback Hell (Async로 커버 가능)
  * http://callbackhell.com


## 비동기 프로그래밍
* 자바스크립트의 경우 비동기 코드 패턴이 다반사
* 기존 코드와 달리 콜백 함수를 함께 넘겨주는 형태
* 이벤트 핸들링에 많이 쓰이는 기법
* 이벤트 루프 사용으로 싱글쓰레드 동작

### blocking, non-blocking

* Input/Output
* IO latency
  * L1: 3 cycles
  * L2: 14 cycles
  * RAM: 250 cycles
  * DISK: 41,000,000 cycles 
  * NETWORK: 240,000,000 cycles

from: https://www.dropbox.com/s/o9g4m7tug3yt1xx/jsconf2009-nodejs.pdf?dl=0

* blocking code
```
var result = db.query("select * from T");
// use result
```

* non-blocking code
```
db.query("select * from T", 
  function(result) {
    // use result
  }
);
```


### 이벤트 루프

<img src="images/event-loop.png" alt="event loop" style="width: 80%"/>

from [blog.udemy.com/learn-node-js/](https://lh4.googleusercontent.com/pwtI1uBbT5Gthva6sGtKu_L3Ih3w2oxt-LA28mEamjrz6dKl87NFKiTxgzlHfGhIuFF107PxLFeWMdc8z3dchWtpqpcaqE4D4nrcSx3UQmfEDmJTL_LzNKQVjg)

* 이벤트 루프 사용으로 싱글쓰레드 동작
  * 기존 서버는 쓰레드 기반
  * 아파치 등은 커넥션 증가에 따라서 메모리 증가
* nginx는 이벤트 루프 방식


### 안티 패턴
```
“헤이, probablyExpensiveFunction(), 니 일을 해줘. 
하지만 나 Single Node.js 쓰레드는 네가 끝낼 때까지 여기서 기다리지 않을거야. 
네 아래에 있는 코드 라인을 계속 실행할거야. 
그러니 여기 이 callbackFunction()을 가져가서 
네가 너의 비싼 일을 모두 끝냈을 때 호출해 주겠니? 
고마워!”
```
from: http://www.nodebeginner.org/index-kr.html#how-to-not-do-it

## 서버사이드 자바스크립트 개발환경 설치
* http://nodejs.org

## 모듈 만들고 참조하기
* commonjs
* require()

## npm 을 통한 확장
* http://npmjs.org
* package.json

## socket.io 모듈
* socket.io
  * [채팅 튜토리얼](https://okdevtv.com/kr/socket.io-chat-kr.html)
* 52라인으로 웹채팅 가능
* index.html

```
<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>

<script>
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
</script>
  </body>
</html>
```

* index.js

```
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```

* package.json

```
{
  "name": "socket-chat-example",
  "version": "0.0.1",
  "description": "my first socket.io app",
  "dependencies": {
    "express": "^4.14.0",
    "socket.io": "^1.5.0"
  }
}
```

## expressjs 웹 프레임워크
* http://expressjs.com/
* npm install -g express-generator
* express myapp
* node.js의 기본 API인 http를 확장

* 기본 http

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

* express.js
  * with package.json `npm init`
  * `npm install express --save`
  * create `exp.js` file

```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```

  * 실행 `node exp.js`

### express-generator
  * `npm install express-generator -g`
  * express.js의 scafold 코드 생성
  * `express myweb`
  * `cd myweb && npm install`
  * run `npm start` 
    * or `node bin/www` 
    * or `DEBUG=myweb:* node bin/www` 
  
### basic routing
* `app.METHOD(PATH, HANDLER)`
  * app is an instance of express.
  * **METHOD** is an HTTP request method, in lowercase.
  * PATH is a path on the server.
  * HANDLER is the function executed when the route is matched.

* get
```
app.get('/', function (req, res) {
    res.send('Hello World!')
})
```
  * `curl 'localhost:3000'`
  * `curl -XGET 'localhost:3000'`


* post
```
app.post('/', function (req, res) {
    res.send('Got a POST request')
})
```
  * `curl -XPOST 'localhost:3000'`

* put
```
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
```
  * `curl -XPUT 'localhost:3000'`

* delete
```
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})
```
  * `curl -XDELETE 'localhost:3000'`

## Routing
* http://expressjs.com/en/guide/routing.html

### methods
get, post, put, head, delete, options, trace, 
copy, lock, mkcol, move, purge, propfind, proppatch, 
unlock, report, mkactivity, checkout, merge, m-search, 
notify, subscribe, unsubscribe, patch, search, connect.

* all
```
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
```

### Route Parameters

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

```
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```

## MairaDB 설치
* [설치링크](https://okdevtv.com/mib/nodejs/node-mariadb)

## MongoDB + node.js
* http://okdevtv.com/mongodb_nodejs.html



## node cluster 시작하기
* native cluster api
  * https://nodejs.org/api/cluster.html

```
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

### node.js clustering with PM2
* https://keymetrics.io/2015/03/26/pm2-clustering-made-easy/

## JavaScript Code Quality
* SonarQube


## node.js PaaS 활용 - heroku
* node.js 지원하는 PaaS
  * 무료사용 가능
* https://www.heroku.com/
* http://okdevtv.com/tip/nodehosting.html



## 디버깅
### 개요
* debugging에서 알아야 할 용어들
  * breakpoint : 중단점입니다. 실행 모드가 아닌 디버그 모드에서 프로그램을 중지하게 되는 지점의 표시입니다. 보통 ide에서 소스 라인 맨 앞 여백을 (더블)클릭하면 생깁니다. 다시 (더블)클릭하면 없어집니다. resume을 실행하면 다음 중단점을 만날 때까지 실행됩니다.
  * step over : 한 줄을 실행합니다. 함수가 있어도 실행 후 다음으로 넘어갑니다.
  * step into : 포커스된 라인에 있는 함수 내부로 들어갑니다.
  * step out : 현재 함수를 끝까지 실행시키고, 호출시킨 곳으로 되돌아 갑니다.
  * resume : 디버그로 한 줄 한 줄 실행시키는 트레이스 모드를 그만두고 다음 브레이크포인트를 만날 때까지 실행합니다.


### node.js debug
* https://nodejs.org/api/debugger.html
```
node debug myscript.js
```

* myscript.js
```
x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');
```

* node-inspector (X)
  * https://github.com/node-inspector/node-inspector#node-inspector
  * 크롬브라우저를 독립적으로 띄워서 크롬 인스펙터 UI로 디버깅 가능
  * http://okjsp.tistory.com/1165644244
  * `npm install -g node-inspector`
  * `node-debug app.js`

## email
* node-emailer
* gmail smtp 설정 필요 
  * https://www.google.com/settings/security/lesssecureapps

## Test Frameworks
* QUnit
  * http://qunitjs.com/
  * http://backbonejs.org/test/
    * test source  https://github.com/jashkenas/backbone/blob/master/test/index.html
* Testing Essentials
  * http://thenodeway.io/posts/testing-essentials/

* UI 테스트
  * GUITAR
    * http://naver.github.io
    * http://dev.naver.com/projects/guitar
  * jmeter maven
    * jenkins jmeter


## 서버 모니터링
* uptime
  * https://github.com/fzaninotto/uptime
  * http://localhost:8082/

```
$ cd ~/dev/mongodb/bin
$ mkdir -p ~/data/db
$ ./mongod --dbpath=/Users/kenu/data/db

$ cd ~/dev/mongodb/bin
$ mongo
MongoDB shell version: 2.4.9
connecting to: test
> use uptime
switched to db uptime
> db.addUser('uptime', 'okpass');
{
	"user" : "uptime",
	"readOnly" : false,
	"pwd" : "fdc9e10c8f90fac0c9fe786f28cc04f4",
	"_id" : ObjectId("5577b97a62555c0332f63e6f")
}
> exit


$ git clone git://github.com/fzaninotto/uptime.git
$ cd uptime
$ npm install


```

* node server monitor
  * [alternative](https://strongloop.com/strongblog/comparison-tools-to-automate-restarting-node-js-server-after-code-changes-forever-nodemon-nodesupervisor-nodedev/)
  * forever
  * nodemon
  * node-supervisor
  * node-dev
* PM2
  * https://github.com/Unitech/PM2


## 영상
1. 개요, 설치  https://www.youtube.com/watch?v=Z8cOppJwOeU 
2. socket.io, express.js https://www.youtube.com/watch?v=YWaoLdoqSWE 
3. express.js basic routing https://www.youtube.com/watch?v=KOtEZ0j0cic 
4. express.js api https://www.youtube.com/watch?v=-nHp0D4n4Do
5. express.js resources https://www.youtube.com/watch?v=4bIIX07vN-8
6. mariadb 연결(Windows) https://www.youtube.com/watch?v=VTBACySodEc
7. node cluster https://www.youtube.com/watch?v=2v7oRhit8lQ
8. node debugging https://www.youtube.com/watch?v=TaMYKdcBIGA
9. Code Quality https://www.youtube.com/watch?v=1931C8MAvdM
10. jade 2 ejs template https://www.youtube.com/watch?v=IeOoN1LZ4f0
11. Express + MariaDB(mysql) Web App https://www.youtube.com/watch?v=UocHh8604Lc
12. Async, Nested SQL https://www.youtube.com/watch?v=PJ7fQnDLmWg
13. email 

## 참고
* node.js
  * http://nodejs.org
* http://bit.ly/okjavascript
* http://bit.ly/oknodejs
* node.js 내가-쓰기로-선택한-이유
  * https://vinebrancho.wordpress.com/2014/03/24/node-js-내가-쓰기로-선택한-이유/
* octobersky.js
  * https://github.com/octoberskyjs
* PM2 (Process Monitor 2)
  * http://devo.ps/blog/goodbye-node-forever-hello-pm2/
* node.js for other languages
  * https://okdevtv.com/mib/nodejs/otherlanguages
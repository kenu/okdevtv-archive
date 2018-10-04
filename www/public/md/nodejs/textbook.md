# Node.js 기능

## REPL 사용하기

## JS 파일 실행하기

## 모듈로 만들기

## 노드 내장 객체 알아보기

### `global`

### `console`

### 타이머

### `__filename`, `__dirname`

### module, exports

### process

## 내장 모듈 사용하기

### `os`

### `path`

### `url`

### `querystring`

### `crypto`

### `util`


## 파일 시스템 접근하기

### 동기 메서드와 비동기 메서드

### 버퍼와 스트림 이해하기

### 기타 fs 메서드

* `fsCreate.js`
```js
const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('폴더 없음');
      fs.mkdir('./folder', (err) => {
        if (err) {
          throw err;
        }
        console.log('폴더 만들기 성공');
        fs.open('./folder/file.js', 'w', (err, fd) => {
          if (err) {
            throw err;
          }
          console.log('빈 파일 만들기 성공', fd);
          fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
            if (err) {
              throw err;
            }
            console.log('이름 바꾸기 성공');
          });
        });
      });
    } else {
      throw err;
    }
  } else {
    console.log('이미 폴더 있음');
  }
});
```

* `fsDelete.js`
```js
const fs = require('fs');

fs.readdir('./folder', (err, dir) => {
  if (err) {
    throw err;
  }
  console.log('폴더 내용 확인', dir);
  fs.unlink('./folder/newFile.js', (err) => {
    if (err) {
      throw err;
    }
    console.log('파일 삭제 성공');
    fs.rmdir('./folder', (err) => {
      if (err) {
        throw err;
      }
      console.log('폴더 삭제 성공');
    });
  });
});
```

* `copyfile.js`

```js
const fs = require('fs');

fs.copyFile('readme4.txt', 'writeme4.txt', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('ë³µì‚¬ ì™„ë£Œ');
});
```


## 이벤트 이해하기

* `event.js`

```js
const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});

myEvent.on('event2', () => {
  console.log('이벤트 2');
});

myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', () => {
  console.log('이벤트 3');
});

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
  console.log('이벤트 4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
  console.log('event5');
}
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
```

* `on(이벤트명, 콜백)`
* `addListener(이벤트명, 콜백)`
* `emit(이벤트명)`
* `once(이벤트명, 콜백)`
* `removeAllListeners(이벤트명)`
* `removeListener(이벤트명, 리스너)`
* `off(이벤트명, 콜백)`
* `listenCount(이벤트명)`


## 예외 처리하기

* 예외 처리 못하면 Node 프로세스 멈춤. 예) 서버 다운
* 멀티 스레드 프로그램에서 하나가 멈추면 다른 스레드가 대신
* 싱글 스레드인 노드는 전체 서버가 멈춘다는 의미
* 예기치 못한 에러 처리하는 기술 필수

* 문법상의 에러 없다고 가정 - 실제 배포용 코드에 문법 에러가 있다는 것은 말이 안됨
* 좋은 에디터, 좋은 문법 검사 도구

* `error1.js`
```js
setInterval(() => {
  console.log('시작');
  try {
    throw new Error('서버를 고장내주마!');
  } catch (err) {
    console.error(err);
  }
}, 1000);
```

* `error2.js`
```js
const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
```
* 없는 파일 지우지만, 내장 모듈의 에러는 실행 중인 프로세스를 멈추지 않음

* `error3.js`
```js
process.on('uncaughtException', (err) => {
  console.error('예기지 못한 에러', err);
});

setInterval(() => {
  throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
  console.log('실행됩니다.')
}, 2000);
```

* `uncaughtException` 이벤트 리스너로 모든 에러 처리 가능
* 하지만 노드 공식 문서에서는 최후의 수단으로 권함
* 에러 발생시 철저히 기록하는 습관과 주기적 확인과 보완

## 함께 보면 좋은 자료

* http://bit.ly/oknodejs
* https://nodejs.org/dist/latest-v10.x/docs/api/
* https://nodejs.org/dist/latest-v10.x/docs/api/process.html#process_event_uncaughtexception
* https://nodejs.org/dist/lastest-v10.x/docs/api/fs.html#fs_fs_promises_api

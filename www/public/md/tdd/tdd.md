# Test Driven Development

* 테스트 코드 먼저 짜고, 해당 함수를 이어서 짜는 방법

## 필요환경

* node.js
* jest

## 예) 객체 배열 합치기

* 객체 : {}
* 배열 : []
* 객체 배열 : [{},{},{}]

## 00 init

```
npm i -g jest
```

## Unit Test

* 함수 단위로 테스트하는 코드
* 가장 기본적인 테스트

## 코드 형식

* `assert(함수(입력값), 기대값)`
* `expect(함수(입력값)).toBe(기대값)`

## 파일명 관례

* `*.test.js`, `*.spec.js`

## example code
* https://github.com/kenu/okdevtv-examples/tree/master/jest

## ref
* https://jestjs.io/


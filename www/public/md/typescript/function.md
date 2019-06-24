# Function

## 자바스크립트 함수
* 기명 함수와 익명 함수
* 느슨한 타입 언어 (loosely typed language)
* 추론된 타입(inferred type) 지정
* `function-type-skip.ts`

## 타입스크립트 함수

```ts
function max(x: number, y: number):number {}
```
* `parameter-return-type.ts`

## 기본 초기화 매개변수

```ts
function pow(x: number, y: number = 2): number {}
```
* `default-parameter.ts`

## 나머지 매개변수(rest parameter)

```ts
function concat(...restParameter) {}
function concat(...restParameter: string[]) {}
```
* `rest-parameters.ts`

## 선택 매개변수

```ts
function sum(a: numbber, b?: number): number {}
```
* `optional-parameters.ts`

## 함수 오버로드

```ts
function add(a: string, b: string) : string;
function add(a: number, b: number) : number;
function add(a: any, b: any) : any {
    return a + b;
}
```
* `function-overloads.ts`

## 익명 함수와 화살표 함수

```ts
function(){}
() => {}
```

```ts
(function(){})()
(() => {})()
```
* `arrow-function-with-filter.ts`
* `arrow-function-with-reduce.ts`

## 객체 리터럴과 객체 리터럴 타입
* `arrow-function-this.ts`
* 객체 리터럴 타입은 인터페이스를 이용해 정의
* `arrow-function-this2.ts`

## 익명 함수의 타입 선언

```ts
let myConcat = function (str1: string, str2: string): string { return str1 + str2; };
let myConcat:(str1: string, str2: string) => string = (str1, str2) { return str1 + str2; };
```

## 콜백 함수

* `callback-function-step1.ts`
* `callback-function-step2.ts`

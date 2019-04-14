# 프로젝트 구성과 번들링

* bundling : 여러 파일을 합치는 과정
* TypeScript `--out` 옵션
* 또는 웹팩(webpack) 이용

## 번들러 이용

* HTML, CSS, JS 파일 모아서 배포 가능한 파일로 번들링
* 모듈간의 의존관계 파악해서 정적 파일 형태로 빌드 결과 생성
* 웹팩 설치
  * `npm i -g webpack`
* 샘플 파일 `src/entry1.js`

```js
document.write("hello World!");
```

## webpack config

* `webpack.config.js`

```js
var path = require('path');
module.exports = {
  entry: './src/entry1.js',
  output: {
    filename: 'build1.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

* 명령

```
webpack
```

## TypeScript Loader

```
mkdir webpack-ts
cd webpack-ts
npm init -y
npm i --save-dev ts-loader typescript
tsc --init
```

## 라이브러리 기반 프로젝트 구성

```
mkdir list-jquery
cd list-jquery
tsc --init
npm init -y
npm i --save @types/jquery @types/underscore jquery underscore
npm i --save-dev html-webpack-plugin ts-loader typescript webpack uglifyjs-webpack-plugin
```

## AngularJS 기반 프로젝트 구성

```
mkdir list-angularjs
cd list-angularjs
tsc --init
npm init -y
npm i --save @types/angular @types/underscore angular underscore
npm i --save-dev html-webpack-plugin ts-loader typescript webpack uglifyjs-webpack-plugin
```

## examples

* download [webpack-examples](/md/typescript/webpack-examples.tgz)


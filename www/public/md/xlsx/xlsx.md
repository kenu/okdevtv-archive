# XLSX (엑셀파일 다루기)

* excel 파일 읽기
* excel 파일 다운로드 하기
* excel 파일 업로드 하기
* DB 에 insert, update 하기

## 라이브러리
* SheetJS
  * https://github.com/SheetJS/js-xlsx
* Demo
  * http://sheetjs.com/demos

## 설치

```
npm i xlsx
```

## Simple Example

```js
var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
/* DO SOMETHING WITH workbook HERE */
```

## SpreadSheet 구조

* File WorkBook
  * Sheet
    * Cell
      * Content

```js
let workbook = XLSX.readFile("test.xlx");
let worksheet = XLSX.Sheets[0];
```


## API, Documents

* https://docs.sheetjs.com/






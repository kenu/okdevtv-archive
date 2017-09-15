# HTML

* 1989 Tim Berners-Lee

## 시작하기
* 브라우저에서 보이는 태그 기반의 언어
* 콘텐츠는 태그 사이에 위치
* 웹 애플리케이션을 위한 HTML5 표준 2014 Q4 완성 예정
* 스타일은 CSS, 액션은 JavaScript에게 위임
* 나이 많은 웹 개발자는 테이블 태그로 레이아웃

## 페이지 소스 기본 구조
```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```
### head 태그
콘텐츠 이외의 정보
title, meta, link, script
### body 태그
콘텐츠 표시 영역

## 문법
`<태그 속성="값">콘텐츠</태그>`

### 태그의 종류
* 헤드
  * doctype, html, head, title, base, link, meta, style, script, noscript
* 섹션
  * body, article, nav, aside, section, header, footer, h1-h6, main, address,
* 그루핑
  * p, hr, pre, blockquote, ol, ul, li, dl, dt, dd, figure, figcaption, div
* 테이블
  * table, caption, thead, tbody, tfoot, tr, th, td, col, colgroup
* 폼
  * form, fieldset, legend, label, input, button, select, datalist, optgroup, option, textarea
* 폼2
  * keygen, output, progress, meter
* 인터랙티브
  * details, summary, command, menu
* 편집
  * del, ins
* 임베디드
  * img, iframe, embed, object, param, video, audio, source, canvas, track, map, area
* 텍스트-레벨
  * a, em, strong, i, b, u, s, small, abbr, q, cite, dfn, sub, sup
* 텍스트-레벨2
  * time, code, kbd, samp, var, mark, bdi, bdo, ruby, rt, rp, span, br, wbr

## 기본 HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Basic HTML</title>
    </head>
    <body>
        <h1>Web Page</h1>
    </body>
</html>
```

## 참고
* A history of HTML
  * http://www.w3.org/People/Raggett/book4/ch02.html
* w3schools
  * http://www.w3schools.com/html/
* HTML5 Doctor
  * http://html5doctor.com/

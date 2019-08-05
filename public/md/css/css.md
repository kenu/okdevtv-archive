# CSS
* 1996 W3 Consortium

## 시작하기
* HTML의 스타일링을 담당
* 셀렉터(selector)를 통해서 DOM(Document Object Model) 요소 선택
* HTML5 표준 스펙으로 포함
* CSS에 익숙하지 않은 대부분의 웹 개발자는 테이블 태그로 레이아웃

## CSS 기본 문법
* `<style>` 태그 사이에 위치
* 셀렉터 {속성 : 값; 속성2 : 값2;}
* 인라인 스타일, 태그 안에 style="속성 : 값; 속성2 : 값2;" 형식으* 로 기술

## 셀렉터
* HTML 요소(element)를 선택하는 기술
* 타입, id, 클래스 3가지 기본 방식
* 속성, 유사 클래스, 유사 요소, 조합으로 선택
* CSS Selector https://okky.kr/article/197120

## 색상
* 색상 영어 단어 또는 칼라코드
* white, black, gray, red, green, blue, yellow, orange
* #RGB 레드, 그린, 블루
* 0,1,2,...,9,a,b,c,d,e,f 16진수

| #RGB | #RRGGBB | color |
|---|---|---|
| #000 | #000000 | black |
| #888 | #888888 | gray  |
| #fff | #ffffff | white |
| #f00 | #ff0000 | red   |
| #0f0 | #00ff00 | green |
| #00f | #0000ff | blue  |

## 크기
* 16px 12pt 1.0em 100%
*  8px  6pt 0.5em  50%

## 텍스트
* font-weight: bold italic;
* text-decoration: underline
* font-family: monospace

## 박스 모델
* 콘텐츠를 중심으로 padding, border, margin이 둘러 싼 형태
* 4방향의 순서는 top right bottom left
* box model

<img src="https://okdevtv.com/images/css/boxmodel.png" alt="box model" />

## 레이아웃
* 테이블 태그로 레이아웃 잡을 때의 단점
* 테이블 안의 테이블 또 그 안의 테이블 헬
* CSS를 이용해서 콘텐츠를 자유롭게 배치 가능
* 좋은 것이지만 쉬운 것은 아님
* display
* float
* position
* z-index

## CSS3
* 기존 포토샵으로 했던 이미지 효과 대체 가능
* 그레디언트, 그림자 효과, 투명도, 둥근 모서리 등
* 애니메이션, 트랜지션 효과

## Related
* [Flexbox](/mib/css/flexbox)

##  참고
* The History of CSS
  * http://www.cssneuse.net/the-history-of-css.php
* w3schools
  * http://www.w3schools.com/css/
* csszengarden.com
  * http://csszengarden.com

# Kibana
* 데이터 시각화 도구 Data Visualization Tool
* 검색엔진(elasticsearch) 데이터를 이용해서 시간에 따른 차트를 자동으로 그려줌

## 기능
* 키워드 검색
* 라인차트, 파이차트, 영역차트, 지도차트 가능
* 시간 선택 가능

## Discover
* 좌측 Field목록에서 보기 원하는 항목 add 또는 remove

### IP 검색
* 검색어는 따옴표("")로 감싼다.
* "123.123.123.123" 
* clientip: "123.123.123.123"
* clientip:["188.208.0.0" TO "188.208.255.255"]
  * TO는 대문자

### URL 검색
* "/order/form.html"
* request : "/order/form.html"

### device 검색 크롤러 제외
* 데이터 수집시 useragent 플러그인이 된 경우 가능
* -device: "Spider"

### 여러 URL 검색
* "/order/form.html" OR "/order/end.html"
* OR 또는 AND는 대문자

### empty field "-" 제외
* -referrer.keyword : "-"

## Console
* `GET .kibana/_search`

## Reporting


## 참고
* 질의어 문법(query syntax)
  * Lucene 검색 엔진의 문법
  * https://lucene.apache.org/core/2_9_4/queryparsersyntax.html

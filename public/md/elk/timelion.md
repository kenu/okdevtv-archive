# Timelion
* The time series composer for Kibana

## Usage
* 이전 데이터와 비교
```
.es(*), .es(offset=-1d)
```
<img src="images/timelion-01-offset.webp" alt="offset">

* 수식
```
.es(*).divide(.es(offset=-2h))
```

* bars
```
.es(), .es().bars().pointw()
```

## World Bank Open Database
* 기간을 조정 : 2000~2016
```
.wbi(KR)
```

## ref
* https://www.elastic.co/kr/blog/timelion-timeline
* Functions
  * https://github.com/elastic/timelion/blob/master/FUNCTIONS.md
* If else
  * https://www.elastic.co/blog/timeseries-if-then-else-with-timelion

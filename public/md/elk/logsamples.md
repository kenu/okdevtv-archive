# log samples

### %{reqs[1]}
```
210.94.153.153 - - [19/May/2016:10:48:41 +0900] "GET /articles/community HTTP/1.1" 200 7164 "http://okky.kr/article/78051" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36" "-"
223.62.190.104 - - [19/May/2016:10:49:29 +0900] "GET /articles/tech?query=jsp%EB%B2%84%ED%8A%BC&sort=id&order=desc HTTP/1.1" 200 3618 "http://okky.kr/articles/tech" "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1" "-"
```

### iis
```
#Software: Microsoft Internet Information Services 6.0
#Version: 1.0
#Date: 2002-05-24 20:18:01
#Fields: date time c-ip cs-username s-ip s-port cs-method cs-uri-stem cs-uri-query sc-status sc-bytes cs-bytes time-taken cs(User-Agent) cs(Referrer) 
2002-05-24 20:18:01 172.224.24.114 - 206.73.118.24 80 GET /Default.htm - 200 7930 248 31 Mozilla/4.0+(compatible;+MSIE+5.01;+Windows+2000+Server) http://64.224.24.114/
```

```
    match => {
        "message" => "\[%{HTTPDATE:timestamp}\] %{IPORHOST:clientip} %{HTTPDUSER:ident} %{IPORHOST:serverip} "(?:%{WORD:verb} %{NOTSPACE:request}(?: HTTP/%{NUMBER:httpversion})?|%{DATA:rawrequest})" %{NUMBER:response} (?:%{NUMBER:bytes}|-) %{QS:referrer} %{QS:agent}" }
    }
    date {
        match => [ "timestamp" , "yyyy-MM-dd HH:mm:ss" ]
#        match => [ "timestamp" , "dd/MMM/yyyy:HH:mm:ss Z" ]
    }
}
```

## referrer
211.249.40.15 - - [11/Nov/2016:06:49:14 +0900] "GET / HTTP/1.1" 200 9434 "http://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040101&docId=263938221&qb=Q+yWuOyWtOyekOqyqeymnQ==&enc=utf8&section=kin&rank=22&search_sort=0&spq=1" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36" "-"

## encoding
```
"BC\xc4\xab\xb5\xe5" 문자열 Logstash에서 어떻게 파싱할 수 있을까요?
"%EB%B0%87" #urldecode
```
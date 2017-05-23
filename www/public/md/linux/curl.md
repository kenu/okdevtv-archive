# curl
* https://curl.haxx.se/
* call url
* RESTful API 작업에 유용
* Windows에서는 git bash( https://git-scm.com )로 이용 가능

## method 지정
* GET, POST, PUT, DELETE
```
curl -XGET https://okdevtv.com
curl -XGET https://okdevtv.com\?param=value
curl -XGET 'https://okdevtv.com?param=value'
```

## 다운로드
```
curl -O http://downloadlink
```

## 헤더 설정
* `-H` or `--header`

```
curl --header 'headername: value' http://okdevtv.com

curl -XPOST 'localhost:3000/apis/tip' -H "Content-Type: application/json" -d '{"name": "kenu", "email": "test@test.com"}'
```

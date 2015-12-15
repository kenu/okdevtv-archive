1. 로그 확보
2. fluentd를 로그있는 서버에 설치(AWS)
3. QBox.io에서 ElasticSearch + Kibana 연결된 인스턴스 생성
4. fluentd 설정 변경


2. fluentd 설치
* requirement
  * ruby
  * make
  
### ruby 설치
* `sudo apt-get install ruby-dev`

### make 설치
* `sudo apt-get install build-essential`

### libcurl 설치
* `sudo apt-get install libcurl4-openssl-dev`


### flentd 설치
* https://github.com/fluent/fluentd/#quick-start
```
gem install fluentd
fluentd -s conf
fluentd -c conf/fluent.conf &
echo '{"json":"message"}' | fluent-cat debug.test
```

3. QBox.io에 EK 인스턴스 생성

4. fluentd 설정 변경

* 설정파일 폴더 생성
```
sudo mkdir /etc/fluentd
mkdir -p ~/workspace/setting/fluentd/
```

* fluentd 결과 로그 폴더 생성
```
mkdir -p ~/log/fluentd/failed
mkdir -p ~/log/fluentd/failed2
```

### fluentd 플러그인 설치
* `gem list --local`

#### before
```
ubuntu@ip-172-30-1-228:~/log$ gem list --local

*** LOCAL GEMS ***

cool.io (1.4.1)
fluentd (0.12.16)
http_parser.rb (0.6.0)
json (1.8.3)
msgpack (0.5.12)
sigdump (0.2.3)
string-scrub (0.0.5)
thread_safe (0.3.5)
tzinfo (1.2.2)
tzinfo-data (1.2015.6)
yajl-ruby (1.2.1)
```

#### after
```
*** LOCAL GEMS ***

appraisal (2.1.0)
bundler (1.10.6)
cool.io (1.4.1)
elasticsearch (1.0.13)
elasticsearch-api (1.0.13)
elasticsearch-transport (1.0.13)
excon (0.45.4)
faraday (0.9.1)
fluent-mixin-config-placeholders (0.3.0)
fluent-plugin-elasticsearch (1.0.0)
fluent-plugin-exclude-filter (0.0.1)
fluent-plugin-extract_query_params (0.0.12)
fluent-plugin-grep (0.3.4)
fluent-plugin-logfmt-parser (0.0.1)
fluent-plugin-record-modifier (0.3.0)
fluentd (0.12.16)
http_parser.rb (0.6.0)
json (1.8.3)
logfmt (0.0.7)
msgpack (0.5.12)
multi_json (1.11.2)
multipart-post (2.0.0)
patron (0.5.0)
rake (10.4.2)
sigdump (0.2.3)
string-scrub (0.0.5)
sys-proctable (0.9.8 universal-linux)
thor (0.19.1)
thread_safe (0.3.5)
tzinfo (1.2.2)
tzinfo-data (1.2015.6)
uuidtools (2.1.5)
yajl-ruby (1.2.1)
ubuntu@ip-172-30-1-228:~/log$ 
```

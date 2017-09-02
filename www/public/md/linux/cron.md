# cron
* scheduled job

## format

```
# 분 시 일 월 요일
0 1 * * * /home/ec2-user/local/cron/delete_old.sh >> /home/ec2-user/local/cron/log/delete_old.log
```

* elasticsearch log format
```
$ curl "localhost:9200/_cat/indices"
yellow open logstash-2017.09.01 KS72egJCTDK647oiwIqjYA 5 1  869526 0  831.5mb  831.5mb
yellow open logstash-2017.08.31 La-2TSsXRvuREdyJsduX8g 5 1 1019936 0  936.9mb  936.9mb
yellow open logstash-2017.08.30 IIKTBxEZS72QMAhpLMW7sA 5 1 1098329 0 1023.9mb 1023.9mb
yellow open logstash-2017.08.29 GMgS3Y3nTEStzuEMng5_2Q 5 1  325828 0  316.2mb  316.2mb
yellow open logstash-2017.09.02 -qhAIKUkQmOx4sRGcS3TsA 5 1  167579 0  166.7mb  166.7mb
yellow open .kibana             PbjKpwjlSLyXhrZMllLBrw 1 1      21 3   93.4kb   93.4kb
```

* 5일 전 날짜
```
$ date -d"5days ago" "+%Y.%m.%d"
2017.08.28
```

* index name string
```
$ YMD=`date -d"5days ago" "+%Y.%m.%d"`
$ INDEX="logstash-$YMD"
$ echo $INDEX
$ logstash-2017.08.28
```

* delete 5days ago index
```
curl -XDELETE "localhost:9200/$INDEX"
```

* make shell script file
  * `~/local/cron/delete_old.sh`
```
#!/bin/sh
YMD=`date -d"5days ago" "+%Y.%m.%d"`
INDEX="logstash-$YMD"
curl -XDELETE "localhost:9200/$INDEX"
echo "-- end of job"
```

* schedule time
```
crontab -e
```

```
# 분 시 일 월 요일
0 1 * * * /home/ec2-user/local/cron/delete_old.sh >> /home/ec2-user/local/cron/log/delete_old.log
```

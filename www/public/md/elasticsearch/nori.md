# Nori 
* Lucene 한글형태소 분석기
* [mecab-ko-dic dictionary](https://bitbucket.org/eunjeon/mecab-ko-dic)

## install plugin

```
cd /path/to/{ES_HOME}
sudo bin/elasticsearch-plugin install analysis-nori

# remove plugin
sudo bin/elasticsearch-plugin remove analysis-nori
```

## custom dictionary

* config/userdict_ko.txt

```
c++      
C샤프
세종
세종시 세종 시
```

* set tokenizer

```
curl -X PUT "localhost:9200/nori_sample" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "index": {
      "analysis": {
        "tokenizer": {
          "nori_user_dict": {
            "type": "nori_tokenizer",
            "decompound_mode": "mixed",
            "user_dictionary": "userdict_ko.txt"
          }
        },
        "analyzer": {
          "my_analyzer": {
            "type": "custom",
            "tokenizer": "nori_user_dict"
          }
        }
      }
    }
  }
}
'
```

```
curl -X GET "localhost:9200/nori_sample/_analyze" -H 'Content-Type: application/json' -d'
{
  "analyzer": "my_analyzer",
  "text": "세종시"  
}
'
```

* 숫자 제외

```
curl -X DELETE "localhost:9200/nori_sample"
curl -X PUT "localhost:9200/nori_sample" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "index": {
      "analysis": {
        "analyzer": {
          "my_analyzer": {
            "tokenizer": "nori_tokenizer",
            "filter": [
              "my_posfilter"
            ]
          }
        },
        "filter": {
          "my_posfilter": {
            "type": "nori_part_of_speech",
            "stoptags": [
              "NR"   
            ]
          }
        }
      }
    }
  }
}
'
```

```
curl -X GET "localhost:9200/nori_sample/_analyze" -H 'Content-Type: application/json' -d'
{
  "analyzer": "my_analyzer",
  "text": "여섯 용이"  
}
'
```



## ref
* https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-nori.html
* https://bitbucket.org/eunjeon/mecab-ko-dic


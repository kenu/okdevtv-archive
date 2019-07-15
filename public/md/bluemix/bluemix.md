# Bluemix
* 첫 30일간 무료

## Watson Conversation
* https://www.ibmwatsonconversation.com

### API
* https://watson-api-explorer.mybluemix.net/apis/conversation-v1

### interface
* request
```
{
      "input" : {
          "text" : "Hi"
      }, 
      "context":{
          "user" : "HJ" 
      }
}
```

* response
```
{
      "intents" : [
      "intent" : "Greeting"
      "confidence" : 0.99 ],
      "entities" : [ ],
      "input" : {
      "text" : "Hi" },
      "output": {
      "text" : "Hello HJ" },
      "context":{
      "user" : "HJ" }
}
```


## ref
* Watson Conversation 소개 문서 
  * https://www.ibm.com/watson/developercloud/doc/conversation/index.html
* API 문서
  * https://www.ibm.com/watson/developercloud/conversation/api/v1/#introduction
* API 테스트
  * https://watson-api-explorer.mybluemix.net/apis/conversation-v1
* 개발 툴, SDK, Starter Kit 
  * https://www.ibm.com/watson/developercloud/developer-tools.html
* 튜토리얼
  * https://developer.ibm.com/kr/cloud/bluemix/watsonservice/2017/01/13/watsonchatbot-1-watson-conversation/
* 샘플 코드
  * https://github.com/watson-developer-cloud/conversation-simple
* Watson SpEL
  * https://developer.ibm.com/kr/cloud/bluemix/watsonservice/2017/01/06/watson-conversation%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-expression-lanaguage/
* tutorial 
  * http://ibm.biz/meetup23th
* Node.js 애플리케이션 텔레그램과 연동하기
  * https://developer.ibm.com/kr/developer-%EA%B8%B0%EC%88%A0-%ED%8F%AC%EB%9F%BC/2017/03/11/node-js-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%ED%85%94%EB%A0%88%EA%B7%B8%EB%9E%A8%EA%B3%BC-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0/

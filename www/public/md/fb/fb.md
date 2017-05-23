# Facebook with Login
* https://developers.facebook.com/quickstarts/?platform=web

```
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : 'xxxxxxxxxxxxx',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
```

```
http://159.203.239.61:3000/
```


## 참고
* [node.js] passport-facebook 모듈로 페이스북 로그인 연동하기
  * http://dhparkblog.tistory.com/21
* passport-facebook
  * https://github.com/jaredhanson/passport
* passport-facebook example
  * https://github.com/passport/express-4.x-local-example
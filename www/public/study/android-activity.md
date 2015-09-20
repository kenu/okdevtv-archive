## 화면(Activity) 만들기
* *Activity.java
* res/layout/activity_*.xml
* AndroidManifest.xml 에 *Activity 등록
```
     Caused by: android.content.ActivityNotFoundException: Unable to find explicit activity class {com.okdevtv.photoshare/com.okdevtv.photoshare.SignUpActivity}; have you declared this activity in your AndroidManifest.xml?
```


## 화면 이동하기
1. 버튼 만들기(xml)
  * 버튼 메소드 이름 지정
2. 버튼 이벤트 메소드(java)
  * 인텐트로 띄울 Activity 지정
  * startActivity(intent);
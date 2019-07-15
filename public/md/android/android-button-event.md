# 안드로이드 튜토리얼

## 액티비티 띄우기

## 버튼 클릭 이벤트 처리
```xml
<Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@string/button_send"
    android:onClick="sendMessage" />
```


```java
/** Called when the user clicks the Send button */
public void sendMessage(View view) {
    // Do something in response to button
}
```


### IntelliJ Tip
* Local History로 복원하기
* VCS Commit


## Action Bar

### Feature
* 앱 아이콘
* 타이틀
* 드랍다운 메뉴

### Set up
#### 3.0 이상
* Theme.Holo 또는 상속받은 테마
* minSdkVersion, targetSdkVersion 이 11 이상
```xml
<manifest ... >
    <uses-sdk android:minSdkVersion="11" ... />
    ...
</manifest>
```

#### 2.1 이상
* Android Support Library 필요
* ActionBarActivity 상속
```java
public class MainActivity extends ActionBarActivity { ... }
```
* AppCompat 테마
```xml
<activity android:theme="@style/Theme.AppCompat.Light" ... >
```
* minSdkVersion은 7 이상
```xml
<manifest ... >
    <uses-sdk android:minSdkVersion="7"  android:targetSdkVersion="18" />
    ...
</manifest>
```

### Action Button 추가

#### Actions을 XML로 정하기
* res/menu/main_activity_actions.xml
```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android" >
    <!-- Search, should appear as action button -->
    <item android:id="@+id/action_search"
          android:icon="@drawable/ic_action_search"
          android:title="@string/action_search"
          android:showAsAction="ifRoom" />
    <!-- Settings, should always be in the overflow -->
    <item android:id="@+id/action_settings"
          android:title="@string/action_settings"
          android:showAsAction="never" />
</menu>
```

### Action Bar 스타일링














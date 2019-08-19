# 안드로이드와 안드로이드 스튜디오
* Android with Android Studio
* 2003 Android, Inc.

## 시작하기
* 리눅스 기반의 모바일 운영체제
* 개발 프레임워크는 자바 언어 기반
* JVM이 아닌 달빅(Dalvik VM) 사용
* 구글을 중심으로 한 OHA(Open Handset Alliance) 주도
* 영역 확장, 폰 > 태블릿 > TV > 자동차 > 시계
* 개발도구는 이클립스(ADT)에서 IntelliJ 기반(Android Studio)으로 변경 (2014)

## 설치
* 개발도구는 무료로 다운로드 가능
* 2014년부터 이클립스 기반의 ADT(Android Development Tookit)는 개발 중단
* 2014년부터 인텔리J IDEA 기반의 Android Studio로 개발할 것을 권장
* <img src="/images/android/android-ide-01.png" alt="old ADT">
* 안드로이드 스튜디오 = 인텔리J IDEA 무료패키지 + 안드로이드 개발 기능
* Community 에디션으로 자바만 가능. 웹/스프링 개발 지원 안함
* IDE 기본 설치 경로 Program Files/Android/android-studio
* SDK 기본 설치 경로 ~/AppData/Local/Android/sdk
* ~는 사용자 홈 폴더. 기본 설치 경로 변경 가능
* <img src="/images/android/android-install-01.png" alt="Android Studio path">

## 안드로이드 프로젝트 생성
* 이클립스의 마법사보다 개선된 인터페이스
* <img src="/images/android/android-install-02.png" alt="Android Studio splash image">
* <img src="/images/android/android-project-01.png" alt="Android New Project">
* <img src="/images/android/android-project-02.png" alt="Project Configure">
* <img src="/images/android/android-project-03.png" alt="Select Form Factor">
* <img src="/images/android/android-project-04.png" alt="Select Template Activity">
* <img src="/images/android/android-project-05.png" alt="Configure Activity">
* <img src="/images/android/android-project-06.png" alt="time for gradle build">
* <img src="/images/android/android-project-07.png" alt="Android Studio Started">

## SDK, AVD 매니저
* ADT 시절과 동일한 인터페이스
* 다양한 안드로이드 버전 중에서 개발할 버전 선택
* 느린 에뮬레이터 사용보다는 실제 기기 연결 권장
* 또는 VirtualBox 기반의 Genymotion 권장 ( http://www.genymotion.com/ )
* <img src="/images/android/android-sdk-01.png" alt="SDK Manager" class="img">
* <img src="/images/android/android-sdk-02.png" alt="Select and install target version">
* <img src="/images/android/android-sdk-03.png" alt="SDK installed">
* <img src="/images/android/android-avd-01.png" alt="AVD Manager" class="img">

## 실행
* <img src="/images/android/android-studio-01.png" alt="Run" class="img">
* <img src="/images/android/android-studio-02-choose.png" alt="Choose Devices" class="img">

## 참고
* 안드로이드 스튜디오 가이드
  * https://developer.android.com/sdk/installing/studio.html
* 안드로이드 스튜디오와 이클립스 단축키 비교
  * https://okdevtv.com/md/#intellij/intellij-shortcuts.md
* 안드로이드 아프리카TV 방송 동영상
  * http://bit.ly/okdevtv-android

# JavaScript Mechanism

## Engine Role
* Call Stack
* Heap Memory

<img src="https://cdn-images-1.medium.com/max/1600/1*OnH_DlbNAPvB9KLxUCyMsA.png" alt="JS Engine" style="width: 90%; max-width: 480px;">

## Browser
* Engine + WebAPI + Event Loop + Callback Queue

<img src="https://cdn-images-1.medium.com/max/1600/1*4lHHyfEhVB0LnQ3HlhSs8g.png" alt="Browser components" style="width: 90%; max-width: 480px;">

## JS Engines
* V8 — open source, developed by Google, written in C++
* Rhino — managed by the Mozilla Foundation, open source, developed entirely in Java
* SpiderMonkey — the first JavaScript engine, which back in the days powered Netscape Navigator, and  today powers Firefox
* JavaScriptCore — open source, marketed as Nitro and developed by Apple for Safari
* KJS — KDE’s engine originally developed by Harri Porten for the KDE project’s Konqueror web browser
* Chakra (JScript9) — Internet Explorer
* Chakra (JavaScript) — Microsoft Edge
* Nashorn, open source as part of OpenJDK, written by Oracle Java Languages and Tool Group
* JerryScript — is a lightweight engine for the Internet of Things.

## JS Optimization
* 객체 속성 순서 : 항상 숨겨진 클래스와 최적화 된 코드를 공유할 수 있도록 동일한 순서로 객체 속성을 인스턴스화합니다.
* 동적 속성 : 인스턴스화 후에 객체에 속성을 추가하면 숨겨진 클래스가 변경되고 이전 숨겨진 클래스에 대해 최적화 된 모든 메서드가 느려집니다. 대신, 생성자에서 모든 객체의 속성을 할당하십시오.
* 메서드 : 동일한 메서드를 반복적으로 실행하는 코드는 인라인 캐싱으로 인해 여러 다른 메서드를 한 번만 실행하는 코드보다 빠르게 실행됩니다.
* 배열 : 키가 증분 번호가 아닌 경우 희소(sparse) 배열을 사용하지 않습니다. 그 안에 모든 요소가 없는 희귀 배열은 해시 테이블입니다. 이러한 배열의 요소는 액세스하는 것이 더 비쌉니다. 또한 대형 배열 사전 할당을 피하십시오. 필요할 때 확장하는 것이 낫습니다. 마지막으로 배열의 요소를 삭제하지 마십시오. 키가 희박(sparse)합니다.
* 태그 값 : V8은 32 비트의 객체 및 숫자를 나타냅니다. 31 비트 때문에 SMI (SMall Integer)라는 객체 (플래그 = 1) 또는 정수 (플래그 = 0)인지 여부를 알기 위해 비트를 사용합니다. 그런 다음 숫자 값이 31비트보다 크면 V8은 숫자를 상자에 넣고 이중으로 바꾸고 새 개체를 만들어 내부에 번호를 넣습니다. 가능한 한 31비트 부호있는 숫자를 사용하여 JS 개체에 비싼 박싱 작업을 피하십시오.


## ref
* How JS Works
  * https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf

* How JS Actually Works
  * https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e

* GitHut stats
  * http://githut.info/

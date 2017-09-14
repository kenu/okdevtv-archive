# Java Inheritance
* 상속
* 부모 클래스, 자식 클래스
* `Child extends Parent`
* 부모의 접근 가능한 필드와 메소드 사용 가능
* 재정의(override) : 자식이 같은 시그니처의 메소드를 재정의 함

## Example
* Animal.java
* Tiger.java
* Chicken.java

* Animal.java

```
public class Animal {
  String name;
  int legs;
  String getInfo() {
    return name + ", " + legs;
  }
}
```

* Tiger.java

```
public class Tiger extends Animal {

}
```

* Chicken.java

```
public class Chicken extends Animal {
  int wings;
  
  @Override
  String getInfo() {
    return name + ", " + legs + " legs, " + wings + " wings";
  }
}
```

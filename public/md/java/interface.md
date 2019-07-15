# Java Interface
* 메소드 시그니처와 상수만 정의
* 설계도(Specification)와 같은 역할
* 다양한 방법으로 구현(implementation) 가능
* 공통의 타입 역할

## example
* Car.java

```java
public interface Car {
	public int getSpeed();
	public boolean accelerate();
}
```

* Avante.java

```java
public class Avante implements Car {
	int speed;

	@Override
	public int getSpeed() {
		return speed;
	}

	@Override
	public boolean accelerate() {
		speed += 10;
		return false;
	}

}
```

* Matiz.java

```java
public class Matiz implements Car {
	int speed;

	@Override
	public int getSpeed() {
		return speed;
	}

	@Override
	public boolean accelerate() {
		speed += 20;
		return false;
	}

}
```


* Drive.java

```java
public class Drive {
	public static void main(String[] args) {
		Car avante = new Avante();
		Car matiz = new Matiz();

		drive(avante, "Avante");
		drive(matiz, "Matiz");
	}

	private static void drive(Car car, String name) {
		System.out.println(name);
		for (int i = 0; i < 10; i++) {
			car.accelerate();
			System.out.println(i + ":" + car.getSpeed());
		}
	}
}
```

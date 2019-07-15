# Autoboxing and Unboxing
* automatic conversion : Primitive types ↔︎ Wrapper classes
* Autoboxing is for primitive types to Wrapper classes
* Unboxing is for opposite direction
* ex) int ↔︎ Integer, float ↔︎ Float, long ↔︎ Long

```java
List<Integer> li = new ArrayList<>();
for (int i = 1; i < 50; i += 2)
    li.add(i);
```

```
Character ch = new Character('a');
Integer i = new Integer(3);
?: 언어가 다를 때에 자바에서 int랑 C++에﻿ int랑 이런 거는 다른 개념인가요?﻿
```

## ref
* https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html

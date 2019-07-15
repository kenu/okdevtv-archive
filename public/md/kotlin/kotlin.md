# Kotlin
* http://kotlinlang.org
* JetBrains에서 만든 JVM 기반의 언어

## Try kotlin
* https://try.kotlinlang.org

## 설치하기
* mac
  * `brew install kotlin`

## compile & run
* hello.kt
```
fun main(args: Array<String>) {
    println("Hello, World!")
}
```

* compile runnable
```
kotlinc hello.kt -include-runtime -d hello.jar
```

* run
```
java -jar hello.jar
```

* compile library
```
kotlinc hello.kt -d hello.jar
```

*

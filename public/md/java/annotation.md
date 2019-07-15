# Annotation
* a form of metadata, provide data about a program that is not part of the program itself
  * **Information for the compiler** — Annotations can be used by the compiler to detect errors or suppress warnings.
  * **Compile-time and deployment-time processing** — Software tools can process annotation information to generate code, XML files, and so forth.
  * **Runtime processing** — Some annotations are available to be examined at runtime.

## Examples
```
@Entity
```

```
@Override
void mySuperMethod() { ... }
```

```
@Author(
   name = "Benjamin Franklin",
   date = "3/27/2003"
)
class MyClass() { ... }
```

```
@SuppressWarnings(value = "unchecked")
void myMethod() { ... }
```

```
@SuppressWarnings("unchecked")
void myMethod() { ... }
```

```
@Author(name = "Jane Doe")
@EBook
class MyClass { ... }
```

* Predefined Java Annotations : Override, SuppressWarnings
  * https://docs.oracle.com/javase/tutorial/java/annotations/predefined.html
* Custom Annotation types : EBook, Author

* Java SE 8 Annotations

```
@Author(name = "Jane Doe")
@Author(name = "John Smith")
class MyClass { ... }
```
* Type Annotations
  * Class instance creation expression:
```
new @Interned MyObject();
```
  * Type cast:
```
myString = (@NonNull String) str;
```
  * implements clause:
```
class UnmodifiableList<T> implements
    @Readonly List<@Readonly T> { ... }
```
  * Thrown exception declaration:
```
void monitorTemperature() throws
    @Critical TemperatureException { ... }
```

## Custom annotation
* Annotation types are a form of _interface_

```java
@interface ClassPreamble {
   String author();
   String date();
   int currentRevision() default 1;
   String lastModified() default "N/A";
   String lastModifiedBy() default "N/A";
   // Note use of array
   String[] reviewers();
}
```

```java
@ClassPreamble (
   author = "John Doe",
   date = "3/17/2002",
   currentRevision = 6,
   lastModified = "4/12/2004",
   lastModifiedBy = "Jane Doe",
   // Note array notation
   reviewers = {"Alice", "Bob", "Cindy"}
)
public class Generation3List extends Generation2List {

// class code goes here

}
```

## ref
* http://docs.oracle.com/javase/1.5.0/docs/guide/language/annotations.html
* https://docs.oracle.com/javase/tutorial/java/annotations/basics.html
* https://www.mkyong.com/java/java-custom-annotations-example/

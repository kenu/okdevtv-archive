# Lambda expression
* Since Java SE 8
* clear and concise way to represent **one method interface** using an expression
* easier to iterate through, filter, and extract data from a Collection
* new concurrency features improve performance in multicore environments

## Format
```
Argument List   Arrow Token   Body
(int x, int y)      ->        x + y
```

## Example
```
public class RunnableTest {
  public static void main(String[] args) {

    // Anonymous Runnable
    Runnable r1 = new Runnable(){
      @Override
      public void run(){
        System.out.println("Hello world one!");
      }
    };

    // Lambda Runnable
    Runnable r2 = () -> System.out.println("Hello world two!");

    r1.run();
    r2.run();

   }
 }
```

## ref
* http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html
* Lambda calculus
  * https://en.wikipedia.org/wiki/Lambda_calculus

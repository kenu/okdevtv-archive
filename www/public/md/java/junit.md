# JUnit
* http://junit.org
* Test Framework
* Function Test
* input/output test set
* testName() prefix
* @Test annotation

## Required
* junit.jar
  * http://mvnrepository.com/artifact/junit/junit/4.12

## Getting started
* Calculator.java

```java
public class Calculator {
  public int evaluate(String expression) {
    int sum = 0;
    for (String summand: expression.split("\\+"))
      sum += Integer.valueOf(summand);
    return sum;
  }
}
```

* CalculatorTest.java

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {
  @Test
  public void evaluatesExpression() {
    Calculator calculator = new Calculator();
    int sum = calculator.evaluate("1+2+3");
    assertEquals(6, sum);
  }
}
```
* compile

```
javac -cp .:junit-4.XX.jar CalculatorTest.java
```

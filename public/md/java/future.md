# java Future interface
* [`java.util.concurrent.Future<V>`](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html)
* `V` - The result type returned by this Future's `get` method
* `Future` 비동기 연산의 결과를 나타냄

## Example

```java
import java.util.concurrent.*;

public class FutureIsDoneExample {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executorService = Executors.newSingleThreadExecutor();

        Future<String> future = executorService.submit(() -> {
            Thread.sleep(2000);
            return "Hello from Callable";
        });

        while(!future.isDone()) {
            System.out.println("Task is still not done...");
            Thread.sleep(200);
        }

        System.out.println("Task completed! Retrieving the result");
        String result = future.get();
        System.out.println(result);

        executorService.shutdown();
    }
}
```
* code from: https://www.callicoder.com/java-callable-and-future-tutorial/



# ReactiveX

* http://reactivex.io
* An API for asynchronous programming with observable streams
* ReactiveX is a combination of the best ideas from
the Observer pattern, the Iterator pattern, and functional programming

## 설치
```
npm i rxjs
```


```js
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));
```
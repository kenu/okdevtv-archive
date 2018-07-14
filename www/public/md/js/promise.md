# JavaScript Promise
* 비동기 처리를 위한 키워드
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
* Promise 객체는 비동기 계산을 위해 사용됩니다. 
* Promise는 아직은 아니지만 나중에 완료될 것으로 기대되는 연산을 표현합니다.
* 
```
new Promise( /* executor */ function(resolve, reject) { ... } );
```

* feature for asynchronous code
* `resolve`, `reject` callback

## Single return
```javascript
function testFunction() {
	return new Promise(function(resolve, reject) {
  	resolve("test1", "test2");
  });
}

async function run() {
	var response = await testFunction();
  console.log(response); // test1
}

run();
```

## Array destructuring
```javascript
function testFunction() {
    return new Promise(function(resolve, reject) {
  	       resolve([ "test1", "test2"] );
           });
}

async function run() {

  const [firstRes, secondRes] = await testFunction();
  console.log(firstRes, secondRes);

}

run();
```

## ref
* https://stackoverflow.com/questions/46090163/return-multiple-variables-on-async-await/46090195
* http://exploringjs.com/es6/ch_promises.html
* http://programmingsummaries.tistory.com/325


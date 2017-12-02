# JavaScript Promise
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

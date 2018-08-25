// Object()를 이용해서 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로프티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo); // object
console.log(foo); // { name: 'foo', age: 30, gender: 'male' }
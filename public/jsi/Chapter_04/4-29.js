//객체 리터럴 방식으로 foo 객체 생성
var foo = {
    name: 'foo',
    age: 35,
    gender: 'man'
};
console.dir(foo);

//생성자 함수
function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// Person 생성자 함수를 이용해 bar 객체, baz 객체 생성
var bar = new Person('bar', 33, 'woman');
console.dir(bar);

var baz = new Person('baz', 25, 'woman');
console.dir(baz);
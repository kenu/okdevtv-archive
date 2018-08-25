//생성자 함수
function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var qux = Person('qux', 20, 'man');
console.log(qux);  // undefined

console.log(window.name); // qux
console.log(window.age); // 20
console.log(window.gender); // man
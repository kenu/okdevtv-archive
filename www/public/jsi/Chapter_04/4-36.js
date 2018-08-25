function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100;
}

var foo = new Person('foo', 30, 'man');
console.log(foo);

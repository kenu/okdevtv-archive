// myObject 객체 생성
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(this.name);
    }
};

// ohterObject 객체 생성
var otherObject = {
    name: 'bar'
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

// sayName() 메서드 호출
myObject.sayName();
otherObject.sayName();
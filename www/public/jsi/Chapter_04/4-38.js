var myObject = {
    name: 'foo',
    sayName: function () {
        console.log('My Name is ' + this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickName();
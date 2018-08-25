Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
}

function Person(arg) {
    this.name = arg;
}

Person.method("setName", function(value) {
    this.name = value;
});

Person.method("getName", function() {
    return this.name;
});


var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());


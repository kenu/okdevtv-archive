function Person(arg) {
	this.name = arg;
}

Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.setName = function(value) {
	this.name = value;
}

var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());

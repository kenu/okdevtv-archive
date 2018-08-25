
function HelloFunc(func) {
	this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
	func ? func(this.greeting) : this.func(this.greeting);
}	

var userFunc = function(greeting) {
	console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

function saySomething(obj, methodName, name) {
	return (function(greeting) {
		return obj[methodName](greeting, name);
	});
}

function newObj(obj, name) {
	obj.func = saySomething(this, "who", (name || "everyone"));

	return obj;
}

newObj.prototype.who = function(greeting, name) {
	console.log(greeting + " "  +  (name || "everyone") );
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call();



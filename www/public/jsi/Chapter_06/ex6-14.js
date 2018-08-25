function subClass(obj) {
	var parent = this === global ? Function : this;
	var F = function() {};

	var child = function() {
		var _parent = child.parent;
		
		if (_parent && _parent !== Function) {
			_parent();
		}
		
		if (child.prototype._init) {
			child.prototype._init.apply(this, arguments);
		}
	};

	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
	child.parent = parent;
	child.subClass = arguments.callee;

	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			child.prototype[i] = obj[i];
		}
	}

	return child;
}

var person_obj = {
	_init : function() {
		console.log("person init");
	},
	getName : function() {
		return this._name;
	},
	setName : function(name) {
		this._name = name;
	}
};

var student_obj = {
	_init : function() {
		console.log("student init");
	},
	getName : function() {
		return "Student Name: " + this._name;
	}
};

var Person = subClass(person_obj);
var person = new Person();
person.setName("zzoon");
console.log(person.getName());

var Student = Person.subClass(student_obj);
var student = new Student();
student.setName("iamhjoo");
console.log(student.getName());
console.log(Person.toString());


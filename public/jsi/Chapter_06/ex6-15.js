var subClass = function() {
	var F = function() {};
	
	var subClass = function(obj) {
	
		//var parent = this === global ? Function.prototype : this.prototype;
		var parent =  this === global ? Function : this;

		var child = function() {
			//console.log("calling const");
			var _parent = child.parent_constructor;
			
			if (_parent && _parent !== Function) {
				_parent.apply(this, arguments);
			}
						
			/*
			if (parent.hasOwnProperty("_init")) {
				parent._init.apply(this, arguments);
			}
			*/
			if (child.prototype.hasOwnProperty("_init")) {
				child.prototype._init.apply(this, arguments);
			}
		};

		F.prototype = parent.prototype;
		child.prototype = new F();
		child.prototype.constructor = child;
		child.parent = parent.prototype;
		child.parent_constructor = parent;
		child.subClass = arguments.callee;

		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				child.prototype[i] = obj[i];
			}
		}

		return child;
	}
	
	return subClass;
}();

var person = function(arg) { 
	var name = undefined;
	
	return {
		_init : function(arg) {
			name = arg ? arg : "zzoon";
		},
		getName : function() {
			return name;
		},
		setName : function(arg) {
			name = arg;
		}
	};
}

Person = subClass(person());
var iamhjoo = new Person("iamhjoo");
console.log(iamhjoo.getName());

Student = Person.subClass();
var student = new Student("student");
console.log(student.getName());


var person = {
	name : "zzoon",
	getName : function() {
		return this.name;
	},
	setName : function(arg) {
		this.name = arg;
	}
};

function create_object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

var student = create_object(person);

student.setName("me");
console.log(student.getName());


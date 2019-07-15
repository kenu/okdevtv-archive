function Person(arg) {
	this.name = arg;

	this.getName = function() {
		return this.name;
	}

	this.setName = function(value) {
		this.name = value;
	}
}

var me = new Person("zzoon");
console.log(me.getName());

me.setName("iamhjoo");
console.log(me.getName());


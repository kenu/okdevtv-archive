var Person = function(arg) {
	var name = arg ? arg : "zzoon" ;

	this.getName = function() {
		return name;
	}
	this.setName = function(arg) {
		name = arg;
	}
}; 

var me = new Person();
console.log(me.getName());
me.setName("iamhjoo");
console.log(me.getName());
console.log(me.name); // undefined

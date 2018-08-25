var print_all = function(arg) {
	for (var i in this) console.log(i + " : " + this[i]);
	for (var i in arguments) console.log(i + " : " + arguments[i]);
}

var myobj = { name : "zzoon" };

var myfunc = print_all.bind(myobj);
myfunc(); // name : zzoon

var myfunc1 = print_all.bind(myobj, "iamhjoo", "others");
myfunc1("insidejs");


function Calculate(a, b, c) {
	return a*b+c;
}

function Curry(func) {
	var args = Array.prototype.slice.call(arguments, 1);

	return function() {
		return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	}
}

var new_func1 = Curry(Calculate, 1);
console.log(new_func1(2,3)); // 5
var new_func2 = Curry(Calculate, 1, 3);
console.log(new_func2(3)); // 6



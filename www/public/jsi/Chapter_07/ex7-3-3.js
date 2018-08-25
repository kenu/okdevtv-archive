var fact = function() {
	var cache = {'0' : 1};
	var func = function(n) {
		var result = 0;

		if (typeof(cache[n]) === 'number') {
			result = cache[n];
		} else {
			result = cache[n] = n * func(n-1);
		}

		return result;
	}

	return func;
}();

console.log(fact(10));
console.log(fact(20));

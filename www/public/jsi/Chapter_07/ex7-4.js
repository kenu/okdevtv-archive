var fibo = function() {
	var cache = {'0' : 0, '1' : 1};

	var func = function(n) {
		if (typeof(cache[n]) === 'number') {
			result = cache[n];
		} else {
			result = cache[n] = func(n-1) + func(n-2);
		}

		return result;
	}
	
	return func;
}();

console.log(fibo(10));


function multiply(arr) {
	var len = arr.length;
	var i = 0, result = 1;

	for (; i < len; i++) {
		result *= arr[i];
	}

	return result;
}

var arr = [ 1, 2, 3, 4 ];

console.log(multiply(arr)); // 24



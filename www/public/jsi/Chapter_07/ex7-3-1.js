function fact(num) {
	var val = 1;
	for (var i = 2; i <= num; i++) 
		val = val * i;
	return val;
}

console.log(fact(100));


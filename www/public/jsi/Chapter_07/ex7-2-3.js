function reduce(func, arr, memo) {
	var len = arr.length,
		i = 0,
		accum = memo;

	for (; i < len; i++) {
		accum = func(accum, arr[i]);
	}

	return accum;
}


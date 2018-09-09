function Calculate(key, input, func) {
    Calculate.data = Calculate.data || {};
    if (!Calculate.data[key]) {
        var result = func(input);
        Calculate.data[key] = result;
    }
    return Calculate.data[key];
}

var result = Calculate(1, 5, function(input) {
    return input * input;
});

console.log(result);

result = Calculate(2, 5, function(input) {
    return input * input / 4;
});

console.log(result);

console.log(Calculate(1));
console.log(Calculate(2));

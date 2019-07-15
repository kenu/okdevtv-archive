var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);  // true
console.log(objA == objB); // false
console.log(objB == objC); // true
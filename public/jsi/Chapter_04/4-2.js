// add() 함수 표현식
var add = function (x, y) {
    return x + y;
};

var plus = add;

console.log(add(3,4)); // 7
console.log(plus(5,6)); // 11

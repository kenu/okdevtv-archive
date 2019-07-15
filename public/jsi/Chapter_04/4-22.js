// add() 함수
function add(a, b) {
    // arguments 객체 출력
    console.dir(arguments);
    return a+b;
}

console.log(add(1)); // NaN
console.log(add(1,2)); // 3
console.log(add(1,2,3)); // 3
// 함수 선언 방식으로 add()함수 정의
function add(x, y) {
    return x+y;
}

// add() 함수 객체에 result, status 프로퍼티 추가
add.result = add(3, 2);
add.status = 'OK';

console.log(add.result); // 5
console.log(add.status); // 'OK'
add(2,3); // uncaught type error

// 함수 표현식 형태로 add() 함수 정의
var add = function (x, y) {
    return x + y;
};

add(3, 4);
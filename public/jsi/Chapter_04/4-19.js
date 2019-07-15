function parent() {
    var a = 100;

    // child() 내부 함수
    var child = function () {
        console.log(a);
    }

    // child() 함수 반환
    return child;
}

var inner = parent();
inner();

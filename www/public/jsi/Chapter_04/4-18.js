// parent() 함수 정의
function parent() {
    var a = 100;
    var b = 200;

    // child() 내부 함수 정의
    function child() {
        var b = 300;
        console.log(a);
        console.log(b);
    }
    child();
}
parent();
child();
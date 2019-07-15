var test = 'This is test';
console.log(window.test);

// sayFoo() 함수
var sayFoo = function () {
    console.log(this.test); // sayFoo() 함수 호출 시 this는 전역 객체에 바인딩된다.
};

sayFoo(); // this.test 출력
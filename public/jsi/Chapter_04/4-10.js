// 함수 표현식으로 foo() 함수 생성
var foo = function(func) {
    func(); // 인자로 받은 func() 함수 호출
};

// foo() 함수 실행
foo(function() {
    console.log('Function can be used as the argument.');
});


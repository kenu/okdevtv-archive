// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name : 'foo',
    major : 'computer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name); // foo
console.log(foo['name']); // foo
console.log(foo.nickname); // undefined

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major); //electronics engineering
console.log(foo['major']); //electronics engineering

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age); // 30

// 대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']); // foo bar
console.log(foo.full-name); // NaN
console.log(foo.full); // undefined
console.log(name); // undefined
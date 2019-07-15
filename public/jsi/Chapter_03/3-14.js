// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]); // undefined

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight'
emptyArr[7] = true;
console.log(emptyArr); // [100, undefined × 2, "eight", undefined × 3, true]
console.log(emptyArr.length); // 8
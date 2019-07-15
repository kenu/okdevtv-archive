var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr); // ["zero", "one", undefined × 1 , "three"]
console.log(arr.length); // 4

var arr = ['bar'];
var obj = { name : 'foo', length : 1};

arr.push('baz');
console.log(arr); // [‘bar’, ‘baz’]

Array.prototype.push.apply(obj, ['baz']);
console.log(obj); // { '1': 'baz', name: 'foo', length: 2 }
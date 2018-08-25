// self() 함수
var self = function () {
    console.log('a');
    return function () {
        console.log('b');
    }
}
self = self();  // a
self();  // b
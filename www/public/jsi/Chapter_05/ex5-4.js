var var1 = 1;
var var2 = 2;
function func() {
    var var1 = 10;
    var var2 = 20;
    console.log(var1); // 10
    console.log(var2); // 20
}
func();
console.log(var1);  // 1
console.log(var2);  // 2
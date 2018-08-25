  Array.prototype.map = function(callback) { 
	/* this 가 null 인지, 배열인지 체크 */
	/* callback이 함수인지 체크 */
  
	var obj = this;
	var value, mapped_value;
    A = new Array(obj.length);
 
	for ( var i = 0; i < obj.length; i++ ) {
		value = obj[i];
		mapped_value = callback.call(null, value); 
		A[i] = mapped_value;
	}
	 
    return A;
  };  
  
var arr = [1,2,3];
var new_arr = arr.map(function(value) {
	return value*value;
});

console.log(new_arr);

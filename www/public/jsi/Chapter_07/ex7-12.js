  Array.prototype.map = function(callback) { 
	/* this �� null ����, �迭���� üũ */
	/* callback�� �Լ����� üũ */
  
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

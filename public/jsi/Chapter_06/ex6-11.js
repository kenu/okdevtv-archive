 var ArrCreate = function(arg) { 
	var arr = [1,2,3];
	
	return {
		getArr : function() {
			return arr;
		}
	};
 }
 
 var obj = ArrCreate(); /* or var me = new Person(); */
 var arr = obj.getArr();
 arr.push(5);
 console.log(obj.getArr()); // [ 1,2,3,5 ]
 
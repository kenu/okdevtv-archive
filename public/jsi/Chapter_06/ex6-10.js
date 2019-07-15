 var Person = function(arg) { 
	var name = arg ? arg : "zzoon" ;
	
	return {
		getName : function() {
			return name;
		},
		setName : function(arg) {
			name = arg;
		}
	};
 }
 
 var me = Person(); /* or var me = new Person(); */
 console.log(me.getName());
 
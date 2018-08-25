function each( obj, fn, args ) {
	if ( obj.length == undefined )
		for ( var i in obj )
			fn.apply( obj[i], args || [i, obj[i]] );
	else
		for ( var i = 0; i < obj.length; i++ )
			fn.apply( obj[i], args || [i, obj[i]] );
	return obj;
};
  
each([1,2,3], function(idx, num) {
	console.log(idx + ": " + num);
});

var zzoon = {
	name : "zzoon",
	age : 30,
	sex : "Male"
};

each(zzoon, function(idx, value) {
	console.log(idx + ": " + value);
});
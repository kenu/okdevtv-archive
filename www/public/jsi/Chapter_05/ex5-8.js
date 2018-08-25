function outerFunc(arg1, arg2){
    var local = 8;
    function innerFunc(innerArg){
        console.log((arg1 + arg2)/(innerArg + local));
    }
	
    return innerFunc;
}
 
var exam1 = outerFunc(2, 4);
exam1(2);
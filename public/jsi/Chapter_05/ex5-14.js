function outerFunc(argNum) {
  var num = argNum;
  return function(x) {
      num += x;
      console.log('num: ' + num );
    }
}
 
 var exam = outerFunc(40);
 
 exam(5);
 exam(-10);
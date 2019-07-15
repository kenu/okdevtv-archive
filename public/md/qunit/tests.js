QUnit.test( "hello test", function( assert ) {
  var one = getOne();
  var oneStr = "1";
  assert.ok( one == oneStr, "Passed!" );
  assert.ok( one !== oneStr, "Type Check" );
});

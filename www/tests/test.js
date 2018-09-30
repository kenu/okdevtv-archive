var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      var arr = [1,2,3];
      assert.equal(arr.indexOf(4), -1);
    });
  });
});
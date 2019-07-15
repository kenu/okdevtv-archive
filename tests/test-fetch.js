const assert = require('assert');
const fetch = require('node-fetch');

describe('fetch', function() {
  describe('get method', function() {
    it('', function() {
      fetch('https://okdevtv.com/priority.html')
      .then((res) => res.text())
      .then((body) => {
        assert.equal(true, body.length > 100);
      })
      .catch((e) => {
        console.error(e);
        assert.equal('ENOTFOUND', e.code);
      });
    });
  });
});
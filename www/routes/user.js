var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res) {
  res.end('user signup page\n');
});

router.post('/signup', function(req, res) {
  res.end('user signup and send mail\n');
});

router.get('/setup', function(req, res) {
  res.end('user password setup page\n');
});

router.post('/setup', function(req, res) {
  res.end('user setup check\n');
});

router.get('/login', function(req, res) {
  res.end('user login page\n');
});

router.post('/login', function(req, res) {
  res.end('user login check\n');
});

module.exports = router;

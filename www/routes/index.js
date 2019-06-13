var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session.passport);
  res.render('index', { user: req.user });
});

module.exports = router;

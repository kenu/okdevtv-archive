var express = require('express');
var router = express.Router();
var tip = require('../lib/tip');

/* GET tip listing. */
router.get('/tips', function (req, res) {
    tip.list(res);
});

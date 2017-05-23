var express = require('express');
var router = express.Router();
var tip = require('../lib/tip');

/* GET tip listing. */
router.get('/tips', function (req, res) {
    tip.list(res);
});

/* POST save tip */
router.post('/tip', function (req, res) {
    tip.save(res, req.body);
    res.json({
        "data": req.body
    });
});

module.exports = router;

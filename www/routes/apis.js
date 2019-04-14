var express = require('express');
var router = express.Router();
var tip = require('../lib/tip');

/* GET tip listing. */
router.get('/tips', function (req, res) {
    tip.list(res);
});

/* POST save tip */
router.post('/tip', function (req, res) {
    let data = req.body;
    data.clientip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress;
    tip.save(res, data);
    res.json({
        "status": 200
    });
});

module.exports = router;

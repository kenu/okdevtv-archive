'use strict';
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get('/register', function (req, res) {
    console.log(req.method);
    var msg = {
        name: req.param("name"),
        email: req.param("email"),
        message: req.param("message"),
        category: req.param("category")
    };

    save(msg);

    res.set('Content-Type', 'application/json');
    var callback = req.param("callback");
    if (callback) {
        res.send(callback + '({"success": true})');
    } else {
        res.send('{"success": true}');
    }
});

app.get('/list', function (req, res) {
    console.log(req.method);
    var msg = {
        name: req.param("name"),
        email: req.param("email"),
        message: req.param("message")
    };

    save(msg);

    res.set('Content-Type', 'application/json');
    var callback = req.raram("callback");
    if (callback) {
        res.send(callback + '({"success": true})');
    } else {
        res.send('{"success": true}');
    }
});

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});

function save(msg) {
    MongoClient.connect("mongodb://localhost/test",
        function (err, db) {
            if (!err) {
                console.log('err:' + err + '\ndb:' + db.collection("test"));
            }
            try {
                db.collection("test").insert(msg, function (e, d) {
                    console.log(d);
                    db.close();
                });
            } catch (e) {
                console.log(e);
            }
        });
}
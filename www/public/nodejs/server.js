var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get('/register', function (req, res) {
    res.set('Content-Type', 'application/json');
    if (!req.param('message')) {
        res.send('{"success" : false}');
        return;
    }
    var msg = {
        category: req.param('category'),
        name: req.param('name'),
        email: req.param('email'),
        message: req.param('message')
    };

    save(msg);

    var callback = req.param("callback");
    if (callback) {
        res.send(callback + '({"success": true})');
    } else {
        res.send('{"success": true}');
    }
});

app.get('/list', function (req, res) {
    list(req, res);
});

var server = app.listen(3000, function () {
    return ('Listening on port ' + server.address().port);
});

function save(msg) {
    MongoClient.connect("mongodb://localhost/test",
        function (err, db) {
            if (err) {
                throw err;
            }
            try {
                db.collection("test").insert(msg, function (e, d) {
                    db.close();
                    return (d);
                });
            } catch (e) {
                throw e;
            }
        });
}

function list(req, res) {
    var listData = [];
    MongoClient.connect("mongodb://localhost/test",
        function(err, db) {
            if (err) {
                throw err;
            }
            db.collection("test").find().sort({_id: -1}).toArray(function (err, items) {
            var callback = req.param("callback");
            res.set('Content-Type', 'application/json');
            for (var i in items) {
                if (items.hasOwnProperty(i)) {
                    listData.push(items[i]);
                }
            }
            if (callback) {
                res.send(callback + '({"success": true, "list": ' + JSON.stringify(listData) + '})');
            } else {
                res.send('{"success": true, "list": ' + JSON.stringify(listData) + '}');
            }
            db.close();
        });
        }
    );
}

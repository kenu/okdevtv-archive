var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get('/register', function (req, res) {
    console.log(req.method);
    var msg = {
        category: req.param("category"),
        name: req.param("name"),
        email: req.param("email"),
        message: req.param("message")
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
    list(req, res);
});

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});

function save(msg) {
    MongoClient.connect("mongodb://localhost/test",
        function (err, db) {
            if (err) {
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

function list(req, res) {
    var listData = [];
    MongoClient.connect("mongodb://localhost/test",
        function(err, db) {
            if (err) {
                console.log('err:' + err );
                return;
            }
            db.collection("test").find().sort({_id: -1}).toArray(function (err, items) {
            var callback = req.param("callback");
            res.set('Content-Type', 'application/json');
            for (var i in items) {
                listData.push(items[i]);
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
var fs = require('fs');
var http = require("http");

var data = fs.readFileSync('./data.csv', 'utf8');
// wait for the result, then use it
var dl = data.split('\n');
var list = [];
dl.forEach(function (line, i) {

    var options = {
        host: 'localhost',
        port: 9200,
        path: '/cs/record',
        method: 'POST'
    };

    sleep(16, function () {
        if (i > 1) {
            var obj = getJson(line);
            list.push(obj);
            var req = http.request(options, function (res) {
                res.on('data', function () {
                    // This is intentional
                });
            });
            req.write(JSON.stringify(obj));
            req.end();
        }
    });
});

function getJson(line) {
    var scheme = [
  'service_type',
  'pcode',
  'pname',
  'afcode',
  'afname',
  'pcategory',
  'date',
  'srtype',
  'cat1',
  'cat2',
  'cat3',
  'cat3code',
  'md_id',
  'act_cnt',
  'cs_content'];

    var l = line.replace(/\r/g, "");
    var arr = l.split(',');
    var t = {};
    for (var idx in arr) {
        t[scheme[idx]] = arr[idx];
    }
    return t;
}

function sleep(time, callback) {
    var stop = new Date().getTime();
    while (new Date().getTime() < stop + time) {
        // This is intentional
    }
    callback();
}

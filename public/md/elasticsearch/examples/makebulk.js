var fs = require('graceful-fs');
var data = fs.readFileSync('./d.txt', 'utf8');
var dl = data.split('\n');
var i = 0;
for (var idx in dl) {
    if (dl.hasOwnProperty(idx)) {
        var obj = getJson(dl[idx]);
        var row = '{ "index" : { "_index": "cs", "_type": "record", "_id": ' + (i++) + '} }\n' + JSON.stringify(obj) + '\n';
        if (!obj.service_type || i == 1) {
            continue;
        }
        fs.appendFile('myfile.txt', row, (err) => {
            if (err && err.code === "EEXIST") {
                console.error('myfile already exists');
                return;
            }
            else {
                throw err;
            }
        });
    }
}

function getJson(line) {
    var scheme = [
  'service_type'
  , 'pcode'
  , 'pname'
  , 'afcode'
  , 'afname'
  , 'pcategory'
  , 'date'
  , 'srtype'
  , 'cat1'
  , 'cat2'
  , 'cat3code'
  , 'cat3'
  , 'md_id'
  , 'act_cnt'
  , 'cs_content'];
    var l = line.replace(/\r/g, "");
    var arr = l.split('\t');
    var t = {};
    for (idx in arr) {
        t[scheme[idx]] = arr[idx];
    }
    var content = t.cs_content;
    if (t.cs_content) {
        var carray = content.split('>');
        t.cat4 = carray[0].split('<')[1];
        t.cat5 = (carray[1] && carray[1].indexOf('<') > -1) ? carray[1].split('<')[1] : carray[1];
    }
    var d = t.date;
    var d2 = (t.date) ? d.substring(0, 4) + '-' + d.substring(4, 6) + '-' + d.substring(6, 8) : '2017-01-01';
    t.timestamp = new Date(d2);
    return t;
}

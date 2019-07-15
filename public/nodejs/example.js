var http = require('http');
var fs = require('fs');
var url = require('url');

function callback(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var path = url.parse(req.url).pathname;
    if (path === '/') {
        path = '/index.html';
    }

    fs.readFile(__dirname + path,
                function (err, content) {
        res.end(content);
    })
}

http.createServer(callback).listen(1337, '127.0.0.1');

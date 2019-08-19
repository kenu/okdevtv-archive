var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');
router.all('*', function (req, res) {
    var path = req.baseUrl.split('/');
    if (path.length < 4) {
        path.push(path[2]);
    }
    var mdPath = path.slice(2).join('/');
    var filePath = './public/md/' + mdPath + '.md';
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                throw err;
            }
            var html = setBody(marked(data.toString()), path);
            res.send(html);
        });
    } else {
        res.status(404) // HTTP status 404: NotFound
            .send('Not found');
    }
});

function setBody(data, path) {
    var folder = '/md/' + path[2] + '/';
    var html = data.replace(/img src="images/g, 'img src="' + folder + 'images');
    var htmlTag = `<!DOCTYPE html>
<html lang="ko"><head><title>${ path[3] }</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta property="og:title" content="${ path[3] }" />
<meta property="og:url" content="https://okdevtv.com${ path.join('/') }" />
<link rel="stylesheet" href="/css/style-md.css">
</head><body><!-- Header --><div id="wrap"><header id="header"><!-- Logo --><h1 id="logo_heading"><a href="/">
<img src="/images/logo.png" alt="okdevtv logo" id="logo">OKdevTV</a></h1>
</header>${ html }</div><script>
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r;
i[r] = i[r] || function () {
(i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
a = s.createElement(o), m = s.getElementsByTagName(o)[0];
a.async = 1; a.src = g;
m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-49100336-1', 'auto');
ga('send', 'pageview');</script>
<script>(function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
})(window, document, '_gscq','script','//widgets.getsitecontrol.com/57011/script.js');
</script>
<div id="whatelse"><a href="/md/list.html">What Else?</a></div>
</body></html>`;
    return htmlTag;
}
module.exports = router;

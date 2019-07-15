# express-session.md
* https://github.com/expressjs/session#readme

## install

```
npm i express-session --save
```

## example setting & use

```js
var session = require('express-session')

var app = express();
var sess = {
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
 
app.use(session(sess));

// Use the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
 
// Access the session as req.session
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})
```
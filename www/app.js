const express = require('express');
const session = require('express-session')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const frameguard = require('frameguard');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./configuration/config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon/apple-icon-180x180.png')));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(frameguard({ action: 'sameorigin' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the FacebookStrategy within Passport.

passport.use(new FacebookStrategy({
  clientID: config.facebook_api_key,
  clientSecret: config.facebook_api_secret,
  callbackURL: config.callback_url
},
  function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      //Check whether the User exists or not using profile.id
      if (config.use_database) {
        // if sets to true
        pool.query("SELECT * from user_info where user_id=" + profile.id, (err, rows) => {
          if (err) throw err;
          if (rows && rows.length === 0) {
            console.log("There is no such user, adding now");
            pool.query("INSERT into user_info(user_id,user_name) VALUES('" + profile.id + "','" + profile.username + "')");
          } else {
            console.log("User already exists in database");
          }
        });
      }
      return done(null, profile);
    });
  }
));

var sess = {
  secret: 'okdevtv cat',
  resave: true,
  saveUninitialized: true,
  cookie: {}
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess));

app.use('/', require('./routes/index'));
app.use('/apis', require('./routes/apis'));
app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
app.use('/mib*', require('./routes/mib'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

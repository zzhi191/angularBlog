/*!
 * nodeclub - app.js
 */

/**
 * Module dependencies.
 */

var config = require('./config');

var path = require('path');

var express = require('express');
var session = require('express-session');

var bodyParser = require('body-parser');

// 静态文件目录
var staticDir = path.join(__dirname, 'client');

var app = express();

// configuration in all env
app.set('views', staticDir);
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(staticDir));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(require('method-override')());
app.use(session({
  secret: config.session_secret,
  resave: true,
  saveUninitialized: true,
}));


app.use(function (req, res, next) {
  res.locals.csrf = req.csrfToken ? req.csrfToken() : '';
  next();
});


app.listen(config.port, function () {

  console.log("The web service has been started....");
  console.log("You can debug your app with http://" + config.hostname + ':' + config.port);
});


module.exports = app;

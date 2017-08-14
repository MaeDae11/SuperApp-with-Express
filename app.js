//general express
var express = require('express');
// rest is helper stuffs:
// helps express figure out where files are
var path = require('path');
//dont get error for favicon this way
var favicon = require('serve-favicon');
// logs debugger information
var logger = require('morgan');
// accompanied with express. parser. see if have cookies
var cookieParser = require('cookie-parser');
//necessary for if express server needs to parse a POST request
// usually for forms
var bodyParser = require('body-parser');



var index = require('./routes/index');
var users = require('./routes/users');


// creates express app itself
var app = express();



// method call on this app
//sets up template of html where can say "use that layout"
// view engine setup
//concatenates current path name and tacks on 'views'
//in our case its handlebars
// set view to hbs (handlebars)
// express needs to know how to talk to view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



//all middleware (can tell by seeing .use)
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// only use logger in dev mode
app.use(logger('dev'));
//body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//cookie parser setup
// serve anything up in public folder
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// more middleware
// after setup, now have to show how to route files
app.use('/', index);
app.use('/users', users);



// two examples of middleware
// stamps 404 handler error to use. very basic form.
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// another error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  // renders a particular error template
  res.render('error');
});

module.exports = app;

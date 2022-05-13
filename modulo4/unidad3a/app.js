var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // index
var usersRouter = require('./routes/users'); //users
var ejemplo1Router = require('./routes/ejemplo1');
var ejemplo2Router = require('./routes/ejemplo2');
var ejemplo3Router = require('./routes/ejemplo3');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ejemplo1', ejemplo1Router);
app.use('/ejemplo2', ejemplo2Router);
app.use('/ejemplo3', ejemplo3Router);

app.get('/ejemplo4' , function(req,res){
  res.send('Hola soy el cuarto ejemplo y en este caso estoy utilizando el comando app.get para escribir el ejemplo 4')
});

// app.get('/ejemplo2', function(req,res){
//   res.send('Hola soy el segundo ejemplo')
// });

// app.get('/ejemplo3', function(req,res){
//   res.send('Hola soy el tercer ejemplo')
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

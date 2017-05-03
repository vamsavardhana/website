var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var http=require('http');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/views')));
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public','images', 'favicon.ico')))
app.use('/bower_components',express.static(__dirname+'/bower_components'));
app.use('/bower_components/bootstrap/dist/css',express.static(__dirname+'/bower_components/bootstrap/dist/css'));
app.use('index1.html',express.static(__dirname+'/index1.html'));
app.use('carousel.css',express.static(__dirname+'/carousel.css'));

app.use('/node_modules',express.static(__dirname+'/node_modules'));
app.use('/public',express.static(__dirname+'/public'));
app.use('/public/pdfs',express.static(__dirname+'/public/pdfs'));
http.createServer(app).listen(process.env.PORT||4000,function(req,res){
  console.log('server running at port'+process.env.PORT);
})
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index1.html');
})
app.get('/allavailable',function(req,res){
    res.sendFile(__dirname+'/public/pdfs/AllAvailable.pdf');
})
app.get('/chatbot',function(req,res){
  res.sendFile(__dirname+'/public/pdfs/ChatBot.pdf');
})
app.get('/resume',function(req,res){
    res.sendFile(__dirname+'/public/pdfs/resume.pdf');
})


//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname,'public','views','error.html'));
});

module.exports = app;

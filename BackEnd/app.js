var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var foodRouter = require('./routes/food');
var paymentRouter = require('./routes/payment');
var indexRouter = require('./routes/index');
var config = require('./config');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// nfc
// var SerialPort = require("serialport");
// var temp;
// var serialPort = new SerialPort("COM3", {
//     baudRate:9600

// }, false);


// serialPort.open(function (){
//     console.log('connected');
//         serialPort.on('data', function(data){
//         console.log('data received:' + data);
//         temp=data;
//         });
// });
// console.log(temp,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/foodList', foodRouter);
app.use('/api/payment', paymentRouter);


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


//mongoDB 연결
mongoose.Promise = global.Promise
mongoose.connect(config.mongodbUri,{useNewUrlParser:true, useCreateIndex: true})
.then(()=>console.log('connected to mongodb server'))
.catch(e=> console.error(e))


module.exports = app;

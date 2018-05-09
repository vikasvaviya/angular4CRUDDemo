var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./server.js');
mongoose.connect('mongodb://localhost:27017/CRUDDEMO');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,image/gif' );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/router',function (req,res,next) {
  next();
});

app.use('/api',router);

app.listen(3000);
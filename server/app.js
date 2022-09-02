var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const listRoutes = require('express-list-endpoints');
const cors = require('cors')
const configHelper = require('./src/shared/helpers/config.helper');
const db = require('./src/knex'); //db
db.checkDbConnection();//check db

var app = express();
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//import routers
app.use('/'+configHelper.apiPath+'/v'+configHelper.apiVersion,require('./router'));

//display all routes
app.get('/'+configHelper.apiPath,function(req,res){
  res.send(listRoutes(app));
});

module.exports = app;

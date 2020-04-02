const express = require('express');
const engines = require('consolidate');
const app = express();

//npm i handlebars consolidate --save
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

var customerController = require("./customerController.js");
var indexController = require("./index.js");
var uploadFileController= require('./uploadFileController.js')

app.use('/customer', customerController);
app.use('/index',indexController);
app.use('/upload',uploadFileController);

var server=app.listen(3000,function() {});


var express = require('express');
var app = express();

var db = require('./db');
var controller = require('./controller');

app.use('/', controller);

module.exports = app;

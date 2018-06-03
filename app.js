var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var helmet = require('helmet');

require('./db');
var controller = require('./controller');

var app = express();

app.use(bodyParser.json({ extended: true }));
app.use(morgan('dev')); // TODO: silence when not in dev
app.use(helmet());

app.use('/', controller);

module.exports = app;

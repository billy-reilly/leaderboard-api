var mongoose = require('mongoose');

var dbCreds = require('./db-creds');

var mongoDB = 'mongodb://' + dbCreds.username + ':' + dbCreds.password + '@' + dbCreds.address + '/cw-leaderboard';

mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('open');
});

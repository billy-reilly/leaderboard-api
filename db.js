var mongoose = require('mongoose');

var dbCreds = require('./db-creds');

var mongoDB = 'mongodb://' + dbCreds.username + ':' + dbCreds.password + '@' + dbCreds.address + '/cw-leaderboard';

mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

mongoose.set('debug', true); // TODO: silence when not in dev

var db = mongoose.connection;
db.on('connected', function () {
  console.log('Connected to MongoDB');
});
db.on('error', function(err) {
  console.error('MongoDB connection error:', error);
});
db.on('disconnected', function() {
  console.log('Disconnected from MongoDB');
});

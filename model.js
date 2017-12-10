var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: String,
    score: Number
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;

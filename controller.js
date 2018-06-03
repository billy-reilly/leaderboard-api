var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var morgan = require('morgan');

router.use(bodyParser.json({ extended: true }));
router.use(morgan('dev')); // TODO: silence when not in dev
var Player = require('./model');

router.post('/', function (req, res) {
    if (!req.body.name) {
        return res.status(400).send("Bad request. You must provide a name for the new player");
    } else {
        Player.create({
            name: req.body.name,
            score: req.body.score || 0
        },
        function (err, user) {
            if (err) {
                return res.status(500).send("Internal server error. Failed to add player to the database");
            }
            return res.status(200).send(user);
        });
    }
});

router.get('/', function (req, res) {
    Player.find({}, function (err, players) {
        if (err) {
            return res.status(500).send("Internal server error. Failed to fetch players from the database");
        }
        return res.status(200).send(players);
    });
});

router.delete('/', function (req, res) {
    Player.findByIdAndRemove(req.body.id, function (err, player) {
        if (err) {
            return res.status(500).send("Internal server error. Failed to delete player from the database");
        }
        return res.status(200).send(player.name +" has successfully been deleted.");
    });
});

router.put('/', function (req, res){
    if (!req.body.id) {
        return res.status(400).send("Bad request. You must provide an ")
    }
    Player.findByIdAndUpdate(req.body.id, req.body, { new: true }, function (err, player) {
        if (err) {
            return res.status(500).send("Internal server error. Failed to update player information in database");
        }
        return res.status(200).send(player);
    });
});

module.exports = router;
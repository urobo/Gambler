var mongoose = require('mongoose');
var Schemas = require('./Schemas');

var Game =  mongoose.model('Game',Schemas.gameSchema);
exports.Game = Game;
var mongoose = require('mongoose');
var Schemas = require('./Schemas');

var game =  mongoose.model('Game',Schemas.gameSchema);
exports.game = game;
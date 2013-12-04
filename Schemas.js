var mongoose = require('mongoose');

var Schema = mongoose.Schema;
 
var gameSchema =  new Schema({
	win :Boolean,
	bet: Number,
	capital: Number,
	rounds: Number,
	bets: [Number],
	results:[Number]
});

exports.gameSchema = gameSchema;
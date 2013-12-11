var game = require('./Casino');
var models = require('./Models');
var mongoose = require('mongoose');
var roulette = require('./Roulette');


var maxRuns = 1000;

game.environment.setGame(roulette.game);
game.environment.setMaxSimulations(maxRuns);
game.environment.startSimulation();
game.environment.report();

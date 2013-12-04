var game = require('./Casino');
var models = require('./Models');
var mongoose = require('mongoose');

var maxRuns = 1000;

var environment = {
	playedGames: [],
	maxSimulations: 0,

	start:function(){
		for (int i = 0 ; i < this.maxSimulations ; i++){
			
		}
	},

	report:function(){},

	setMxaSimulations:function(maxSimulations){
		this.maxSimulations = maxSimulations;
	}
	
};


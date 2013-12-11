var jquery = require('jquery');
var capital = 3000;
var bet = 10;


var statistics = {
		totalGamesPlayed : 0,
		roundsSummation : 0,
		averageRounds : 0,
		maxRounds : 0,
		minRounds : 36,
		capitalSummation : 0,
		averageCapital : 0,
		maxCapital : 0,
		minCapital : -1,
		wonGames : 0,
		lostGames : 0
};

var assessPartials = function(element,index,array){
	var rounds = element['rounds'];
	statistics.roundsSummation += rounds;
		
	if (rounds > statistics.maxRounds){
		statistics.maxRounds = rounds;
	}
	
	if (rounds < statistics.minRounds){
		statistics.minRounds = rounds;
	}

	var capital = element['capital'];
	statistics.capitalSummation += capital;

	if(capital > statistics.maxCapital){
		statistics.maxCapital = capital;
	}

	if(capital < statistics.minCapital || statistics.minCapital === -1){
		statistics.minCapital = capital;
	}

	var outcome = element['win'];
	if(outcome === true){
		statistics.wonGames++;
	}else{
		statistics.lostGames++;
	}

};

var assessFinals = function(){
	statistics.totalGamesPlayed = environment.playedGames.length;
	statistics.averageRounds = statistics.roundsSummation / statistics.totalGamesPlayed;
	statistics.averageCapital = statistics.capitalSummation /statistics.totalGamesPlayed;
};


var environment = {
	playedGames: [],
	maxSimulations: 0,
	game:null,

	startSimulation:function(){

		for (var i = 0 ; i < this.maxSimulations ; i++){
			this.game.setup();
			this.playedGames[this.playedGames.length] = jquery.extend(true,{},this.game.play(capital,bet));			
		}
	},

	
	report:function(){
		this.playedGames.forEach(assessPartials);
		assessFinals();
		console.log(statistics);

	},

	partialReport: function(index){
		if (!isNaN(index)){
			console.log(this.playedGames[index]);
		}
	},

	setGame:function(game){
		this.game = game;
	},
	setMaxSimulations:function(maxSimulations){
		this.maxSimulations = maxSimulations;
	}
	
};
//console.log(game.play(3000,5));

exports.environment = environment;
exports.statistics = statistics;
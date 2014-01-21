
var rouletteGenerator = function(){
 var roulette = parseInt(Math.random()*10000,10)%37;
 return roulette;
};

var rouletteGeneratorTest = function(trials){
	var result=[];
	for(var i = 0; i < trials; i++){
		var tmp = rouletteGenerator();
		if (typeof result[tmp] === 'undefined') result[tmp] = 0;
		result[tmp]++;
	}

	for(var j = 0; j < result.length; j++){
		if (typeof result[j]==='undefined') result[j] = 0;
		console.log( result[j] + " occurrences of " +  j );
	}
};

var roulette = {

	win :false,
	bet: 0,
	capital: 0,
	rounds: 0,
	bets: [],
	results:[],

	setup : function(){
		this.win = false;
		this.bet = 0;
		this.capital = 0;
		this.rounds = 0;
		this.bets = [];
		this.results = [];
	},

	placebets : function(){
		this.capital -= this.results.length * this.bet;
		if (this.capital<0) {
			return false;
		}
		this.bets = this.results;
		return true;
	},

    play : function(capital, bet){
    	this.capital = capital;
    	this.bet = bet;
		this.results[this.results.length] = rouletteGenerator();
		while(1){
		if (!this.placebets()){
			this.win = false;
			return this;
		}
		var spin = rouletteGenerator();

		this.rounds++;
		if (this.bets.indexOf(spin) > -1){
			this.capital += this.bet * 35;
			this.win = true;
			this.results[this.results.length] = spin;

			return this;
		}
			this.results[this.results.length] = spin;
		}
	}
};

exports.game = roulette;
exports.generator = rouletteGenerator;
exports.generatorTest = rouletteGeneratorTest;
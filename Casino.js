var roulette = require('./Roulette');

var game = {

	win :false,
	bet: 0,
	capital: 0,
	rounds: 0,
	bets: [],
	results:[],

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
		this.results[this.results.length] = roulette.generator();
		while(1){
		if (!this.placebets()){
			this.win = false;
			return this;
		}
		var spin = roulette.generator();

		this.rounds++;
		if (this.bets.indexOf(spin) > -1){
			this.capital += this.bet * 35;
			this.win = true;
			this.results[this.results.length] = spin;

			return this;
		}
			this.results[this.results.length] = spin;
		}
	},
};

//console.log(game.play(3000,5));

exports.game = game;
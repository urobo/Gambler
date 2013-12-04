
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

exports.generator = rouletteGenerator;
exports.generatorTest = rouletteGeneratorTest;
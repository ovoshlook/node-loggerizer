const colors = require('colors/safe');

module.exports = class Loggerizer {

  	constructor(level) {
		
		this.requiredLevel = (level) ? level : 2;
		
		this.levels = {
			"ERROR": 	{
				id: 0,
				color: "red"
			},
			"WARNING": 	{
				id: 1,
				color: "yellow"
			},
			"INFO": 	{
				id: 2,
				color: "cyan"
			},
			"NOTICE": 	{
				id: 3,
				color: "green"
			},	
			"DEBUG": 	{
				id: 4,
				color: "grey"
			}
		}

		this.levelsLookup = [
			"ERROR",
			"WARNING",
			"INFO",
			"NOTICE",
			"DEBUG"
		]

  	}

  	setLevel(level) {
  		this.requiredLevels = level;
  	}

  	format(levelIndex,levelColor) {
  		
  		const d = new Date();
  		let levelOutput = this.levelsLookup[levelIndex];
  		let prefix = "["+d.toLocaleDateString()+' '+d.toLocaleTimeString()+"]: "+colors[levelColor](this.levelsLookup[levelIndex])+":";
  		return prefix;
  	
  	}

  	print(level,body) {

  		let levelIndex = 2;
  		let levelColor = "yellow";

  		if (!this.levels[level]) {
  			this.print("WARNING","Log level '"+level+"' not exists. Using '"+ colors[levelColor](this.levelsLookup[levelIndex])+"' instead");
  		}else {
  			levelIndex = this.levels[level].id;
  			levelColor = this.levels[level].color;
  		}
  		
  		if (this.requiredLevels >= levelIndex){ 
  			
  			if (typeof(body) === 'object') {
  				console.log(this.format(levelIndex,levelColor)+" \n %O",body);
  			}
  			else {
				console.log(this.format(levelIndex,levelColor)+" "+body);
			}
		}
  	}
}
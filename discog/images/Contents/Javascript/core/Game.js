function Game () {
	this.skips = 0;
	this.teamA = true;
	this.teamB = false;
	this.adultGame = false;
	this.familyGame = false;
	this.currentRoundTeamA = 0;
	this.currentRoundTeamB = 0;
}

Game.prototype = {
	constructor: Game,
	switchTeam:function ()  {
		if (this.teamA){
			this.teamA = false;
			this.teamB = true;
		}
		else{
			this.teamB = false;
			this.teamA = true;
		}
	},
	setGameType:function (type)  {
		if (type === "adult") {
			this.adultGame = true;
			this.familyGame = false;
		}
		else{
			this.familyGame = true;
			this.adultGame = false;
		}
		console.log(this.adultGame);
		console.log(this.familyGame);

	},
	saveSkip:function () {
		this.skips++;
	},
	resetSkips:function () {
		this.skips = 0;
	},
	completeRoundTeamA:function () {
		this.currentRoundTeamA++;
	},
	completeRoundTeamB:function () {
		this.currentRoundTeamB++;
	},
	isGameFinished:function () {
		if ((this.currentRoundTeamA===3) && (this.currentRoundTeamB===3)) {
			return true;
		}
		else{
			return false;
		}
	},
	resetGame:function () {
		this.skips = 0;
		this.teamA = true;
		this.teamB = false;
		this.currentRoundTeamA = 0;
		this.currentRoundTeamB = 0;

	}
};
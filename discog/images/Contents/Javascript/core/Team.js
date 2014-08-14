function Team (teamName) {
    this.name = teamName;
    this.gameScores = [];
    this.correctScore = 0;
    this.incorrectScore = 0;
    this.currentRoundScore = 0;
    this.gameScore = 0;
}

Team.prototype = {
    constructor: Team,
    saveCorrectScore:function ()  {
        this.correctScore++;
        console.log(this.correctScore);
    },
    saveIncorrectScore:function ()  {
        this.incorrectScore++;
        //this.getCurrentRoundScore();
        console.log(this.incorrectScore);
    },
    getCurrentRoundScore:function ()  {
        this.currentRoundScore = (this.correctScore - this.incorrectScore);
        console.log(this.currentRoundScore);
        return this.currentRoundScore;
        
    },
    saveRoundScore:function ()  {
        this.gameScores.push(this.currentRoundScore);
        console.log("saving", this.gameScores);
        this.clearCurrentRoundScores();
    },
    getGameScore:function ()  {
        this.gameScore = 0;

        for (var i = 0; i < this.gameScores.length; i++) 
        {
            console.log("scores", this.gameScore);
            this.gameScore += this.gameScores[i];
        }
        console.log("scores", this.gameScore);
        return this.gameScore;
    },
    clearCurrentRoundScores:function () {
        this.correctScore = 0;
        this.incorrectScore = 0;
        this.currentRoundScore = 0;
    },
    clearGameScores:function () {
        this.gameScores = [];
        this.correctScore = 0;
        this.incorrectScore = 0;
        this.currentRoundScore = 0;
        this.gameScore = 0;
    }
};


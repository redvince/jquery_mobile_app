function GameTimer () {
	this.startTimer = false;
	this.mins;// = 2;
	this.minutes;// = 2;
	this.seconds;// = 0;
	this.startClock = null;
	//this.ref = this;

// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
	this.secs;// = 120;
}

GameTimer.prototype = {
	constructor: GameTimer,
	decrement:function ()  {
		console.log("here");

		if (this.secs === 120) {
			this.secs--;
			return;
		}
		
		else if (!this.startTimer) {
			clearInterval(this.startClock);
			MAF.messages.store('numbers', [2,0]);
			return;
		}

		else if (this.secs === 0) {
			this.seconds =  '00';
			MAF.messages.store('numbers', [this.minutes,this.seconds]);
			clearInterval(this.startClock);
			setTimeout(function() {
				MAF.messages.store('numbers', [2,0]);
				MAF.application.loadView("view-SummaryView");
			}, 1000);
			//setTimeout(MAF.messages.store('numbers', [2,0]), 2000);
			//setTimeout(MAF.application.loadView("view-HowView"), 2000);
			//MAF.messages.store('numbers', [2,0]);
			//MAF.application.loadView("view-HowView");
			return;
		}
		else
		{
		if (this.secs<10) {
				this.seconds = '0' + this.secs;
				console.log(this.seconds);
	}
			// if less than a minute remaining
			else if (this.secs < 59) {
				this.seconds = this.secs;
				console.log(this.seconds);
			} 
			else {
				this.minutes = this.getMinutes();
				console.log(this.minutes);
				this.seconds = this.getSeconds();
				console.log(this.seconds);
			}

			MAF.messages.store('numbers', [this.minutes,this.seconds]);
			this.secs--;
		}
	},
	getMinutes:function () {
		this.mins = Math.floor(this.secs / 60);
		return this.mins;

	},
	getSeconds:function () {
		return this.secs-Math.round(this.mins *60);

	},
	stopCountdown:function () {
		clearInterval(this.startClock);
		MAF.messages.store('numbers', [2,0]);

	},
	countdown:function (setMinutes){
		console.log(setMinutes);
		this.startTimer = true;
		this.secs = (setMinutes * 60) -1;
		//this.secs = 119;
		var self = this;
		this.startClock = setInterval(function(){self.decrement();},1000);
	}
};


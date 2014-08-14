var GameView = new MAF.Class({
	ClassName: 'GameView',

	Extends: MAF.system.SidebarView,

	initialize: function () {
	this.parent();
	this.registerMessageCenterListenerCallback(this.dataHasChanged);
	},

	dataHasChanged: function (event) {
		if(event.payload.key === 'numbers')
			//this.elements.ourGrid.changeDataset(event.payload.value, true);
		//console.log(event.payload.value);
			this.elements.ourText.setText(event.payload.value[0], true);
			this.elements.ourText2.setText(event.payload.value[1], true);
	},

	createView: function () {
		gameTimer = new GameTimer();
		var view = this;
		this.elements.logoButton = new MAF.element.Button({
			//label: 'Menu Graphics',
			//srcs: '/Images/Game/Background.png',
			styles:{
				width: 600,
				height: 980,
				backgroundImage: 'Images/Game/Background.png',
				hAlign: "center"
			}
		}).appendTo(this);

		this.elements.correctButton = new MAF.element.Button({
			
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Game/Correct_Button.png',
				hAlign: "center",
				vOffset: 595
			},
			events:{
				onSelect: function(){
					if (game.adultGame) {
							view.elements.countdownButton.setStyles({backgroundImage: 'http://upc.webelevate.net/vinny/' + gameImages.getNextAdultImage()});
						}
						else{
							view.elements.countdownButton.setStyles({backgroundImage: 'http://upc.webelevate.net/vinny/' + gameImages.getNextFamilyImage()});
							
						}
					if (game.teamA) {
						teamA.saveCorrectScore();
					}
					else {
						teamB.saveCorrectScore();
					}
					//teamA.saveCorrectScore();
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

		this.elements.incorrectButton = new MAF.element.Button({
			
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Game/Skip_Button.png',
				hAlign: "center",
				vOffset: 790
			},
			events:{
				onSelect: function(){
					if (game.teamA) {
						teamA.saveIncorrectScore();

					}
					else {
						teamB.saveIncorrectScore();
					}
					game.saveSkip();
					if (game.skips === 3) {
						gameTimer.stopCountdown();
						MAF.application.loadView("view-SummaryView");

					}
					else{
						if (game.adultGame) {
							view.elements.countdownButton.setStyles({backgroundImage: 'http://upc.webelevate.net/vinny/' + gameImages.getNextAdultImage()});
						}
						else{
							view.elements.countdownButton.setStyles({backgroundImage: 'http://upc.webelevate.net/vinny/' + gameImages.getNextFamilyImage()});
							
						}
					}
					//teamA.saveIncorrectScore();
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

		this.elements.mainMenuButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Game/Main_menu.png',
				hAlign: "left",
				hOffset: 68,
				vOffset: 702
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-MenuView");
				}
			}
		}).appendTo(this);

		this.elements.settingsButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Game/Exit.png',				
				hAlign: "right",
				hOffset: 68,
				vOffset: 702
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-StartSettingsView");
				}
			}
		}).appendTo(this);

		this.elements.pauseButton = new MAF.element.Button({
			styles:{
				width: 134,
				height: 98,
				backgroundImage: 'Images/Game/Pause_Button.png',
				hAlign: "center",
				vOffset: 693
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-ExitView");
					//gameTimer.stopCountdown();
					
					//console.log(gameImages.getNextFamilyImage());
					//console.log(gameImages.getNextAdultImage());
					//console.log(image);
				}
			}
		}).appendTo(this);

		this.elements.countdownButton = new MAF.element.Button({
			styles:{
				width: 504,
				height: 375,
				//backgroundImage: 'Images/Start/countdown.png',				
				hAlign: "center",
				vOffset: 20
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);


		this.elements.ourText = new MAF.element.Text({
			label: 2,
			styles:{
				width: 200,
				height: 75,
				fontSize: 40,
				color: 'rgba(0,0,0,.9)',
				hOffset: 235,
				//hAlign: "center",
				anchorStyle: 'left',
				vOffset: 472

			}
		}).appendTo(this);

		this.elements.ourText2 = new MAF.element.Text({
			label: '00',
			styles:{
				width: 200,
				height: 75,
				fontSize: 40,
				color: 'rgba(0,0,0,.9)',
				hOffset: 160,
				//hAlign: "center",
				anchorStyle: 'right',
				vOffset: 472
			}
		}).appendTo(this);

		
	},

	updateView: function () {
		var view = this;
		if (game.adultGame) {
			view.elements.countdownButton.setStyles({backgroundImage: 'http://upc.webelevate.net/vinny/' + gameImages.getNextAdultImage()});
		}
		else{
			view.elements.countdownButton.setStyles({backgroundImage: 'http://upc.webelevate.net/vinny/' + gameImages.getNextFamilyImage()});
				}
	//this.elements.menuGraphics.setSource('Images/landingpagegrapics.png');
		gameTimer.countdown(2);
		console.log("test rounds", game.currentRoundTeamA);
		if (game.teamA) {
			game.completeRoundTeamA();
		}
		else{
			game.completeRoundTeamB();
		}
	
	}
});
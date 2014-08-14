var SummaryView = new MAF.Class({
	ClassName: 'SummaryView',

	Extends: MAF.system.SidebarView,

	//initialize: function () {
	//	this.parent();
	//},

	initialize: function () {
	this.parent();
	//this.registerMessageCenterListenerCallback(this.dataHasChanged);
},

	/*dataHasChanged: function (event) {
		if(event.payload.key === 'numbers')
			//this.elements.ourGrid.changeDataset(event.payload.value, true);
		//console.log(event.payload.value);
			this.elements.ourText.setText(event.payload.value[0], true);
			this.elements.ourText2.setText(event.payload.value[1], true);
	},*/

	createView: function () {

		

		var view = this;
		this.elements.scoreButton = new MAF.element.Button({
			//label: 'Menu Graphics',
			//srcs: 'Images/landingpagegrapics.png',
			styles:{
				width: 600,
				height: 980,
				backgroundImage: 'Images/Summary/Background.png',
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-GridView");
					console.log("sound man");
				},
				onFocus: function () {
					//this.setStyles({backgroundImage: 'Images/landingpagegrapicsinv.png'});
					//view.elements.menuGraphics2.setStyles({backgroundImage: 'Images/landingpagegrapics.png'});
					/*this.animate({
									
									backgroundImage: 'Images/landingpagegrapicsinv.png',
									duration: 0.2
								});
					view.elements.menuGraphics2.animate({
									
									backgroundImage: 'Images/landingpagegrapics.png',
									duration: 0.2
								});*/
				}
			}
		}).appendTo(this);

		this.elements.gameonButton = new MAF.element.Button({
			styles:{
				width: 134,
				height: 98,
				backgroundImage: 'Images/Summary/Game-On.png',
				hAlign: "center",
				vOffset: 693

			},
			events:{
				onSelect: function(){
					if (game.isGameFinished()) {
						MAF.application.loadView("view-WinnersView");
					}
					else{
					game.switchTeam();
					game.resetSkips();
					MAF.application.loadView("view-StartView");
					}
					/*new Request({
						url: 'http://upc.webelevate.net/discogWebService/artist/get_artist_info',
						onSuccess: function (json) {
							console.log(json);
							console.log(testVin);
							console.log(image);
							testVin = JSON.parse(json);
							MAF.messages.store('alphabet', testVin);
							console.log('this type', testVin);
							console.log(testVin);
							image = testVin[0].artistThumbnail;
							console.log(image);
						},
						onFailure: function (error) {
							console.log('failure', error);
						},
						onError: function (error) {
							console.log('error', error);
						}
					}).send();*/
				}
			}
		}).appendTo(this);


		this.elements.mainMenuButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Summary/Menu_Button.png',
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

		

		this.elements.exitButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Summary/Exit_Button.png',
				hAlign: "right",
				hOffset: 68,
				vOffset: 702
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


		
		this.elements.ourText = new MAF.element.Text({
			styles:{
				width: 200,
				height: 75,
				fontSize: 40,
				color: 'rgba(0,0,0,.9)',
				hOffset: 170,
				//hAlign: "center",
				anchorStyle: 'left',
				vOffset: 300
			}
		}).appendTo(this);

		this.elements.ourText2 = new MAF.element.Text({
			styles:{
				width: 200,
				height: 75,
				fontSize: 40,
				color: 'rgba(0,0,0,.9)',
				hOffset: 217,
				//hAlign: "center",
				anchorStyle: 'right',
				vOffset: 300
			}
		}).appendTo(this);

		this.elements.UpOffButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Summary/UpOff_Button.png',
				hAlign: "center",
				vOffset: 595
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

		this.elements.DownOffButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Summary/DownOff_Button.png',
				hAlign: "center",
				vOffset: 792
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
	},

	updateView: function () {
		//timer();
		//gameTimer.countdown(1);

		//MAF.messages.store('numbers', [minutes,seconds]);
		//countdown();
		if (game.isGameFinished()) {
			this.elements.gameonButton.setStyles({backgroundImage: 'Images/Summary/Winners_Button.png'});
		}
		if (game.teamA) {
			this.elements.ourText.setText("Team A:");
			this.elements.ourText2.setText(teamA.getCurrentRoundScore());
			teamA.saveRoundScore();
		}
		else {
			this.elements.ourText.setText("Team B:");
			this.elements.ourText2.setText(teamB.getCurrentRoundScore());
			teamB.saveRoundScore();
		}
		

	
	}
});
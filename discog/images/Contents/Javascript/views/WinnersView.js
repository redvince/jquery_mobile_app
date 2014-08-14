var WinnersView = new MAF.Class({
	ClassName: 'WinnersView',

	Extends: MAF.system.SidebarView,

	initialize: function () {
		this.parent();
	},

	createView: function () {
		var view = this;
		this.elements.logoButton = new MAF.element.Button({
			//label: 'Menu Graphics',
			//srcs: 'Images/landingpagegrapics.png',
			styles:{
				width: 600,
				height: 980,
				backgroundImage: 'Images/Winner/Background.png',
				hAlign: "center"
			}
		}).appendTo(this);


		this.elements.continueButton = new MAF.element.Button({
			styles:{
				width: 134,
				height: 98,
				backgroundImage: 'Images/Winner/Continue_Button.png',
				hAlign: "center",
				vOffset: 693
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);


		this.elements.mainMenuButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Winner/Menu_Button.png',
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
				backgroundImage: 'Images/Winner/Exit_Button.png',
				hAlign: "right",
				hOffset: 68,
				vOffset: 702
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-MenuView");
					teamA.getGameScore();
					teamB.getGameScore();
				}
			}
		}).appendTo(this);

		this.elements.UpOffButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Winner/UpOff_Button.png',
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
				backgroundImage: 'Images/Winner/DownOff_Button.png',
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

		
	},

	updateView: function () {
		if (teamA.getGameScore() > teamB.getGameScore()) {
			this.elements.ourText.setText("Team A:");
			this.elements.ourText2.setText(teamA.getGameScore());
		}
		else{
			this.elements.ourText.setText("Team B:");
			this.elements.ourText2.setText(teamB.getGameScore());

		}
		//this.elements.menuGraphics.setSource('Images/landingpagegrapics.png');
	
	}
});
var StartSettingsView = new MAF.Class({
	ClassName: 'StartSettingsView',

	Extends: MAF.system.SidebarView,

	initialize: function () {
		this.parent();
	},

	createView: function () {
		game = new Game();
		var view = this;
		this.elements.logoButton = new MAF.element.Button({
			//label: 'Menu Graphics',
			//srcs: 'Images/landingpagegrapics.png',
			styles:{
				width: 600,
				height: 980,
				backgroundImage: 'Images/Settings/Background.png',
				hAlign: "center"
			}
		}).appendTo(this);

		
		this.elements.adultGameButton = new MAF.element.Button({
			
			styles:{				
				width: 116,
				height: 99,
				backgroundImage: 'Images/Settings/Adult_Button.png',
				
				//backgroundImage: 'Images/Start/gameon.png',
				hAlign: "center",
				vOffset: 595

			},
			events:{
				onSelect: function(){
					game.setGameType("adult");
					MAF.application.loadView("view-StartView");
					//teamA = new Team("Team A");
				}
			}
		}).appendTo(this);

		this.elements.familyGameButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Settings/Family_Button.png',
				//backgroundImage: 'Images/Start/Mainmenu_Button.png',
				
				hAlign: "center",
				vOffset: 792
			},
			events:{
				onSelect: function(){
					game.setGameType("family");
					MAF.application.loadView("view-StartView");
				}
			}
		
		}).appendTo(this);

		this.elements.midButton = new MAF.element.Button({
			styles:{
				width: 134,
				height: 98,
				backgroundImage: 'Images/Settings/Centre_Button_Off.png',
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


		this.elements.LeftOffButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Settings/Leftoff.png',
				hAlign: "left",
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

		this.elements.RightOffButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Settings/Rightoff.png',
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

		
	},

	updateView: function () {
		//this.elements.menuGraphics.setSource('Images/landingpagegrapics.png');
	
	}
});
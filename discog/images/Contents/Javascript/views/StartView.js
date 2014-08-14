var StartView = new MAF.Class({
	ClassName: 'StartView',

	Extends: MAF.system.SidebarView,

	initialize: function () {
		this.parent();

	},


	createView: function () {
		teamA = new Team("Team A");
		teamB = new Team("Team B");
		var view = this;
		this.elements.logoButton = new MAF.element.Button({
			//label: 'Menu Graphics',
			//srcs: 'Images/landingpagegrapics.png',
			styles:{
				width: 600,
				height: 980,
				backgroundImage: 'Images/Start/Background1.png',
				hAlign: "center"
			}
		}).appendTo(this);

		this.elements.gameOnButton = new MAF.element.Button({
			styles:{
				width: 134,
				height: 98,
				backgroundImage: 'Images/Start/Gameon.png',				
				hAlign: "center",
				vOffset: 693
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-GameView");
					//teamA = new Team("Team A");
				}
			}
		}).appendTo(this);

		this.elements.mainMenuButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Start/Exit_Button_Start.png',
				hAlign: "right",
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
			label: 'Back',
			styles:{
				width: 160,
				height: 80,
				backgroundImage: 'Images/Start/Back.png',				
				hAlign: "left",
				hOffset: 68,
				vOffset: 702
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-StartSettingsView");
				}
			}
		}).appendTo(this);

		this.elements.UpOffButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Start/UpOff_Button.png',
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
				backgroundImage: 'Images/Start/DownOff_Button.png',
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
		//this.elements.menuGraphics.setSource('Images/landingpagegrapics.png');
	
	}
});
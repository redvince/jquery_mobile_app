var HowView = new MAF.Class({
	ClassName: 'HowView',

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
				backgroundImage: 'Images/HowTo/Background.png',
				hAlign: "center"
			}
		
		}).appendTo(this);
	

		this.elements.startButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/HowTo/Start_Button.png',
				hAlign: "center",
				vOffset: 595
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);


		this.elements.mainMenuButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/HowTo/Back_Button.png',
				hAlign: "center",
				vOffset: 792
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-MenuView");
				}
			}
		}).appendTo(this);

		this.elements.centreButtonOff = new MAF.element.Button({
			styles:{
				width: 134,
				height: 98,
				backgroundImage: 'Images/About/Centre_Button_Off.png',
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
				backgroundImage: 'Images/HowTo/Leftoff.png',
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
				backgroundImage: 'Images/HowTo/Rightoff.png',
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
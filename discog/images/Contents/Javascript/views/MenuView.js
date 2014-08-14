var MenuView = new MAF.Class({
	ClassName: 'MenuView',

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

		gameImages = new ImageBank();
		gameImages.getAdultImages();
		gameImages.getFamilyImages();

		//gameTimer = new GameTimer();

		var view = this;
		this.elements.menuGraphicsButton = new MAF.element.Button({
			//label: 'Menu Graphics',
			//srcs: 'Images/landingpagegrapics.png',
			styles:{
				width: 600,
				height: 980,
				backgroundImage: 'Images/Landing/Landing_Page_Grapics.png',
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

		this.elements.startGameButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Landing/Start_Button.png',
				
				hAlign: "center",
				vOffset: 595
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-StartSettingsView");
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

		
		this.elements.howToButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 75,
				backgroundImage: 'Images/Landing/How_To_Play.png',
				
				hAlign: "right",
				hOffset: 67,
				vOffset: 704
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-HowView");
				}
			}
		}).appendTo(this);

		this.elements.centreButtonOff = new MAF.element.Button({
			styles:{
				width: 134,
				height: 98,
				backgroundImage: 'Images/Landing/Centre_Button_Off.png',
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

		this.elements.aboutButton = new MAF.element.Button({
			styles:{
				width: 160,
				height: 75,
				backgroundImage: 'Images/Landing/About_Button.png',				
				hAlign: "left",
				hOffset: 68,
				vOffset: 704
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-AboutView");
				}
			}
		}).appendTo(this);

		
		this.elements.exitButton = new MAF.element.Button({
			styles:{
				width: 116,
				height: 99,
				backgroundImage: 'Images/Landing/Exit_Button.png',
				
				hAlign: "center",
				vOffset: 792
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-WinnersView");
					//MAF.application.loadView("view-ExitView");
					//gameTimer.stopCountdown();
					
					//console.log(gameImages.getNextFamilyImage());
					//console.log(gameImages.getNextAdultImage());
					//console.log(image);
				}
			}
		}).appendTo(this);

				
		/*this.elements.ourText = new MAF.element.Text({
			label: 2,
			styles:{
				width: 200,
				height: 75,
				fontSize: 60,
				vOffset: (this.elements.exitButton.outerHeight),
				hOffset: 100,
				//hAlign: "center",
				anchorStyle: 'center'
			}
		}).appendTo(this);

		this.elements.ourText2 = new MAF.element.Text({
			label: '00',
			styles:{
				width: 200,
				height: 75,
				fontSize: 60,
				vOffset: (this.elements.exitButton.outerHeight),
				hOffset: 300,
				//hAlign: "center",
				anchorStyle: 'center'
			}
		}).appendTo(this);*/
	},

	updateView: function () {
		//timer();
		//gameTimer.countdown(1);

		//MAF.messages.store('numbers', [minutes,seconds]);
		//countdown();

		//this.elements.ourText.setText(testVin);
	
	}
});
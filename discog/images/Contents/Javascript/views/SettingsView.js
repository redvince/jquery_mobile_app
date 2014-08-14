var SettingsView = new MAF.Class({
	ClassName: 'SettingsView',

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
				width: 400,
				height: 95,
				backgroundImage: 'Images/Settings/headerlogo.png',
				hAlign: "center"
			}
		}).appendTo(this);

		this.elements.teamsButton = new MAF.element.Button({
			styles:{
				width: 514,
				height: 75,
				backgroundImage: 'Images/Settings/Teams_Button.png',
				vOffset: (this.elements.logoButton.outerHeight + 150),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

		this.elements.roundsButton = new MAF.element.Button({
			styles:{
				width: 514,
				height: 75,
				backgroundImage: 'Images/Settings/Rounds_Button.png',
				vOffset: (this.elements.teamsButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

		this.elements.categoriesButton = new MAF.element.Button({
			styles:{
				width: 514,
				height: 75,
				backgroundImage: 'Images/Settings/Categories_Button.png',
				vOffset: (this.elements.roundsButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

		this.elements.startButton = new MAF.element.Button({
			styles:{
				width: 400,
				height: 75,
				backgroundImage: 'Images/Settings/Start_Button.png',
				vOffset: (this.elements.categoriesButton.outerHeight + 150),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

		this.elements.mainMenuButton = new MAF.element.Button({
			styles:{
				width: 400,
				height: 75,
				backgroundImage: 'Images/Settings/Mainmenu_Button.png',
				vOffset: (this.elements.startButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-MenuView");
				}
			}
		}).appendTo(this);

		this.elements.aboutButton = new MAF.element.Button({
			styles:{
				width: 400,
				height: 75,
				backgroundImage: 'Images/Settings/About_Button.png',
				vOffset: (this.elements.mainMenuButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-AboutView");
				}
			}
		}).appendTo(this);

		
	},

	updateView: function () {
		//this.elements.menuGraphics.setSource('Images/landingpagegrapics.png');
	
	}
});
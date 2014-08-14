var LoadView = new MAF.Class({
	ClassName: 'LoadView',

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
				backgroundImage: 'Images/Load/headerlogo.png',
				hAlign: "center"
			}
		}).appendTo(this);

		this.elements.selectButton = new MAF.element.Button({
			styles:{
				width: 504,
				height: 415,
				backgroundImage: 'Images/Load/Selectgame.png',
				vOffset: (this.elements.logoButton.outerHeight + 150),
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
				backgroundImage: 'Images/Load/Start_Button.png',
				vOffset: (this.elements.selectButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

		this.elements.deleteButton = new MAF.element.Button({
			styles:{
				width: 400,
				height: 75,
				backgroundImage: 'Images/Load/Delete_Button.png',
				vOffset: (this.elements.startButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-DeleteView");
				}
			}
		}).appendTo(this);

		this.elements.mainMenuButton = new MAF.element.Button({
			styles:{
				width: 400,
				height: 75,
				backgroundImage: 'Images/Load/Mainmenu_Button.png',
				vOffset: (this.elements.deleteButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-MenuView");
				}
			}
		}).appendTo(this);

		
	},

	updateView: function () {
		//this.elements.menuGraphics.setSource('Images/landingpagegrapics.png');
	
	}
});
var ExitView = new MAF.Class({
	ClassName: 'ExitView',

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
				backgroundImage: 'Images/Exit/headerlogo.png',
				hAlign: "center"
			}
		}).appendTo(this);

		this.elements.dialogueButton = new MAF.element.Button({
			styles:{
				width: 498,
				height: 593,
				backgroundImage: 'Images/Exit/Exitquestion.png',
				vOffset: (this.elements.logoButton.outerHeight + 150),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);

	

		this.elements.yesButton = new MAF.element.Button({
			styles:{
				width: 400,
				height: 75,
				backgroundImage: 'Images/Exit/Yes_Button.png',
				vOffset: (this.elements.logoButton.outerHeight + 450),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					//MAF.application.loadView("view-StartView");
				}
			}
		}).appendTo(this);


		this.elements.noButton = new MAF.element.Button({
			styles:{
				width: 400,
				height: 75,
				backgroundImage: 'Images/Exit/No_Button.png',
				vOffset: (this.elements.yesButton.outerHeight + 15),
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
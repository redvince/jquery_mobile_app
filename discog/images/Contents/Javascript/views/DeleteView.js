var DeleteView = new MAF.Class({
	ClassName: 'DeleteView',

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
				backgroundImage: 'Images/Delete/headerlogo.png',
				hAlign: "center"
			}
		}).appendTo(this);

		this.elements.dialogueButton = new MAF.element.Button({
			styles:{
				width: 498,
				height: 593,
				backgroundImage: 'Images/Delete/Deletequestion.png',
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
				backgroundImage: 'Images/Delete/Yes_Button.png',
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
				backgroundImage: 'Images/Delete/No_Button.png',
				vOffset: (this.elements.yesButton.outerHeight + 15),
				hAlign: "center"
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-LoadView");
				}
			}
		}).appendTo(this);

		
	},

	updateView: function () {
		//this.elements.menuGraphics.setSource('Images/landingpagegrapics.png');
	
	}
});
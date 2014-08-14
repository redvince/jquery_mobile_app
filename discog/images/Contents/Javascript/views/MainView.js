var MainView = new MAF.Class({
	ClassName: 'MainView',

	Extends: MAF.system.SidebarView,

	initialize: function () {
		this.parent();
	},

	createView: function () {
		var view = this,
			current = 'hello';
		this.elements.ourText = new MAF.element.Text({
			label: 'Hello World!',
			styles:{
				width: 450,
				height: 100,
				fontSize: 60,
				hOffset: (this.width - 450)/2,
				vOffset: (this.height - 100)/2,
				anchorStyle: 'center'
			}
		}).appendTo(this);
		
		this.controls.ourTextButton = new MAF.control.TextButton({
			label: 'Bye!',
			theme: false,
			styles:{
				width: 450,
				height: 100,
				fontSize: 60,
				hOffset: this.elements.ourText.hOffset,
				vOffset: this.elements.ourText.outerHeight
			},
			textStyles:{
				anchorStyle: 'center'
			},
			events:{
				onSelect: function(){
					if(current === "hello"){
						view.elements.ourText.setText("Bye World!");
						this.setText("Hello!");
						this.element.addClass('redButton');
						this.element.removeClass('greenButton');
						current = 'bye';
					}
					else {
						view.elements.ourText.setText("Hello World!");
						this.setText("Bye!");
						this.element.addClass('greenButton');
						this.element.removeClass('redButton');
						current = 'hello';
					}
				}
			}
		}).appendTo(this);

		this.controls.ourViewButton = new MAF.control.TextButton({
			label: 'To Grid',
			theme: false,
			styles:{
				width: 450,
				height: 100,
				fontSize: 60,
				hOffset: this.elements.ourText.hOffset,
				vOffset: this.controls.ourTextButton.outerHeight
			},
			textStyles:{
				anchorStyle: 'center'
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-GridView");
				}
			}
		}).appendTo(this);

		this.controls.ourVidViewButton = new MAF.control.TextButton({
			label: 'To Video',
			theme: false,
			styles:{
				width: 450,
				height: 100,
				fontSize: 60,
				hOffset: this.elements.ourText.hOffset,
				vOffset: this.controls.ourViewButton.outerHeight
			},
			textStyles:{
				anchorStyle: 'center'
			},
			events:{
				onSelect: function(){
					MAF.application.loadView("view-MediaView");
				}
			}
		}).appendTo(this);
	},

	updateView: function () {
	
	}
});
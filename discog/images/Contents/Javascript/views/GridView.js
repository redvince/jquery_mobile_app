var GridView = new MAF.Class({
	ClassName: 'GridView',

	Extends: MAF.system.SidebarView,

	initialize: function () {
		this.parent();
		this.registerMessageCenterListenerCallback(this.dataHasChanged);
	},

	dataHasChanged: function (event) {
		if(event.payload.key === 'alphabetSoup')
			this.elements.ourGrid.changeDataset(event.payload.value, true);
	},

	createView: function () {
		this.elements.ourGrid = new MAF.control.Grid({
			rows: 2,
			columns: 2,
			carousel: true,
			cellCreator: function () {
				var cell = new MAF.control.GridCell({
					styles: this.getCellDimensions()
				});

				cell.text = new MAF.element.Text({
					styles: {
						backgroundColor: 'black',
						fontSize: 24,
						color: 'white',
						width: cell.width - 20,
						height: cell.height - 20,
						hOffset: 10,
						vOffset: 10,
						anchorStyle: 'center'
					}
				}).appendTo(cell);

				return cell;
			},
			cellUpdater: function (cell, data) {
				cell.text.setText(data.character);
			},
			styles: {
				width: this.width,
				height: this.height
			}
		}).appendTo(this);
	},



	updateView: function () {
		new Request({
			url: 'https://data.itpir.wm.edu/deflate/api.php?val=100USD1986USA&json=true',
			onSuccess: function (json) {
                console.log(json);
				var test = ([
    {
        "testData": "avere"
    },
    {
        "testData": "begge"
    },
    {
        "testData": "c"
    },
    {
        "testData": "d"
    },
    {
        "testData": "e"
    },
    {
        "testData": "f"
    },
    {
        "testData": "g"
    },
    {
        "testData": "h"
    },
    {
        "testData": "i"
    },
    {
        "testData": "j"
    },
    {
        "testData": "k"
    },
    {
        "testData": "l"
    },
    {
        "testData": "m"
    },
    {
        "testData": "n"
    },
    {
        "testData": "o"
    },
    {
        "testData": "p"
    },
    {
        "testData": "q"
    },
    {
        "testData": "r"
    },
    {
        "testData": "s"
    },
    {
        "testData": "t"
    },
    {
        "testData": "u"
    },
    {
        "testData": "v"
    },
    {
        "testData": "w"
    },
    {
        "testData": "x"
    },
    {
        "testData": "y"
    },
    {
        "testData": "z"
    }
]);
				MAF.messages.store('alphabetSoup', json);
				console.log('succes', json);
				
			},
			onFailure: function (error) {
				console.log('failure', error);
			},
			onError: function (error) {
				console.log('error', error);
			}
		}).send();
	}
});
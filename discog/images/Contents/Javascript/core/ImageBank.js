function ImageBank () {
    this.adultIndex = 0;
    this.familyIndex = 0;
    this.adultSize;
    this.familySize;
    this.adultImages;
    this.familyImages;
}

ImageBank.prototype = {
    constructor: ImageBank,
    getAdultImages:function ()  {
		var self = this;
        new Request({
			url: 'http://upc.webelevate.net/discogWebService/artist/get_artist_info',
			onSuccess: function (json) {
				//console.log(json);
				//console.log(testVin);
				//console.log(image);
				self.adultImages = JSON.parse(json);
				//MAF.messages.store('alphabet', testVin);
				console.log('this type', self.adultImages);
				
				self.shuffle(self.adultImages);
				//console.log('this type shuffle', self.adultImages);
			
				
				
				//console.log(testVin);
				//image = testVin[0].artistThumbnail;
				//console.log(image);
			},
			onFailure: function (error) {
				console.log('failure', error);
			},
			onError: function (error) {
				console.log('error', error);
			}
		}).send();
	},
	getFamilyImages:function () {
		var self = this;
		new Request({
			url: 'http://upc.webelevate.net/discogWebService/album/get_album_info',
			onSuccess: function (json) {
				//console.log(json);
				//console.log(testVin);
				//console.log(image);
				//console.log(this.familyImages);
				self.familyImages = JSON.parse(json);
				self.shuffle(self.familyImages);
				//MAF.messages.store('alphabet', testVin);
				//console.log('this family type', this.familyImages);
				//console.log(testVin);
				//image = testVin[0].artistThumbnail;
				//console.log(image);
				//console.log(self.familyImages);
				
			},
			onFailure: function (error) {
				console.log('failure', error);
			},
			onError: function (error) {
				console.log('error', error);
			}
		}).send();
	},
	getNextAdultImage:function () {
		if (this.adultIndex < this.adultImages.length) {
			this.adultIndex++;
			return this.adultImages[this.adultIndex-1].artistThumbnail;
		}
		else{
			this.adultIndex = 1;
			return this.adultImages[this.adultIndex-1].artistThumbnail;
		}
	},
	getNextFamilyImage:function () {
		if (this.familyIndex < this.familyImages.length) {
			this.familyIndex++;
			return this.familyImages[this.familyIndex-1].albumThumbnail;
		}
		else{
			this.familyIndex = 1;
			return this.familyImages[this.familyIndex-1].albumThumbnail;
		}
	},
	shuffle:function (array) {
		//console.log(array);
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
};
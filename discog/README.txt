JQM Popup with Iframe allows video to keep playing in the background after closing,
so it was necessary to use the Youtube API, which is buggy itself, to provide a stopVideo() function...

This App is tested and runs sucessfully on Chrome, Safari, Safari IOS, Opera and Firefox.

However, the videos will not load in firefox, In my investigations I believe it is possibly because 
of mismatched protocols. localhost vs https vs http. IT is also possible that the videos will play in
Firefox were it not hosted locally. I will test and get back to you regarding this.

Also, for demonstration purposes, each album track in the artists JSOn file contains the vid url of the 
FIRST track of EACH album. (TOO MANY TRACK URLS)

The entire App is dynamic, it would not do anything without a JSON feed bar explain how to use the App (",)...

This App is just a demo of a selection of Artists on the Sub Pop Label. It would infact cover the whole catalogue were 
it receiving a real JSON feed, without any changes necessary to the html or script. The images can be live also.    

It could also be expanded to cover other labels etc....

I included my script funtionality at the bottom of the HTML file as I believe that is what you requested.
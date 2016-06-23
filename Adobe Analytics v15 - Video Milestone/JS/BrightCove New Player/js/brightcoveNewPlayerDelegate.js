
$( document ).ready(function() {

	(function(window, document, vjs, undefined) {
		simpleAnalytics = function (options) {
			var myPlayer = this;
			var isContentLoaded=false;
			var videoDuration;
			var mediaName;
			var mediaPlayerName = "Brightcove New Player - Milestone";
			var currentTime;
			var isPlaying = false;
			
			function ABDMediaOPEN() {
				console.log("IN ABDMediaOPEN TOP");
				//Check the metadata is loaded
				if(isContentLoaded){
					console.log("IN ABDMediaOPEN content loaded");
					//Get all required metadata
					currentTime = myPlayer.currentTime();
					mediaName = myPlayer.mediainfo.description;
					videoDuration = myPlayer.mediainfo.duration;
					//Open adobe Analytics Media Module	
					s.Media.open(mediaName,videoDuration,mediaPlayerName);
					//Check if video is playing
					if(isPlaying){
						console.log("IN ABDMediaOPEN video is playing " + mediaName + " | " + videoDuration);
						console.log();
						//Play Adobe Analytics Media module from beginning.
						s.Media.play(mediaName,currentTime);
					}
				}
			}
			
			//Used to reset the variables as when the next videos play, the play event is called before loadstart ...
			function resetVariables(){
				isContentLoaded = false;
				videoDuration = currentTime = "";
				
			}
			
			myPlayer.on('loadstart',function(){
				console.log("loadstart - " + myPlayer.mediainfo.description);
				//Check that metadata is loaded
				if(myPlayer.mediainfo.description){
					isContentLoaded = true;
					//Initiate Adobe Analytics Media Module tracking.
					ABDMediaOPEN();
				}
			});

			myPlayer.on('play', function(){
				console.log("Played - " + myPlayer.mediainfo.description);
				isPlaying = true;
				//Check if metadata loaded - needed to make sure correct video media module instance is tracked.
				if(isContentLoaded){
					currentTime = myPlayer.currentTime();
					//Play Adobe Analytics Media module from the current head.
					s.Media.play(mediaName,currentTime);
				}
			});

			myPlayer.on('pause',function(){
				isPlaying = false;
				console.log("paused - " + myPlayer.mediainfo.description);
				//Check if metadata loaded - needed to make sure correct video media module instance is tracked.
				if(isContentLoaded){
					currentTime = myPlayer.currentTime();
					//Play Adobe Analytics Media module from the current head.
					s.Media.stop(mediaName,currentTime);
				}
			});

			myPlayer.on('progress',function(){
				console.log("progressed - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('resize',function(){
				console.log("resized - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('seeked',function(){
				console.log("seeked - " + myPlayer.mediainfo.description);
				//Check if metadata loaded - needed to make sure correct video media module instance is tracked.
				if(isContentLoaded){
					currentTime = myPlayer.currentTime();
					//Play Adobe Analytics Media module from the current head.
					s.Media.play(mediaName,currentTime);
				}
			});

			myPlayer.on('seeking',function(){
				console.log("seeking - " + myPlayer.mediainfo.description);
				//Check if metadata loaded - needed to make sure correct video media module instance is tracked.
				if(isContentLoaded){
					currentTime = myPlayer.currentTime();
					//Play Adobe Analytics Media module from the current head.
					s.Media.stop(mediaName,currentTime);
				}
			});

			myPlayer.on('timeupdate',function(){
				console.log("timeupdate - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('volumechange',function(){
				console.log("volumechange - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('waiting',function(){
				console.log("waiting - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('durationchange',function(){
				console.log("durationchange - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('ended',function(){
				console.log("ended - " + myPlayer.mediainfo.description);
				//Check if metadata loaded - needed to make sure correct video media module instance is tracked.
				if(isContentLoaded){
					currentTime = myPlayer.currentTime();
					//Play Adobe Analytics Media module from the current head.
					s.Media.stop(mediaName,currentTime);
					s.Media.close(mediaName);
					resetVariables();
				}
			});
			
			myPlayer.on('fullscreenchange',function(){
				console.log("fullscreenchange - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('loadedalldata',function(){
				console.log("loadedalldata - " + myPlayer.mediainfo.description);
			});

			myPlayer.on('loadeddata',function(){
				console.log("loadeddata - " + myPlayer.mediainfo.description);
			});
			
			myPlayer.on('loadedmetadata',function(){
				console.log("loadedmetadata - " + myPlayer.mediainfo.description);
			});

		};
			

	
		// register simpleAnalytics plugin with the player
		videojs.plugin("simpleAnalytics", simpleAnalytics);
	})(window, document, videojs);

	for(var v in videojs.getPlayers()){
		videojs.getPlayers()[v].simpleAnalytics();
	}
	
	
})

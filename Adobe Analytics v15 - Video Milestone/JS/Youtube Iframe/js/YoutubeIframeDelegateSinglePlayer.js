/* Loads IFrame Player API Code asynchronously */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube Player Mapping for single embedded video
window.onYouTubeIframeAPIReady = function() {
	var player = new YT.Player('player', {
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING) {
				var videoPlayer = "YouTube";
				var videoTitle = event.target.getVideoData().title;
				var videoId = event.target.getVideoData().video_id;
				var mediaName = videoPlayer+'|'+videoId+'|'+videoTitle;
				var mediaLength = Math.floor(event.target.getDuration());
				var mediaOffset = Math.floor(event.target.getCurrentTime());
			if (mediaOffset == 0) {
				console.log('mediaName on Start: ' + mediaName);
				console.log('mediaLength on Start: ' + Math.floor(event.target.getDuration()));
				console.log('mediaOffset on Start: ' + Math.floor(event.target.getCurrentTime()));
				mediaOffset = Math.floor(event.target.getCurrentTime());
				s.Media.open(mediaName,mediaLength,videoPlayer);
				s.Media.play(mediaName,mediaOffset);
			} else {
				console.log('mediaName on Play: ' + mediaName);
				console.log('mediaOffset on Play: ' + Math.floor(event.target.getCurrentTime()));
				mediaOffset = Math.floor(event.target.getCurrentTime());
				s.Media.play(mediaName,mediaOffset);
			};
	}
	if (event.data == YT.PlayerState.PAUSED) {
			var videoPlayer = "YouTube";
			var videoTitle = event.target.getVideoData().title;
			var videoId = event.target.getVideoData().video_id;
			var mediaName = videoPlayer+'|'+videoId+'|'+videoTitle;
			console.log('mediaName on Pause: ' + mediaName);
			console.log('mediaOffset on Pause: ' + Math.floor(event.target.getCurrentTime()));
			mediaOffset = Math.floor(event.target.getCurrentTime());
			s.Media.stop(mediaName,mediaOffset);
	}
	if (event.data == YT.PlayerState.BUFFERING) {
			var videoPlayer = "YouTube";
			var videoTitle = event.target.getVideoData().title;
			var videoId = event.target.getVideoData().video_id;
			var mediaName = videoPlayer+'|'+videoId+'|'+videoTitle;
			console.log('mediaName on Buffering: ' + mediaName);
			console.log('mediaOffset on Buffering: ' + Math.floor(event.target.getCurrentTime()));
			mediaOffset = Math.floor(event.target.getCurrentTime());
			s.Media.stop(mediaName,mediaOffset);
	}
	if (event.data == YT.PlayerState.ENDED) {
			var videoPlayer = "YouTube";
			var videoTitle = event.target.getVideoData().title;
			var videoId = event.target.getVideoData().video_id;
			var mediaName = videoPlayer+'|'+videoId+'|'+videoTitle;
			console.log('mediaName on Ended: ' + mediaName);
			console.log('mediaOffset on Ended: ' + 0);
			mediaOffset = 0;
			s.Media.stop(mediaName,mediaOffset);
			s.Media.close(mediaName);
	}
}
function myHandler(e) {
	var video = document.getElementsByTagName('video')[0];
	var mediaName=document.getElementsByTagName('video')[0].getAttribute("name");
	var mediaLength = video.duration;
	var mediaPlayerName = "HTML5 Basic Player";
	//Define video offset
	if (video.currentTime > 0) {
		mediaOffset = Math.floor(video.currentTime);
	} else {
		mediaOffset = 0;
	};

	switch(e.type) {
	case "play":
		//Call on video start
		if (mediaOffset ==0) {
			s.Media.open(mediaName,mediaLength,mediaPlayerName);
			s.Media.play(mediaName,0);
		} else {
			s.Media.play(mediaName,mediaOffset);
		}
		break;
	case "seeking":
		//Call on scrub start
		s.Media.stop(mediaName,mediaOffset);
		break;
	case "seeked":
		//Call on scrub stop
		s.Media.play(mediaName,mediaOffset);
		break;
	case "pause":
		//Call on pause
		s.Media.stop(mediaName,mediaOffset);
		break;
	case "ended":
		//Call on video complete
		s.Media.stop(mediaName,mediaOffset);
		s.Media.close(mediaName);
		mediaOffset = 0;
		break;
	default:
		break;
	}

};
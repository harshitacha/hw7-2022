var video;
video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML =  (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate*0.9);
	console.log(video.playbackRate + "");
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate*1.1);
	console.log(video.playbackRate + "");
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime+10 >= video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value/100;
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});




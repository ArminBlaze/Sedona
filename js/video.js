	//VIDEO PLAYER SCRIPT
	
	var vid, video__pause, video__seek, video__bar, video__time, video__timeTotal, video__mute, video__volume, video__soundBar, fullscreenbtn;
	
	function intializePlayer(){
	
	// Set object references
	
	vid = document.querySelector(".my_video");
//	video__pause = document.querySelector(".video__pause");
	video__seek = document.querySelector(".video__seek");
	video__bar = document.querySelector(".video__bar");
//	video__time = document.querySelector(".video__time");
//	video__timeTotal = document.querySelector(".video__time-total");
//	video__mute = document.querySelector(".video__mute");
//	video__volume = document.querySelector(".video__volume");
//	video__soundBar = document.querySelector(".video__soundBar");
	fullscreenbtn = document.querySelector(".fullscreenbtn");
	
	// Add event listeners
//	video__pause.addEventListener("click",playPause,false);
	
	vid.addEventListener("click",playPause,false);
//	vid.addEventListener("dblclick", toggleFullScreen);
	vid.addEventListener("timeupdate",seektimeupdate,false);
//	video__mute.addEventListener("click",vidmute,false);
fullscreenbtn.addEventListener("click",toggleFullScreen,false);	
	

	var timeDrag = false; /* Drag status */
	video__seek.addEventListener( "mousedown" , function(e) {
		timeDrag = true;
		updatebar(e.pageX);
	});
		document.addEventListener( "mouseup" , function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX);
		}
	});
		document.addEventListener( "mousemove" , function(e) {
		if(timeDrag) {
			updatebar(e.pageX);
		}
	});
	
//	var volumeDrag = false;
//	video__volume.addEventListener( "mousedown" , function(e) {
//		volumeDrag = true;
//		updateSound(e.pageX);
//	});
//		document.addEventListener( "mouseup" , function(e) {
//		if(volumeDrag) {
//			volumeDrag = false;
//			updateSound(e.pageX);
//		}
//	});
//		document.addEventListener( "mousemove" , function(e) {
//		if(volumeDrag) {
//			updateSound(e.pageX);
//		}
//	});
	
}
window.onload = intializePlayer;
function playPause(){
	if(vid.paused){
		vid.play();
		vid.style.background = "black";
//		video__pause.style.backgroundImage = "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03LjAxMSwxNi4yODVjMCwwLjY3Mi0wLjYxMiwxLjIxNS0xLjM2NiwxLjIxNUg0LjIyM2MtMC43NTQsMC0xLjM2NS0wLjU0My0xLjM2NS0xLjIxNVYxLjcxNA0KCQljMC0wLjY3LDAuNjExLTEuMjE0LDEuMzY1LTEuMjE0aDEuNDIyYzAuNzU0LDAsMS4zNjYsMC41NDQsMS4zNjYsMS4yMTRWMTYuMjg1eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNS4xNDIsMTYuMjg1YzAsMC42NzItMC41ODYsMS4yMTUtMS4zMDgsMS4yMTVoLTEuMzYzYy0wLjcyMywwLTEuMzA4LTAuNTQzLTEuMzA4LTEuMjE1VjEuNzE0DQoJCWMwLTAuNjcsMC41ODUtMS4yMTQsMS4zMDgtMS4yMTRoMS4zNjNjMC43MjIsMCwxLjMwOCwwLjU0NCwxLjMwOCwxLjIxNFYxNi4yODV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==)";
//		video__pause.style.backgroundSize="20px";
	} else {
		vid.pause();
//		video__pause.style.backgroundImage = "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSI5MSA5MSAxOCAxOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyA5MSA5MSAxOCAxOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBvcGFjaXR5PSIwLjk1IiBmaWxsPSIjRkZGRkZGIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3ICAgICIgZD0iTTkzLjI1OCw5MS4yMzlsMTQuNjkyLDcuNjgxYzEuMTQxLDAuNTk2LDEuMTQxLDEuNTYzLDAsMi4xNTkNCgkJbC0xNC42OTIsNy42ODNjLTEuMTQsMC41OTctMi4wNjQsMC4wMzctMi4wNjQtMS4yNDhWOTIuNDg3QzkxLjE5NCw5MS4yMDIsOTIuMTE4LDkwLjY0Myw5My4yNTgsOTEuMjM5eiIvPg0KPC9nPg0KPC9zdmc+DQo=)";
//		video__pause.style.backgroundSize="20px";
	}
}
	

var updatebar = function(x) {
	var progress = video__seek;
	var maxduration = vid.duration;
	var position = x - progress.getBoundingClientRect().left;
	var percentage = 100 * position / progress.offsetWidth;
	
	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
	}
	
//	Update progress bar and video currenttime
	video__bar.style.width = percentage + "%";
	vid.currentTime = maxduration * percentage / 100;
	
};

var updateSound = function(x) {
	var progress = video__volume;
//	var maxduration = vid.duration;
	var position = x - progress.getBoundingClientRect().left;
	var percentage = 100 * position / progress.offsetWidth;
	
	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
		//Изменить иконку
	}
	
//	Update progress bar and video currenttime
	video__soundBar.style.width = percentage + "%";
	vid.volume = percentage / 100;

	
};
	
function seektimeupdate(){
	var currentPos = vid.currentTime;
	var maxduration = vid.duration;
	var percentage = 100 * currentPos / maxduration;
	video__bar.style.width=percentage+"%";
	
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	video__time.innerHTML = curmins+":"+cursecs;
	video__timeTotal.innerHTML = durmins+":"+dursecs;
}
function vidmute(){
	if(vid.muted){
		vid.muted = false;
		video__mute.style.backgroundClip="border-box";
	} else {
		vid.muted = true;
		video__mute.style.backgroundClip="content-box";
	}
}
function setvolume(){
	vid.volume = video__volume.value / 100;
}
function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}
	
	//END OF VIDEO PLAYER SCRIPT
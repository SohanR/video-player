const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



// Play and pause

function videoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//Update play/pause icon

function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
}

// Update progress and timestamp

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // minutes

    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}


//set video time progress

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

//stop video 
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

//Event Listener

video.addEventListener('click', videoStatus);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', videoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);





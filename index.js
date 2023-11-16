const UNMUTED_VOLUME = 0.15;
const audio1 = new Audio("losing-someone.mp3");
const audio2 = new Audio("even-dark.mp3");
const audio3 = new Audio("moon-and-back.mp3");
const audio4 = new Audio("peter-pan.mp3");
const audio6 = new Audio("ai-ga-tomoru.mp3");

const songList = [audio1, audio2, audio3, audio4, audio5, audio6];

let vol = UNMUTED_VOLUME;
let currSong = 0;

for (let i = 0; i < songList.length; i++) {
    songList[i].volume = vol;
} 

function show() {
    const startButton = document.getElementById("start");
    const hidden = document.getElementById("hidden");
    startButton.style.display = "none";
    hidden.style.display = "block";
    hidden.scrollIntoView({behavior: "smooth"})
    playSongs()
}

function playSongs() {
    songList[currSong].volume = vol;
    songList[currSong].play();
    songList[currSong].onended = function(){
        currSong = (currSong + 1) % songList.length;
        playSongs();
    }
}

function soundOnOff() {
    const muteButton = document.getElementById("mute");
    if (vol == UNMUTED_VOLUME) {
        vol = 0;
        muteButton.src = "muted.png";
    }
    else {
        vol = UNMUTED_VOLUME;
        muteButton.src = "unmuted.png";
    }
    for (let i = 0; i < songList.length; i++) {
        songList[i].volume = vol;
    } 
}
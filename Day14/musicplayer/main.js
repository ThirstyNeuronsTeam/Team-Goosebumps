//Get all dynamic Elements
const playButton = document.getElementById("playButton"); //READ AND CREATE
const pauseButton = document.getElementById("pauseButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const currentSongIndexSpan = document.getElementById("currentSongIndexSpan");
const speaker = document.getElementById("speaker");
const songImage = document.getElementById("songImage");
const songName = document.getElementById("songName");

//add interactivity
function addInteractivity() {
  //play click .... play mode
  playButton.addEventListener("click", setPlayMode);
  //pause click ... pause mode
  pauseButton.addEventListener("click", setPauseMode);

  nextButton.addEventListener("click", gotoNextSong);

  prevButton.addEventListener("click", gotoPrevSong);
}
addInteractivity();

//RAW DATA
let mode = "pause";
let songs = [
  {
    id: "1",
    title: "hey",
    mp3Path: "./music/hey.mp3",
    imagePath: "./images/hey.jpg",
  },
  {
    id: "2",
    title: "summer",
    mp3Path: "./music/summer.mp3",
    imagePath: "./images/summer.jpg",
  },
  {
    id: "3",
    title: "ukulele",
    mp3Path: "./music/ukulele.mp3",
    imagePath: "./images/ukulele.jpg",
  },
];
let songsLength = songs.length; //DERIVED

let currentSongIndex = 0;

let currentSongData;

updateCurrentSongData();

function updateCurrentSongData() {
  currentSongData = songs[currentSongIndex];
}


function renderLatestSelectedSong() {
  speaker.src = currentSongData.mp3Path; //<audio
  songImage.src = currentSongData.imagePath; //<img
  songName.textContent = currentSongData.title; //span
}

function render() {
  renderLatestSelectedSong();

  if (isPauseMode()) {
    showPlayButton();
    hidePauseButton();
    pauseTheSpeaker();
  } else {
    if (isPlayMode()) {
      showPauseButton();
      hidePlayButton();
      playTheSpeaker();
    }
  }
}
render();

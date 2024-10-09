const playButton = document.getElementById("playButton"); //READ AND CREATE
const pauseButton = document.getElementById("pauseButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const currentSongIndexSpan = document.getElementById("currentSongIndexSpan");
const speaker = document.getElementById("speaker");
const songImage = document.getElementById("songImage")
const songName = document.getElementById("songName")

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
  }
];
let songsLength = songs.length; //DERIVED

let currentSongIndex = 0;

let currentSongData;

updateCurrentSongData();

function pauseTheSpeaker() {
  speaker.pause();
}

function playTheSpeaker() {
  speaker.play();
}

function updateCurrentSongData() {
  currentSongData = songs[currentSongIndex];
}

function gotoNextSong() {
  currentSongIndex = currentSongIndex + 1; // Get the Next Song Index

  if (currentSongIndex >= songsLength) {
    currentSongIndex = 0;
  }

  updateCurrentSongData();
  mode = "play"

  render();
}

function gotoPrevSong() {
  //1
  currentSongIndex = currentSongIndex - 1; //Get the Previous Song Index

  //2
  if (currentSongIndex < 0) {
    //Checking the Previous Song Index for valid value - Less then Zero
    currentSongIndex = songsLength - 1; //Converting to Valid Value
  }

  //3
  updateCurrentSongData();
  mode = "play"

  render(); // Show in the UI
}

function setPlayMode() {
  mode = "play";
  render();
}

function setPauseMode() {
  //setting the data
  mode = "pause";
  //calling the render to modify the userinterface
  render();
}

function showPlayButton() {
  //playButton.style.visibility = "visible" // UPDATE
  playButton.style.display = "inline-block";
}

function hidePlayButton() {
  //playButton.style.visibility = "hidden"
  playButton.style.display = "none";
}

function showPauseButton() {
  pauseButton.style.display = "inline-block";
}

function hidePauseButton() {
  pauseButton.style.display = "none";
}

function addInteractivity() {
  //play click .... play mode
  playButton.addEventListener("click", setPlayMode);
  //pause click ... pause mode
  pauseButton.addEventListener("click", setPauseMode);

  nextButton.addEventListener("click", gotoNextSong);

  prevButton.addEventListener("click", gotoPrevSong);
}

function render() {
  speaker.src = currentSongData.mp3Path; //<audio
  songImage.src = currentSongData.imagePath; //<img
  songName.textContent = currentSongData.title //span

  if (mode === "pause") {
    showPlayButton();
    hidePauseButton();
    pauseTheSpeaker();
  } else {
    if (mode === "play") {
      showPauseButton();
      hidePlayButton();
      playTheSpeaker();
    }
  }

  currentSongIndexSpan.textContent = currentSongIndex;
}

addInteractivity();
render();

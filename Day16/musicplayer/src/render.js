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

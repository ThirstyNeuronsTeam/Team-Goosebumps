function addInteractivity() {
  //play click .... play mode
  playButton.addEventListener("click", setPlayMode);
  //pause click ... pause mode
  pauseButton.addEventListener("click", setPauseMode);

  nextButton.addEventListener("click", gotoNextSong);

  prevButton.addEventListener("click", gotoPrevSong);
}


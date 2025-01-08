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
  mode = "play";

  render(); // Show in the UI
}

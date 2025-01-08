function gotoNextSong() {
    currentSongIndex = currentSongIndex + 1; // Get the Next Song Index
  
    if (currentSongIndex >= songsLength) {
      currentSongIndex = 0;
    }
  
    updateCurrentSongData();
    mode = "play";
  
    render();
  }
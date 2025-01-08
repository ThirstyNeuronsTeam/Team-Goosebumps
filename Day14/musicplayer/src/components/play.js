function isPlayMode() {
  if (mode === "play") {
    return true;
  } else {
    return false;
  }
}

function showPlayButton() {
  //playButton.style.visibility = "visible" // UPDATE
  playButton.style.display = "inline-block";
}

function hidePlayButton() {
  //playButton.style.visibility = "hidden"
  playButton.style.display = "none";
}

function setPlayMode() {
  mode = "play";
  render();
}

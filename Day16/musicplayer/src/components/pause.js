function isPauseMode() {
  if (mode === "pause") {
    return true;
  } else {
    return false;
  }
}

function showPauseButton() {
  pauseButton.style.display = "inline-block";
}

function hidePauseButton() {
  pauseButton.style.display = "none";
}

function setPauseMode() {
  //setting the data
  mode = "pause";
  //calling the render to modify the userinterface
  render();
}

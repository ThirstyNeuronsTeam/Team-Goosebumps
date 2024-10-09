const playButton = document.getElementById("playButton"); //READ AND CREATE
const pauseButton = document.getElementById("pauseButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const currentSongIndexSpan = document.getElementById("currentSongIndexSpan")

//RAW DATA
let mode = "pause"
let songs = [
    {id:"1",title:"hey",mp3Path:"./music/hey.mp3",imagePath:"./images/hey.jpg"},
    {id:"2",title:"summer",mp3Path:"./music/summer.mp3",imagePath:"./images/summer.jpg"},
    {id:"3",title:"ukulele",mp3Path:"./music/ukulele.mp3",imagePath:"./images/ukulele.jpg"}
]
let songsLength = songs.length; //DERIVED 

let currentSongIndex = 0;

//DERIVED
let currentSongData = songs[currentSongIndex] //depends on two raw variables - songs and currentSongIndex

function gotoNextSong(){
    currentSongIndex = currentSongIndex + 1;

    if(currentSongIndex >=songsLength){
        currentSongIndex = 0;
    }

    //If 2 appuram 0 varanum
    console.log(currentSongIndex)
    render();
}

function gotoPrevSong(){
    currentSongIndex = currentSongIndex - 1

    //0 appuram 2 varanum
    if(currentSongData<0){
        currentSongData = songsLength-1
    }
    console.log(currentSongIndex)
    render()

}

function setPlayMode(){
    mode = "play"
    render()
}

function setPauseMode(){
    //setting the data
    mode = "pause"
    //calling the render to modify the userinterface
    render()
}

function showPlayButton(){
    //playButton.style.visibility = "visible" // UPDATE
    playButton.style.display = "inline-block"
}

function hidePlayButton(){
    //playButton.style.visibility = "hidden"
    playButton.style.display = "none"

}

function showPauseButton(){
    pauseButton.style.display = "inline-block"
}

function hidePauseButton(){
    pauseButton.style.display = "none"
}


function addInteractivity(){
    //play click .... play mode
    playButton.addEventListener("click",setPlayMode)
    //pause click ... pause mode
    pauseButton.addEventListener("click",setPauseMode);

    nextButton.addEventListener("click",gotoNextSong);

    prevButton.addEventListener("click",gotoPrevSong);

}


function render(){
    if(mode==="pause"){
        showPlayButton();
        hidePauseButton()
    }else{
        if(mode==="play"){
            showPauseButton();
            hidePlayButton();
        }
    }

    currentSongIndexSpan.textContent = currentSongIndex;

}

addInteractivity();
render();

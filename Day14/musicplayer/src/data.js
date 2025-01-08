let mode = "pause";
let songs = [
  {
    id: "1",
    title: "hey",
    mp3Path: "./assets/music/hey.mp3",
    imagePath: "./assets/images/hey.jpg",
  },
  {
    id: "2",
    title: "summer",
    mp3Path: "./assets/music/summer.mp3",
    imagePath: "./assets/images/summer.jpg",
  },
  {
    id: "3",
    title: "ukulele",
    mp3Path: "./assets/music/ukulele.mp3",
    imagePath: "./assets/images/ukulele.jpg",
  },
];
let songsLength = songs.length; //DERIVED

let currentSongIndex = 0;

let currentSongData;
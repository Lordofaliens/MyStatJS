const audioElement = document.querySelector("audio");

const audioTracks = ["sound.wav", "sound2.wav"];
let currentTrackIndex = 0;

audioElement.src = audioTracks[currentTrackIndex];

//buttons
const playButton = document.querySelector("#play");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

const songName = document.querySelector("#songName");

const renderSongName = () => {
  songName.textContent = audioTracks[currentTrackIndex].split(".")[0];
};

renderSongName();

playButton.onclick = (e) => {
  audioElement.paused ? audioElement.play() : audioElement.pause();
  e.target.textContent = audioElement.paused ? "Play" : "Stop";
  console.log(audioElement.duration, "DURATION");
};

prevButton.onclick = () => {
  currentTrackIndex--;

  if (audioTracks[currentTrackIndex]) {
    audioElement.src = audioTracks[currentTrackIndex];
  } else {
    audioElement.src = audioTracks.at(-1);
    currentTrackIndex = audioTracks.length - 1;
  }
  audioElement.play();
  renderSongName();
};

nextButton.onclick = () => {
  currentTrackIndex++;

  if (audioTracks[currentTrackIndex]) {
    audioElement.src = audioTracks[currentTrackIndex];
  } else {
    audioElement.src = audioTracks[0];
    currentTrackIndex = 0;
  }
  audioElement.play();
  renderSongName();
};

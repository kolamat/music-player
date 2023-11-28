document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  playBtn.addEventListener("click", () => {
    audio.play();
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
});

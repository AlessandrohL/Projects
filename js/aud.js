function tooglePlay(musicBtn, audio, icon) {
  const d = document;
  
  d.addEventListener("click", e => {
    if(e.target.matches(musicBtn) || e.target.matches(".icon-play")) {
      if(audio.paused && icon.classList.contains("fa-play")) {
        audio.play();
        icon.classList.replace("fa-play", "fa-pause");
      } else {
        audio.pause();
        icon.classList.replace("fa-pause", "fa-play");
      }
    }
  })
}

export { tooglePlay };

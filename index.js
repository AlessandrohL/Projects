import hamburgerMenu from "./js/menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
})


const $openTab = d.querySelector("#prueba");

$openTab.addEventListener("click", e => {
  window.open('https://open.spotify.com/album/3i4nU0OIi7gMmXDEhG9ZRt', '_blank');
})
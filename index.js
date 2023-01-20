import hamburgerMenu from "./js/menu.js";
import { tooglePlay } from "./js/aud.js";

const d = document;
const $icon = d.querySelector(".fa-play");
const $audio = d.querySelector('audio');

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  tooglePlay(".music-btn", $audio, $icon);

})


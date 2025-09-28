"use strict";

function acceptCookies() {
  document.cookie = "cookiesAccepted=true; path=/";
  var e = document.getElementById("cookies");
  e.classList.add("animate__backOutUp"), setTimeout(function () {
    e.style.display = "none";
  }, 400);
}

var btn = document.getElementById("acceptCookiesBtn");
btn && (btn.onclick = acceptCookies);
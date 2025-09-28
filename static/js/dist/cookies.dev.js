"use strict";

function acceptCookies() {
  document.cookie = "cookiesAccepted=true; path=/";
  var cookies = document.getElementById("cookies");
  cookies.classList.add("animate__backOutUp");
  setTimeout(function () {
    cookies.style.display = "none";
  }, 400);
}

var btn = document.getElementById("acceptCookiesBtn");
if (btn) btn.onclick = acceptCookies;
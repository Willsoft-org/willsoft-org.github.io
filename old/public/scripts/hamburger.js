
const hamburgerBtn = document.getElementById("navigationHamburger");

function toggleDropdown() {
	document.getElementById("hamburgerDropdown").hidden = hamburgerBtn.classList.contains("is-active");
	hamburgerBtn.classList.toggle("is-active");
}

hamburgerBtn.addEventListener("click", toggleDropdown);

function acceptCookies() {
	document.cookie = "cookiesAccepted=true; path=/";
	const cookies = document.getElementById("cookies");
	cookies.classList.add("animate__backOutUp");
	setTimeout(() => {
		cookies.style.display = "none";
	}, 400);
}

const btn = document.getElementById("acceptCookiesBtn")
if (btn) btn.onclick = acceptCookies;
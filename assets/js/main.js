// A function that replaces all external links with a target="_blank" attribute on DOM load
function externalLinks() {
	const a = document.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		if (a[i].getAttribute("href") && a[i].hostname !== location.hostname)
			a[i].target = "_blank";
	}
}

document.addEventListener("DOMContentLoaded", externalLinks);

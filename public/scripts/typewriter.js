// window.onload = LoadTypewriters;
document.addEventListener("DOMContentLoaded", LoadTypewriters);

let runTypewriters = true;

function LoadTypewriters() {
	runTypewriters = true;
	const typewriters = document.getElementsByClassName("typewriter");
	for(let i = 0; i < typewriters.length; i++) {
		const writer = typewriters[i];
		writer.innerHTML = "";
		const texts = eval(writer.getAttribute("texts"));
		const _in = Number.parseFloat(writer.getAttribute("in")) ?? 40;			// Speed to print characters
		const _out = Number.parseFloat(writer.getAttribute("out")) ?? 80;		// Speed to erase characters
		const _hold = Number.parseFloat(writer.getAttribute("hold")) ?? 1000;	// Time to wait after writing a sentence
		const _wait = Number.parseFloat(writer.getAttribute("wait")) ?? 1000;	// Time to wait before writing a sentence
		const _noise = Number.parseFloat(writer.getAttribute("noise")) ?? 20;	// Random extra time between keystrokes to remove or print new chracters
		const _offset = Number.parseFloat(writer.getAttribute("offset")) ?? 0;	// Time to wait before starting to write the first sentence
		setTimeout(() => Typewriter(writer, texts, _in, _out, _hold, _wait, _noise), _offset);
	}
}

function StopTypewriters() {
	runTypewriters = false;
}

function Typewriter(element, texts, _in, _out, _hold, _wait, _noise, _direction = 1, _textIndex = 0, _characterIndex = 0) {
	let timeout = (_direction == 1 ? _out : _in) + (_noise * Math.random());
	_characterIndex += _direction;
	if (_direction == 1) {
		// out (print)
		if (!element.classList.contains("typing")) element.classList.add("typing");

		if (_characterIndex >= texts[_textIndex].length + 1) {
			if (element.classList.contains("typing")) element.classList.remove("typing");

			timeout = _hold;
			_direction = -1;
		}
		else {
			const c = texts[_textIndex][_characterIndex - 1];
			element.innerHTML += c == " " ? "&nbsp;" : c;
		}
	}
	else if (_direction == -1) {
		// in (erase)
		if (!element.classList.contains("typing")) element.classList.add("typing");

		const nxt = (_textIndex + 1) % texts.length;
		if (_characterIndex <= 0 || texts[nxt].slice(0, _characterIndex) == texts[_textIndex].slice(0, _characterIndex)) {
			if (element.classList.contains("typing")) element.classList.remove("typing");

			timeout = _wait;
			_direction = 1;
			_characterIndex = _characterIndex < 0 ? 0 : _characterIndex;
			_textIndex = nxt;
		}
		else {
			element.innerText = element.innerText.slice(0,-1);
		}
	}

	if (runTypewriters)
		setTimeout(() => Typewriter(element, texts, _in, _out, _hold, _wait, _noise, _direction, _textIndex, _characterIndex), timeout);
}
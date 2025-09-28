+++
title = "Installation"
date = 2024-10-20T15:12:37+02:00
+++

# Install Lento

<br/>

<div class="download-options" style="text-align: center;">
	<button id="win64" class="ui button positive">Windows x64</button>
	<button id="win32" class="ui button positive">Windows x86</button>
	<button id="mac" class="ui button positive">Mac OS</button>
	<button id="linux" class="ui button positive">Linux</button>
	<br><br>
	<p>
		Download and install the latest stable release of the Lento toolchain for your OS.<br/>
		Current version: <b>not released yet</b>.
	</p>
</div>
<br><br><br>

There are also a couple of different alternatives when downloading and installing the Lento toolchain on supported platforms.

| Toolchain                                                                                                                                                                                                                                                                                                                                                                              | Download                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <h3>Minimal</h3>Just the lento compiler, and build tools are installed globally on your system. Minimal installers provide centrally the LC compiler and the tools for installing packages. Some may install further build tools (i.e. for parsing and lexing) as well. Only the core libraries necessary for each platform are included.                                              | [Windows](#), [Linux](#), [OSX](#), [Source](https://github.com/lento-lang/Lento) |
| <h3>Platform</h3>Installs the lento compiler, the lento REPL interpreter, the standard library and some other tools globally on your system. Minimal installers provide centrally the LC compiler and the tools for installing packages. Some may install further build tools (i.e. for parsing and lexing) as well. Only the core libraries necessary for each platform are included. | [Windows](#), [Linux](#), [OSX](#), [Source](https://github.com/lento-lang/Lento) |
| <h3>Full</h3>Installs the lento compiler, the lento REPL interpreter, the standard library and some other tools globally on your system. Minimal installers provide centrally the LC compiler and the tools for installing packages. Some may install further build tools (i.e. for parsing and lexing) as well. Only the core libraries necessary for each platform are included.     | [Windows](#), [Linux](#), [OSX](#), [Source](https://github.com/lento-lang/Lento) |

<style>
    /* Nice table styling */
	table {
		border-collapse: collapse;
		width: 100%;
	}

	th, td {
		text-align: left;
		padding: 12px !important;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	th {
		background-color: #4CAF50;
		color: white;
	}
</style>

<script>
	document.addEventListener("DOMContentLoaded", function() {
		var os = navigator.platform.toLowerCase();
		var buttons = [
			document.getElementById("win64"),
			document.getElementById("win32"),
			document.getElementById("mac"),
			document.getElementById("linux")
		];

		function highlight(button) {
			button.classList.add("pink-gradient");
			button.classList.remove("positive");
			button.classList.remove("button");
			button.classList.remove("ui");
			button.classList.add("big");
			button.classList.add("btn");
		}

		if (os.includes("win")) {
			highlight(buttons[0]);
		} else if (os.includes("mac")) {
			highlight(buttons[2]);
		} else if (os.includes("linux")) {
			highlight(buttons[3]);
		}
	});
</script>

<?php

function navElement() {
	?>
<nav>
	<div class="container row">
		<div class="left flex row w100">
			<button id="navigationHamburger" class="hamburger hamburger--squeeze" type="button">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
			<div id="navigationLogo">
				<a href="/"><img class="logo-image" src="assets/logo_small.png"></a>
			</div>
			<ul id="navigationLinks" class="links align-center">
				<li><a href="services.php">Services</a></li>
				<li><a href="projects.php">Projects</a></li>
				<li><a href="products.php">Products</a></li>
				<li><a href="open-source.php">Open-source</a></li>
				<li><a href="about.php">About</a></li>
				<li><a href="contact.php">Contact</a></li>
			</ul>
		</div>
		<div class="right flex row">
		</div>
	</div>
</nav>
<?php
}

function hamburgerDropdownElement() {
	?>
<div id="hamburgerDropdown" hidden>
	<div class="container">
		<ul class="links align-center column">
			<li><a href="services.php">Services</a></li>
			<li><a href="projects.php">Projects</a></li>
			<li><a href="products.php">Products</a></li>
			<li><a href="open-source.php">Open-source</a></li>
			<li><a href="about.php">About</a></li>
			<li><a href="contact.php">Contact</a></li>
		</ul>
	</div>
</div>
<?php
}
<?php
require_once("cookie.php");

function navElement($currentPage) {
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
				<li><a href="services.php"
						class="<?php echo $currentPage == "Services" ? "selected" : ""; ?>">Services</a>
				</li>
				<li><a href="projects.php"
						class="<?php echo $currentPage == "Projects" ? "selected" : ""; ?>">Projects</a>
				</li>
				<li><a href="products.php"
						class="<?php echo $currentPage == "Products" ? "selected" : ""; ?>">Products</a>
				</li>
				<li><a href="open-source.php"
						class="<?php echo $currentPage == "Open-Source" ? "selected" : ""; ?>">Open-Source</a></li>
				<li><a href="about.php" class="<?php echo $currentPage == "About" ? "selected" : ""; ?>">About</a></li>
				<li><a href="contact.php" class="<?php echo $currentPage == "Contact" ? "selected" : ""; ?>">Contact</a>
				</li>
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
			<li><a href="open-source.php">Open-Source</a></li>
			<li><a href="about.php">About</a></li>
			<li><a href="contact.php">Contact</a></li>
		</ul>
	</div>
</div>
<?php
}

function headerElement($currentPage) {
	?>
<header style="position: fixed">
	<?php
	 	if (!isset($_COOKIE["cookiesAccepted"]) || $_COOKIE["cookiesAccepted"] != "true") { cookiesElement(); }
		navElement($currentPage);
		hamburgerDropdownElement(); // Initially hidden
	?>
</header>
<!-- The element below is hidden an only used for emulating the height of the actual fixed header above. -->
<header style="visibility: collapse; opacity: 0">
	<?php
		navElement("");
	?>
</header>
<?php
}
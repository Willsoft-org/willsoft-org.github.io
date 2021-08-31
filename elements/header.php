<?php
require_once("cookie.php");
require_once("nav.php");

function headerElement() {
	?>
<header style="position: fixed">
	<?php
	 	if (!isset($_COOKIE["cookiesAccepted"]) || $_COOKIE["cookiesAccepted"] != "true") { cookiesElement(); }
		navElement();
	?>
</header>
<!-- The element below is hidden an only used for emulating the height of the actual fixed header above. -->
<header style="visibility: collapse; opacity: 0">
	<?php
		navElement();
	?>
</header>
<?php
}
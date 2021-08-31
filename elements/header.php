<?php
require_once("cookie.php");
require_once("nav.php");

function headerElement() {
	?>
<header>
	<?php
	 	if (true || !isset($_COOKIE["cookiesAccepted"]) || $_COOKIE["cookiesAccepted"] != "true") { cookiesElement(); }
		navElement();
	?>
</header>
<?php
}
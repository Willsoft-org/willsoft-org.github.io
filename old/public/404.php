<?php
	require_once('../src/head.php');
	require_once('../src/header.php');
	require_once('../src/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("404"); ?>

<style>
main {
	background: url(<?php
 $errorImages=[ "astronaut.png",
		"computer.jpg",
		"cup.png",
		"desert.webp",
		"google.jpg",
		"leaves.png",
		"robot1.png",
		"robot2.png",
		"robot3.png",
		"robot4.png",
		"sad.png"];
	echo "assets/404/". $errorImages[array_rand($errorImages)];
	?>),
	#ffffffed;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: right;
	background-blend-mode: soft-light;
}
</style>

<body>
	<?php headerElement("404"); ?>
	<main class="container align-center pt100 pb150">
		<h1 class="c-heading-1">404</h1>
		<h1 class="c-heading-3">We are sorry, the page you requested cannot be found.</h1>
		<h3 class="c-paragraph-1">The URL may be misspelled or the page you're looking for is no longer available.</h3>
	</main>
	<?php footerElement(); ?>
</body>
<?php require('../src/scripts.php'); ?>

</html>
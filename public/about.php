<?php
	require_once('../src/head.php');
	require_once('../src/header.php');
	require_once('../src/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("About"); ?>

<body>
	<?php headerElement("About"); ?>
	<div class="hero about">
		<div class="container hero-content">
			<h1 class="hero-title">About Us</h1> <!-- Welcome to the Home Page -->
			<p class="hero-lead">
				Company and Development Team
			</p>
		</div>
	</div>
	<main class="container">
		<!-- A landing page for a software consulting company. -->
		<h1>Not much here</h1>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde totam magnam tempore minima dignissimos nam
			iste, eius accusantium, impedit ipsa error beatae id amet temporibus labore ipsum explicabo, debitis
			ratione!
		</p>
	</main>
	<?php footerElement(); ?>
</body>
<?php require('../src/scripts.php'); ?>

</html>
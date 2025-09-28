<?php
	require_once('../src/head.php');
	require_once('../src/header.php');
	require_once('../src/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("Products"); ?>

<body>
	<?php headerElement("Products"); ?>
	<div class="hero products">
		<div class="container hero-content hero-content-small">
			<h1 class="hero-title">Products</h1> <!-- Welcome to the Home Page -->
			<p class="hero-lead">
				Solutions and SaaS Products
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
<?php
	require_once('elements/head.php');
	require_once('elements/header.php');
	require_once('elements/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("Home"); ?>

<body>
	<?php headerElement(); ?>
	<div class="hero">
		test
	</div>
	<main class="container">
		<!-- A landing page for a software consulting company. -->
		<h1 class="willsoft">Willso<span>ft</span></h1>
		<p>
			We are a software consulting company. We provide software development services to small and medium sized
			businesses.
			We specialize in web development, mobile development, and software consulting.
		</p>
	</main>
	<?php footerElement(); ?>
</body>
<?php require('elements/scripts.php'); ?>

</html>
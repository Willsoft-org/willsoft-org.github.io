<?php
	require_once('../elements/head.php');
	require_once('../elements/header.php');
	require_once('../elements/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("Home"); ?>

<body>
	<?php headerElement(); ?>
	<div class="hero tech-bg">
		<div class="container hero-content">
			<h1 class="hero-title">Software</h1> <!-- Welcome to the Home Page -->
			<p class="hero-lead">
				Cross-platform, Customized<br /> and Tailored High-end products.
			</p>
			<p class="center m0">
				<a class="btn btn-white btn-lg btn-scale" href="/service-guide">Get Started</a>
				<a class="btn btn-purple btn-lg btn-scale btn-normal-weight" href="/services">All services</a>
			</p>
			<p>
				The IT company to build all your apps and websites with.
			</p>
		</div>
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
<?php require('../elements/scripts.php'); ?>

</html>
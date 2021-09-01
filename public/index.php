<?php
	require_once('../src/head.php');
	require_once('../src/header.php');
	require_once('../src/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("Home"); ?>

<body>
	<?php headerElement(); ?>
	<div class="hero landing">
		<div class="container hero-content">
			<h1 class="hero-title">Software</h1> <!-- Welcome to the Home Page -->
			<p class="hero-lead">
				Cross-platform, Customized<br /> and Tailored High-end IT products
			</p>
			<p class="center m0">
				<a class="btn btn-white btn-lg btn-scale pulse" href="/service-guide.php">Get Started</a>
				<a class="btn btn-purple btn-lg btn-scale btn-normal-weight pulse" href="/services.php">All services</a>
			</p>
			<p>
				The IT company to build all your apps and websites.
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

		<h3>
			<code style="color: #395">
			// We <span class="typewriter" texts="[
				'write open-source software',
				'design static websites',
				'build full-stack web apps',
				'build native desktop apps',
				'build mobile apps',
				'build API:s',
				'build secure systems',
				'write robust software',
				'write scalable code',
				'develop embedded systems',
				'work with relational databases',
				'work with no-SQL databases',
				'make PC and mobile games',
				'are a team of talented programmers',
				'can make all of your ideas come true',
				'can build whatever you want',
				]" in="30" out="60" hold="1800" wait="500" noise="70" offset="500"></span>
			<br>
			// <span style="color: #29d; font-style: italic">TODO:</span> Implement features, write code and build software</code>
		</h3>
		<br>
	</main>
	<?php footerElement(); ?>
</body>
<?php require('../src/scripts.php'); ?>

</html>
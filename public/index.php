<?php
	require_once('../src/head.php');
	require_once('../src/header.php');
	require_once('../src/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("Home"); ?>

<body>
	<?php headerElement("Home"); ?>
	<div class="hero landing">
		<div class="container hero-content">
			<h1 class="hero-title">Software</h1> <!-- Welcome to the Home Page -->
			<p class="hero-lead">
				<?php
					// Cross-platform, Customized <br> and Tailored High-end IT products
					// Software Consulting and Customized <br> High-end IT Product Development
				?>
				IT Consulting and Development
			</p>
			<p class="center m0">
				<a class="btn btn-white btn-lg btn-scale pulse" href="/service-guide.php">Get Started</a>
				<a class="btn btn-purple btn-lg btn-scale btn-normal-weight pulse" href="/services.php">Our Services</a>
			</p>
			<br>
			<p>
				The IT company to build all your apps and websites with.
			</p>
		</div>
	</div>
	<main class="container">
		<!-- A landing page for a software consulting company. -->
		<h1 class="willsoft">Welcome to Willso<span>ft</span></h1>
		<p>
			We are a software consulting company. We provide software development services to small and medium sized
			businesses. We specialize in web development, mobile development, and software consulting.

			<br>
			<br>

			At Willsoft, we excel as a premier software consulting firm, offering tailored development solutions to small and medium-sized enterprises.
			Our expertise encompasses web and mobile development, fortified by strategic software consulting, enabling businesses to transform their digital landscape.

			<br>
			<br>

			We are a team of highly skilled software developers, designers, and consultants who are passionate about what we do.
			We are committed to providing our clients with the best possible service, and we pride ourselves on our ability to deliver high-quality work on time and within budget.
			Our goal is to help you succeed by providing you with the tools you need to grow your business.
			We work closely with our clients to understand their needs and develop solutions that will help them achieve their goals.
			Whether you are looking for a new website or mobile app, we can help!
			Contact us today for more information about how we can help you grow your business!

			<br>
			<br>

			As a distinguished IT solutions provider, Willsoft delivers comprehensive services in software consulting, cybersecurity, and customized product development.
			We pride ourselves on crafting innovative Software-as-a-Service (SaaS) solutions, designed to empower small and medium-sized enterprises,
			fortifying their digital presence while ensuring stringent cybersecurity measures.
		</p>

		<h3>
			<code style="color: #395">
			// We <span class="typewriter" texts="[
				'design the future 🚀',
				'design and build websites',
				'design software systems and architectures',
				'build full-stack web apps',
				'build native desktop apps',
				'build mobile apps',
				'build REST API:s',
				'build secure systems',
				'write robust software',
				'write scalable code',
				'write open-source software',
				'develop embedded systems',
				'develop new technologies',
				'work with relational databases',
				'work with no-SQL databases',
				'make PC and mobile games',
				'are a team of talented programmers',
				'can make all of your ideas come true',
				'can build whatever you want',
				]" in="20" out="40" hold="1800" wait="500" noise="70" offset="500"></span>
			<br>
			// <span style="color: #29d; font-style: italic">TODO:</span> Implement features, write code and build software</code>
		</h3>
		<br>
	</main>
	<?php footerElement(); ?>
</body>
<?php require('../src/scripts.php'); ?>

</html>
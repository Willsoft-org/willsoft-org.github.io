<?php
require_once('../src/head.php');
require_once('../src/header.php');
require_once('../src/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("Services"); ?>

<body>
	<?php headerElement("Services"); ?>
	<div class="hero services">
		<div class="container hero-content hero-content-small">
			<h1 class="hero-title">Services</h1> <!-- Welcome to the Home Page -->
			<p class="hero-lead">
				Software, Web, Desktop,<br>
				Mobile Development and more
			</p>
		</div>
	</div>
	<main class="container">
		<h1>Our Services</h1>
		<p>
			With a focus on advanced technology and personalized service, we aim to simplify your business processes,
			enhance your online presence.
			<b>Let us help you bring your ideas to life.</b>

			<br>
			<br>

			Our comprehensive range of services includes:
			<?php
			// software development, system integration, web design, consulting, IT solutions, cybersecurity, customized products, SaaS, and education.
			?>
		</p>

		<div class="split-container">
			<div class="content-section">
				<h2>Consulting</h2>
				<p>
					We provide IT consulting services to help you make the right decisions for your business.
					Leverage our industry knowledge and experience to steer your IT strategy in the right direction.
					<?php
					// Our team of experts will work with you to understand your needs and develop a plan that meets them.
					// We have experience in a wide range of industries, including healthcare, finance, retail, manufacturing, and more.
					// Whether you need help with a specific project or want to outsource your entire IT department, we can help!
					?>
					Our consulting expertise includes: <b>project management</b>, <b>IT and cybersecurity</b>, <b>machine learning</b>, <b>blockchain</b>, <b>infrastructure</b>, and much more.
				</p>
				<h2>Systems Engineering <?php /* and Architecture Design */ ?></h2>
				<p>
					The right system architecture is critical to the success of your business.
					Making the right decisions about your software products can be challenging, but we're here to help.
					We design tailor-made systems to suit your unique business needs.
				</p>
				<h2>Web Design</h2>
				<p>
					From idea to concept to execution, we create compelling, user-friendly websites that enhance your online presence.
					We design websites that are responsive, mobile-friendly, and SEO optimized.
					Our team of designers and developers will work with you to create a website that meets your needs and exceeds your expectations.
				</p>
			</div>
			<div class="content-section">
				<h2>Software Development</h2>
				<p>
					We build software and IT solutions that are <b>reliable</b>, <b>scalable</b>, and <b>secure</b>.
					Creating innovative solutions tailored to the unique needs of each client.
					By leveraging advanced technology and industry best practices, we build robust and user-friendly software applications, enhancing efficiency, and drive growth.
				</p>
				<h2>System Integration</h2>
				<p>
					We can help integrate all of your software systems to ensure they communicate effectively, reducing your administrative burden.
					Mapping out your business processes and identifying areas for improvement.
				</p>
				<h2>Education</h2>
				<p>
					We offer training and education services to help you get the most out of your technology investments.
					We empower your team with the skills they need to use your technology to its fullest potential.
					<br>
					We also offer <b>online courses and workshops</b> about software development, cybersecurity, and more.
				</p>
			</div>
		</div>
	</main>
	<?php footerElement(); ?>
</body>
<?php require('../src/scripts.php'); ?>

</html>
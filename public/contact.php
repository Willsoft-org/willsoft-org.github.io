<?php
	require_once('../src/head.php');
	require_once('../src/header.php');
	require_once('../src/footer.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php headElement("Contact"); ?>

<body>
	<?php headerElement("Contact"); ?>
	<div class="hero contact">
		<div class="container hero-content">
			<h1 class="hero-title">Contact us</h1> <!-- Welcome to the Home Page -->
			<p class="hero-lead">
				Are you interested in building<br>
				your next project with us?
			</p>
		</div>
	</div>
	<main class="container">
		<?php
			if (isset($_GET['sent']) && isset($_GET['message'])) {
		?>
		<div class="mail-success">
			<p class="c-heading-2"><?php echo $_GET['message']; ?></p>
		</div>
		<style>
		.mail-success {
			background-image: url(assets/contact/check-animation-v2.gif);
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			background-position-y: -50px;
			padding-top: 120px;
			margin-bottom: 40px;
			text-align: center;
		}
		</style>
		<?php
			} else {
		?>
		<h1>We'd love to hear from you!</h1>
		<p>
			Tell us about your ideas or projects you want to involve us in and we will get back to you as soon as
			possible.
			If you have any other questions, comments, or concerns, please fill out the form below.
		</p>
		<br>
		<?php
			if (isset($_GET['failed'])) {
		?>
		<div class="mail-failure">
			<p class="c-paragraph-1">
				It seems like we couldn't send your message. Please try again later.
			</p>
		</div>
		<style>
		.mail-failure {
			text-align: center;
		}

		.mail-failure p {
			color: red;
			font-weight: bold;
		}
		</style>
		<?php
			}
		?>
		<br><br>
		<form action="contact-mail.php" method="post">
			<div class="form-group">
				<label for="first_name" class="form">First Name</label>
				<input type="text" class="form-control form" id="first_name" name="first_name"
					placeholder="Enter your first name" required>
				<label for="last_name" class="form">Last Name</label>
				<input type="text" class="form-control form" id="last_name" name="last_name"
					placeholder="Enter your last name" required>
			</div>
			<div class="form-group">
				<label for="email" class="form">Email</label>
				<input type="email" class="form-control form" id="email" name="email" placeholder="Enter your email"
					required>
			</div>
			<div class="form-group">
				<label for="regarding" class="form">Regarding</label>
				<select name="regarding" id="regarding" class="form" required>
					<option value="" selected disabled>Select an option</option>
					<option value="Hiring">Hiring</option>
					<option value="Project">Project</option>
					<option value="Consulting">Consulting</option>
					<option value="Question">Question</option>
					<option value="Other">Other</option>
				</select>
			</div>
			<div class="form-group">
				<label for="message" class="form">Message</label>
				<textarea class="form-control form" id="message" name="message" rows="3"
					placeholder="Enter your message" required></textarea>
			</div>
			<button type="submit" name="submit" class="form btn btn-primary">Submit</button>
		</form>
		<br><br><br>
		<?php
			}
		?>
	</main>
	<?php footerElement(); ?>
</body>
<?php require('../src/scripts.php'); ?>

</html>
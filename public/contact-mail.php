<?php
$debug = false;
if (isset($_POST['submit'])) {
	$to = "contact@willsoft.org";
	$from = $_POST['email']; // this is the sender's Email address
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$regarding = $_POST['regarding'];
	$subject = "Willsoft contact form";
	$subject2 = "Copy of your Willsoft form submission";
	$safe_message = htmlspecialchars($_POST['message']);
	$message = $first_name . " " . $last_name . " wrote the following (regarding ". $regarding . "):" . "\r\n\r\n" . $safe_message;
	$message2 = "Here is a copy of your message " . $first_name . ".\r\n\r\n" . $safe_message;
	$message = wordwrap($message, 70, "\r\n");
	$message2 = wordwrap($message2, 70, "\r\n");
	$headers = "From: " . $from;
	$headers2 = "From: " . $to;

	if ($debug) {
		echo "To: " . $to . "<br>";
		echo "From: " . $from . "<br>";
		echo "Subject: " . $subject . "<br>";
		echo "Message: " . $message . "<br>";
	}

	$mailSent = mail($to,$subject,$message,$headers);
	if ($debug) { echo "Mail sent to: " . $to . " ? " . $mailSent . "<br>"; }
	$mailSent = $mailSent && mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
	if ($debug) { echo "Mail sent to: " . $from . " ? " . $mailSent . "<br>"; }
	// You can also use header('Location: thank_you.php'); to redirect to another page.
	if (!$debug && $mailSent) {
		header("Location: contact.php?sent&message=".htmlspecialchars("Thank you " . $first_name . ",")."<br>".htmlspecialchars("we will contact you shortly."));
		exit();
	}
}
if (!$debug) {
	header("Location: contact.php?failed");
	exit();
}

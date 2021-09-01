<?php
require_once("cookie.php");
require_once("nav.php");

function headElement($pageTitle) {
	?>

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
	<!-- <link href='https://css.gg/css' rel='stylesheet'> -->
	<!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet"> -->
	<link rel="stylesheet" href="styles/main.css">
	<title>Willsoft | <?php echo $pageTitle; ?></title>
</head>
<?php
}
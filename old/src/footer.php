<?php

function footerElement() {
	$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$actual_link = str_replace("/index.php", "", $actual_link);
	?>
<footer>
	<div class="social">
		<div class="container">
			<div class="follow">
				Follow us on
				<div class="inline-block pt6 pb6">
					<!--<a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>-->
					<!--<a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>-->
					<a href="https://twitter.com/intent/follow?screen_name=Willsoft_" target="_blank"><i class="fab fa-twitter"></i></a>
					<!--<a href="https://www.youtube.com/"><i class="fab fa-youtube-square"></i></a>-->
				</div>
			</div>
			<div class="share">
				Share this page on
				<div class="inline-block pt6 pb6">
					<a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo $actual_link; ?>" target="_blank"><i class="fab fa-linkedin"></i></a>
					<a href="https://twitter.com/intent/tweet?text=<?php echo $actual_link; ?>" target="_blank"><i class="fab fa-twitter"></i></a>
					<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $actual_link; ?>&amp;src=sdkpreparse" target="_blank"><i class="fab fa-facebook"></i></a>
					<a href="fb-messenger://share/?link=<?php echo $actual_link; ?>&app_id=123456789" target="_blank"><i class="fab fa-facebook-messenger"></i></a>
					<a href="https://www.reddit.com/submit?url=<?php echo $actual_link; ?>" target="_blank"><i class="fab fa-reddit"></i></a>
					<!-- <a href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=<?php echo $actual_link; ?>" target="_blank"><i class="fab fa-tumblr"></i></a> -->
					<!--<a href="https://pinterest.com/pin/create/button/?url=<?php echo $actual_link; ?>" target="_blank"><i class="fab fa-pinterest-square"></i></a>-->
					<!-- <a href="https://www.whatsapp.com/send?text=<?php echo $actual_link; ?>" target="_blank"><i class="fab fa-whatsapp"></i></a> -->
					<!-- <a href="https://www.telegram.org/sharer.php?text=<?php echo $actual_link; ?>" target="_blank"><i class="fab fa-telegram-plane"></i></a> -->
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		
	<h2 class="mt28">
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
		</h2>

		<div class="sections">
			<div class="section">
				<div class="heading-4">News</div>
				<ul class="links column">
					<li><a href="">Startup News</a></li>
					<li><a href="">Company news</a></li>
					<li><a href="https://www.linkedin.com/company/willsoft-it/" target="_blank">Willsoft On LinkedIn</a></li>
				</ul>
			</div>
			<div class="section">
				<div class="heading-4">Education and Career</div>
				<ul class="links column">
					<li><a href="">Research</a></li>
					<li><a href="">Our courses</a></li>
					<li><a href="">Careers</a></li>
					<!-- <li><a href="">Work with us</a></li> -->
					<!-- <li><a href="">For students</a></li> -->
					<!-- <li><a href="">Conferences</a></li> -->
					<!-- <li><a href="">Internships</a></li> -->
				</ul>
			</div>
			<div class="section">
				<div class="heading-4">Developers</div>
				<ul class="links column">
					<!-- <li><a href="https://developer.microsoft.com/sv-se/" target="_blank">Developer Center</a></li> -->
					<li><a href="">Tools</a></li>
					<li><a href="">Developer program</a></li>
					<li><a href="" onClick="document.cookie = 'cookiesAccepted=false; path=/'">Disable cookies</a>
					</li>
				</ul>
			</div>
			<div class="section">
				<div class="heading-4">Company</div>
				<ul class="links column">
					<!-- <li><a href="">Privacy at Microsoft</a></li> -->
					<li><a href="/about.php">About Willsoft</a></li>
					<li><a href="">Investors</a></li>
					<li><a href="">Security</a></li>
				</ul>
			</div>
		</div>
	</div>
	<?php
		/*
		<div class="company container">
			<ul class="links row">
				<li><a href="">Terms of use</a></li>
				<li><a href="">Privacy</a></li>
				<li><a href="">Legal</a></li>
				<li><a href="">Advertising</a></li>
				<li><a href="">Cookies</a></li>
				<li><a href="">Trademarks</a></li>
				<li><a href="">Help</a></li>
			</ul>
		</div>
		*/
	?>
	<div class="copyright container">
		&copy; Willsoft Copyright <?php echo date("Y"); ?> - All Rights Reserved.
	</div>
</footer>
<?php
}
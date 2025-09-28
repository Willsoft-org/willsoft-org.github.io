<?php

function cookiesElement() {
	?>
<div id="cookies" class="animate__animated">
	<div class="container row">
		<div class="left">
			<span class="cookie-icon">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 44 44" width="24px" height="24px"
					fill="none" stroke="currentColor">
					<circle cx="22" cy="22" r="20" stroke-width="2"></circle>
					<line x1="22" x2="22" y1="18" y2="33" stroke-width="3"></line>
					<line x1="22" x2="22" y1="12" y2="15" stroke-width="3"></line>
				</svg>
			</span>
			<p class="cookie-text">
				This site uses cookies to improve your experience and for advertising.
				<?php // <a target="_blank" href="https://go.microsoft.com/fwlink/?LinkId=521839">Privacy Statement</a> ?>
			</p>
		</div>
		<div class="right flex row">
			<button id="acceptCookiesBtn">Accept all</button>
			<!--<button>Hantera cookies</button>-->
		</div>
	</div>
</div>
<?php
}
// Mobile navigation scroll behavior
// Hides nav when scrolling down, shows when scrolling up

(function() {
	// Only run on mobile devices (max-width: 860px)
	const isMobile = () => window.innerWidth <= 860;
	
	if (!isMobile()) {
		return;
	}

	const header = document.querySelector('header[style*="position:fixed"]');
	if (!header) {
		return;
	}

	let lastScrollTop = 0;
	let scrollThreshold = 10; // Minimum scroll distance to trigger
	let isScrolling = false;

	function handleScroll() {
		if (isScrolling) return;
		
		isScrolling = true;
		requestAnimationFrame(() => {
			const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
			
			// Don't hide header when at the very top
			if (currentScroll <= 0) {
				header.classList.remove('nav-hidden');
				header.classList.add('nav-visible');
				lastScrollTop = currentScroll;
				isScrolling = false;
				return;
			}
			
			// Always show header when within twice the header height (~200px) from top
			if (currentScroll < 200) {
				header.classList.remove('nav-hidden');
				header.classList.add('nav-visible');
				lastScrollTop = currentScroll;
				isScrolling = false;
				return;
			}
			
			// Check if scroll distance exceeds threshold
			if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
				if (currentScroll > lastScrollTop) {
					// Scrolling down - hide nav
					header.classList.add('nav-hidden');
					header.classList.remove('nav-visible');
				} else {
					// Scrolling up - show nav
					header.classList.remove('nav-hidden');
					header.classList.add('nav-visible');
				}
				lastScrollTop = currentScroll;
			}
			
			isScrolling = false;
		});
	}

	// Add scroll event listener
	window.addEventListener('scroll', handleScroll, { passive: true });

	// Re-check on window resize
	window.addEventListener('resize', () => {
		if (!isMobile()) {
			// Remove classes if resized to desktop
			header.classList.remove('nav-hidden', 'nav-visible');
			window.removeEventListener('scroll', handleScroll);
		}
	});

	// Initialize with visible state
	header.classList.add('nav-visible');
})();

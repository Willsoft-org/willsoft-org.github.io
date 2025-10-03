/**
 * Service Pathways Interactive Timeline
 * Handles click/touch interactions for expanding pathway stages
 */

(function() {
	'use strict';

	// Wait for DOM to be ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initServicePathways);
	} else {
		initServicePathways();
	}

	function initServicePathways() {
		const stages = document.querySelectorAll('.pathway-stage');
		
		if (stages.length === 0) {
			return; // No pathways on this page
		}

		// Function to adjust vertical timeline length on mobile
		function adjustMobileTimeline() {
			const timeline = document.querySelector('.pathways-timeline');
			if (!timeline || window.innerWidth > 900) {
				return; // Not mobile view
			}

			const firstIcon = stages[0]?.querySelector('.stage-icon');
			const lastIcon = stages[stages.length - 1]?.querySelector('.stage-icon');
			
			if (!firstIcon || !lastIcon) return;

			// Get positions relative to timeline
			const timelineRect = timeline.getBoundingClientRect();
			const firstIconRect = firstIcon.getBoundingClientRect();
			const lastIconRect = lastIcon.getBoundingClientRect();

			// Calculate icon centers relative to timeline
			const firstIconCenter = (firstIconRect.top + firstIconRect.height / 2) - timelineRect.top;
			const lastIconCenter = (lastIconRect.top + lastIconRect.height / 2) - timelineRect.top;

			// Create a style element for the dynamic height
			let styleEl = document.getElementById('timeline-dynamic-height');
			if (!styleEl) {
				styleEl = document.createElement('style');
				styleEl.id = 'timeline-dynamic-height';
				document.head.appendChild(styleEl);
			}

			// Set the line to go from first icon center to last icon center
			styleEl.textContent = `
				@media (max-width: 900px) {
					.pathways-timeline::before {
						top: ${firstIconCenter}px !important;
						height: ${lastIconCenter - firstIconCenter}px !important;
					}
				}
			`;
		}

		// Adjust timeline on load and window resize
		adjustMobileTimeline();
		window.addEventListener('resize', adjustMobileTimeline);
		
		// Re-adjust after animations complete
		setTimeout(adjustMobileTimeline, 1000);

		// Add click handlers to each stage
		stages.forEach(function(stage) {
			stage.addEventListener('click', function(e) {
				// Prevent default behavior
				e.preventDefault();
				
				// Toggle active state on clicked stage
				const isActive = this.classList.contains('active');
				
				// Close all stages
				stages.forEach(function(s) {
					s.classList.remove('active');
				});
				
				// If it wasn't active, make it active
				if (!isActive) {
					this.classList.add('active');
				}
			});

			// Add keyboard accessibility
			stage.setAttribute('tabindex', '0');
			stage.setAttribute('role', 'button');
			
			stage.addEventListener('keydown', function(e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					this.click();
				}
			});
		});

		// Close stages when clicking outside
		document.addEventListener('click', function(e) {
			const clickedOutside = !e.target.closest('.pathway-stage');
			if (clickedOutside) {
				stages.forEach(function(stage) {
					stage.classList.remove('active');
				});
			}
		});

		// Animation entrance effect
		const observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
				}
			});
		}, {
			threshold: 0.1
		});

		// Apply entrance animation
		stages.forEach(function(stage, index) {
			stage.style.opacity = '0';
			stage.style.transform = 'translateY(30px)';
			stage.style.transition = 'opacity 0.6s ease ' + (index * 0.15) + 's, transform 0.6s ease ' + (index * 0.15) + 's';
			observer.observe(stage);
		});
	}
})();

// Testimonial carousel functionality
(function() {
    function initTestimonialCarousel() {
        const carousel = document.querySelector('.testimonial-carousel');
        if (!carousel) return;
        
        const items = carousel.querySelectorAll('.testimonial-item');
        const dots = carousel.querySelectorAll('.carousel-dot');
        let currentIndex = 0;
        let autoplayInterval;
        
        function showSlide(index) {
            items.forEach((item, i) => {
                item.classList.remove('active');
                if (dots[i]) dots[i].classList.remove('active');
            });
            
            if (items[index]) {
                items[index].classList.add('active');
                if (dots[index]) dots[index].classList.add('active');
            }
            currentIndex = index;
        }
        
        function nextSlide() {
            const next = (currentIndex + 1) % items.length;
            showSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentIndex - 1 + items.length) % items.length;
            showSlide(prev);
        }
        
        // Navigation buttons
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        
        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });
        
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetAutoplay();
            });
        });
        
        // Autoplay
        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 5000);
        }
        
        function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
        }
        
        // Initialize
        showSlide(0);
        startAutoplay();
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        carousel.addEventListener('mouseleave', startAutoplay);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTestimonialCarousel);
    } else {
        initTestimonialCarousel();
    }
})();

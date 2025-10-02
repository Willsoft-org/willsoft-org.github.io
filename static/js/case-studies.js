// Case Studies Interactive Features

(function() {
  'use strict';

  // Scroll-triggered animations
  function initScrollAnimations() {
    const sections = document.querySelectorAll('[data-scroll-trigger]');
    
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Trigger animations for child elements
          const animatedElements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.style.animation = el.classList.contains('fade-in-up') 
                ? 'fadeInUp 0.6s ease forwards'
                : 'fadeInLeft 0.6s ease forwards';
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // Architecture slider interaction
  function initArchitectureSlider() {
    const slider = document.getElementById('archSlider');
    
    if (!slider) return;

    const beforeDiv = document.querySelector('.architecture-before');
    const afterDiv = document.querySelector('.architecture-after');

    if (!beforeDiv || !afterDiv) return;

    slider.addEventListener('input', function() {
      const value = this.value;
      
      // Crossfade between before and after
      beforeDiv.style.opacity = (100 - value) / 100;
      afterDiv.style.opacity = value / 100;
    });
  }

  // Animated metrics counter
  function initMetricsAnimation() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    if (metricCards.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateMetric(entry.target);
        }
      });
    }, observerOptions);

    metricCards.forEach(card => {
      observer.observe(card);
    });
  }

  function animateMetric(card) {
    const numberElement = card.querySelector('.metric-number');
    if (!numberElement) return;

    const target = parseFloat(numberElement.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const start = 0;
    const startTime = performance.now();

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (target - start) * easeOutQuart;
      
      // Format number with one decimal if it's not a whole number
      if (target % 1 !== 0) {
        numberElement.textContent = current.toFixed(1);
      } else {
        numberElement.textContent = Math.floor(current);
      }

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        // Ensure final value is exact
        if (target % 1 !== 0) {
          numberElement.textContent = target.toFixed(1);
        } else {
          numberElement.textContent = target;
        }
      }
    }

    requestAnimationFrame(updateNumber);
  }

  // Card hover effects
  function initCardEffects() {
    const cards = document.querySelectorAll('.case-study-card');
    
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        // If clicking on the link, let it navigate
        if (e.target.classList.contains('case-card-link') || e.target.closest('.case-card-link')) {
          return;
        }
        
        // Otherwise, find the link and navigate
        const link = this.querySelector('.case-card-link');
        if (link) {
          window.location.href = link.getAttribute('href');
        }
      });
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 100; // Account for fixed header
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Initialize all features when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initScrollAnimations();
    initArchitectureSlider();
    initMetricsAnimation();
    initCardEffects();
    initSmoothScroll();
  }

})();

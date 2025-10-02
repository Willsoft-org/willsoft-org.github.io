/**
 * Industry Filter Functionality
 */
(function() {
    'use strict';

    // DOM elements
    let filterButtons;
    let resultsInfo;
    let industryCards;
    
    // State
    let currentFilter = 'all';
    
    // Initialize when DOM is ready
    function init() {
        // Get DOM elements
        filterButtons = document.querySelectorAll('.industry-filter-btn');
        resultsInfo = document.getElementById('industries-results-info');
        industryCards = document.querySelectorAll('.industry-card');
        
        if (!filterButtons.length || !industryCards.length) {
            console.warn('Industry filter elements not found');
            return;
        }
        
        // Set up event listeners
        setupEventListeners();
        
        // Initial filter
        updateResults();
    }
    
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', handleFilterClick);
        });
    }
    
    function handleFilterClick(e) {
        e.preventDefault();
        
        const industry = e.target.getAttribute('data-industry');
        if (!industry) return;
        
        // Update button states
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentFilter = industry;
        
        updateResults();
    }
    
    function updateResults() {
        let visibleCount = 0;
        
        industryCards.forEach(card => {
            const industry = card.getAttribute('data-industry');
            const isVisible = currentFilter === 'all' || industry === currentFilter;
            
            if (isVisible) {
                card.style.display = 'block';
                // Add fade-in animation
                card.style.opacity = '0';
                card.style.animation = 'fadeIn 0.5s ease forwards';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        updateResultsInfo(visibleCount, industryCards.length);
    }
    
    function updateResultsInfo(visible, total) {
        if (!resultsInfo) return;
        
        if (currentFilter === 'all') {
            resultsInfo.textContent = `Showing all ${total} industries`;
        } else {
            resultsInfo.textContent = `Showing ${visible} of ${total} industries`;
        }
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

/**
 * Course Search and Filter Functionality
 */
(function() {
    'use strict';

    // DOM elements
    let searchInput;
    let filterButtons;
    let clearButton;
    let resultsInfo;
    let courseCards;
    let courseCategories;
    
    // State
    let currentFilter = 'all';
    let currentSearch = '';
    
    // Initialize when DOM is ready
    function init() {
        // Get DOM elements
        searchInput = document.getElementById('course-search');
        filterButtons = document.querySelectorAll('.filter-btn');
        clearButton = document.getElementById('clear-filters');
        resultsInfo = document.getElementById('results-info');
        courseCards = document.querySelectorAll('.course-card');
        courseCategories = document.querySelectorAll('.course-category');
        
        if (!searchInput || !filterButtons.length || !courseCards.length) {
            console.warn('Course filter elements not found');
            return;
        }
        
        // Set up event listeners
        setupEventListeners();
        
        // Initial filter
        updateResults();
    }
    
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener('input', handleSearch);
        
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', handleFilterClick);
        });
        
        // Clear button
        if (clearButton) {
            clearButton.addEventListener('click', handleClear);
        }
    }
    
    function handleSearch(e) {
        currentSearch = e.target.value.toLowerCase().trim();
        updateResults();
    }
    
    function handleFilterClick(e) {
        const category = e.target.getAttribute('data-category');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentFilter = category;
        updateResults();
    }
    
    function handleClear() {
        // Reset search
        searchInput.value = '';
        currentSearch = '';
        
        // Reset filter to 'all'
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
        currentFilter = 'all';
        
        updateResults();
    }
    
    function updateResults() {
        let visibleCount = 0;
        let totalCount = courseCards.length;
        
        // Process each course card
        courseCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();
            
            // Check category filter
            const categoryMatch = currentFilter === 'all' || cardCategory === currentFilter;
            
            // Check search filter
            const searchMatch = !currentSearch || 
                cardTitle.includes(currentSearch) || 
                cardDescription.includes(currentSearch);
            
            // Show/hide card
            if (categoryMatch && searchMatch) {
                card.classList.remove('hidden');
                card.classList.add('highlighted');
                visibleCount++;
                
                // Remove highlight after a delay if there's no search
                if (!currentSearch) {
                    setTimeout(() => card.classList.remove('highlighted'), 300);
                }
            } else {
                card.classList.add('hidden');
                card.classList.remove('highlighted');
            }
        });
        
        // Show/hide categories based on visible cards
        courseCategories.forEach(category => {
            const categoryName = category.getAttribute('data-category');
            const cardsInCategory = category.querySelectorAll('.course-card:not(.hidden)');
            
            // Show category if it has visible cards or if 'all' filter is active
            if (currentFilter === 'all') {
                category.classList.toggle('hidden', cardsInCategory.length === 0);
            } else {
                category.classList.toggle('hidden', categoryName !== currentFilter);
            }
        });
        
        // Update results info
        updateResultsInfo(visibleCount, totalCount);
    }
    
    function updateResultsInfo(visible, total) {
        if (!resultsInfo) return;
        
        let message = '';
        
        if (currentSearch && currentFilter !== 'all') {
            message = `Showing ${visible} of ${total} courses matching "${currentSearch}" in ${getFilterDisplayName(currentFilter)}`;
        } else if (currentSearch) {
            message = `Showing ${visible} of ${total} courses matching "${currentSearch}"`;
        } else if (currentFilter !== 'all') {
            message = `Showing ${visible} courses in ${getFilterDisplayName(currentFilter)}`;
        } else {
            message = `Showing all ${total} courses`;
        }
        
        resultsInfo.textContent = message;
    }
    
    function getFilterDisplayName(filter) {
        const filterMap = {
            'foundations': 'Foundations',
            'advanced': 'Advanced',
            'systems': 'Systems/Security',
            'research': 'Extensions/Research'
        };
        
        return filterMap[filter] || filter;
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
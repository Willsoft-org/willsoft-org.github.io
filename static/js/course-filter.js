/**
 * Course Search and Filter Functionality
 */
(function() {
    'use strict';

    // DOM elements
    let searchInput;
    let filterButtons;
    let fieldFilterButtons;
    let clearButton;
    let resultsInfo;
    let courseCards;
    let courseCategories;
    
    // State
    let currentFilter = 'all';
    let currentFieldFilter = 'all';
    let currentSearch = '';
    
    // Initialize when DOM is ready
    function init() {
        // Get DOM elements
        searchInput = document.getElementById('course-search');
        filterButtons = document.querySelectorAll('.filter-btn');
        fieldFilterButtons = document.querySelectorAll('.field-filter-btn');
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
        
        // Category filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', handleFilterClick);
        });
        
        // Field filter buttons
        fieldFilterButtons.forEach(button => {
            button.addEventListener('click', handleFieldFilterClick);
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
        e.preventDefault();
        
        const category = e.target.getAttribute('data-category');
        if (!category) return;
        
        // Update button states
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentFilter = category;
        
        updateResults();
    }
    
    function handleFieldFilterClick(e) {
        e.preventDefault();
        
        const field = e.target.getAttribute('data-field');
        if (!field) return;
        
        // Update button states
        fieldFilterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentFieldFilter = field;
        
        updateResults();
    }
    
    function handleClear() {
        // Reset search
        if (searchInput) {
            searchInput.value = '';
            currentSearch = '';
        }
        
        // Reset category filter
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === 'all') {
                btn.classList.add('active');
            }
        });
        currentFilter = 'all';
        
        // Reset field filter
        fieldFilterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-field') === 'all') {
                btn.classList.add('active');
            }
        });
        currentFieldFilter = 'all';
        
        updateResults();
    }
    
    function updateResults() {
        let visibleCount = 0;
        let totalCount = courseCards.length;
        
        // Process each course card
        courseCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardField = card.getAttribute('data-field');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();
            
            // Get field name for search
            const fieldStripe = card.querySelector('.course-field-stripe .field-name');
            const fieldName = fieldStripe ? fieldStripe.textContent.toLowerCase() : '';
            
            // Check category filter
            const categoryMatch = currentFilter === 'all' || cardCategory === currentFilter;
            
            // Check field filter
            const fieldMatch = currentFieldFilter === 'all' || cardField === currentFieldFilter;
            
            // Check search filter (including field names)
            const searchMatch = !currentSearch || 
                cardTitle.includes(currentSearch) || 
                cardDescription.includes(currentSearch) ||
                fieldName.includes(currentSearch);
            
            // Show/hide card
            if (categoryMatch && fieldMatch && searchMatch) {
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
        if (resultsInfo) {
            let message = '';
            if (visible === total) {
                message = `Showing all ${total} courses`;
            } else if (visible === 0) {
                message = 'No courses found';
            } else {
                message = `Showing ${visible} of ${total} courses`;
                
                // Add filter context
                const activeFilters = [];
                if (currentFilter !== 'all') {
                    activeFilters.push(`category: ${getFilterDisplayName(currentFilter)}`);
                }
                if (currentFieldFilter !== 'all') {
                    activeFilters.push(`field: ${getFieldDisplayName(currentFieldFilter)}`);
                }
                if (currentSearch) {
                    activeFilters.push(`search: "${currentSearch}"`);
                }
                
                if (activeFilters.length > 0) {
                    message += ` (${activeFilters.join(', ')})`;
                }
            }
            resultsInfo.textContent = message;
        }
    }
    
    function getFilterDisplayName(filter) {
        const button = document.querySelector(`[data-category="${filter}"]`);
        return button ? button.textContent.replace(/[📚🚀🔍🔬]\s*/, '') : filter;
    }
    
    function getFieldDisplayName(field) {
        const button = document.querySelector(`[data-field="${field}"]`);
        return button ? button.textContent : field;
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
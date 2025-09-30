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
    let courseLevels;
    
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
        courseLevels = document.querySelectorAll('.course-level');
        
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
        
        // Level filter buttons
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
        
        const level = e.target.getAttribute('data-level');
        if (!level) return;
        
        // Update button states
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentFilter = level;
        
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
        
        // Reset level filter
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-level') === 'all') {
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
            const cardLevel = card.getAttribute('data-level');
            const cardField = card.getAttribute('data-field');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();
            
            // Get field name for search
            const fieldStripe = card.querySelector('.course-field-stripe .field-name');
            const fieldName = fieldStripe ? fieldStripe.textContent.toLowerCase() : '';
            
            // Check level filter
            const levelMatch = currentFilter === 'all' || cardLevel === currentFilter;
            
            // Check field filter
            const fieldMatch = currentFieldFilter === 'all' || cardField === currentFieldFilter;
            
            // Check search filter (including field names)
            const searchMatch = !currentSearch || 
                cardTitle.includes(currentSearch) || 
                cardDescription.includes(currentSearch) ||
                fieldName.includes(currentSearch);
            
            // Show/hide card
            if (levelMatch && fieldMatch && searchMatch) {
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
        
        // Show/hide levels based on visible cards
        courseLevels.forEach(level => {
            const levelName = level.getAttribute('data-level');
            const cardsInLevel = level.querySelectorAll('.course-card:not(.hidden)');
            
            // Show level if it has visible cards or if 'all' filter is active
            if (currentFilter === 'all') {
                level.classList.toggle('hidden', cardsInLevel.length === 0);
            } else {
                level.classList.toggle('hidden', levelName !== currentFilter);
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
                    activeFilters.push(`level: ${getFilterDisplayName(currentFilter)}`);
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
        const button = document.querySelector(`[data-level="${filter}"]`);
        return button ? button.textContent : filter;
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
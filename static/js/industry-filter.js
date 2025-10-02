/**
 * Industry Tabs Functionality
 */
(function() {
    'use strict';

    // DOM elements
    let tabs;
    let panels;
    
    // Initialize when DOM is ready
    function init() {
        // Get DOM elements
        tabs = document.querySelectorAll('.industry-tab');
        panels = document.querySelectorAll('.industry-panel');
        
        if (!tabs.length || !panels.length) {
            console.warn('Industry tab elements not found');
            return;
        }
        
        // Set up event listeners
        setupEventListeners();
    }
    
    function setupEventListeners() {
        // Tab buttons
        tabs.forEach(tab => {
            tab.addEventListener('click', handleTabClick);
        });
    }
    
    function handleTabClick(e) {
        e.preventDefault();
        
        const targetIndustry = e.currentTarget.getAttribute('data-industry');
        if (!targetIndustry) return;
        
        // Update tab states
        tabs.forEach(tab => tab.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        // Update panel visibility with fade effect
        panels.forEach(panel => {
            const panelIndustry = panel.getAttribute('data-industry');
            
            if (panelIndustry === targetIndustry) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

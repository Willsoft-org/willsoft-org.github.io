// Dark mode toggle functionality
(function() {
    const DARK_MODE_CLASS = 'dark-mode';
    const STORAGE_KEY = 'darkMode';
    
    // Get toggle buttons
    const toggleBtn = document.getElementById('darkModeToggle');
    const toggleBtnMobile = document.getElementById('darkModeToggleMobile');
    
    // Check for saved user preference, otherwise check system preference
    function getInitialDarkMode() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
            return saved === 'true';
        }
        // Check system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Apply dark mode
    function setDarkMode(isDark) {
        if (isDark) {
            document.body.classList.add(DARK_MODE_CLASS);
        } else {
            document.body.classList.remove(DARK_MODE_CLASS);
        }
        localStorage.setItem(STORAGE_KEY, isDark);
    }
    
    // Toggle dark mode
    function toggleDarkMode() {
        const isDark = !document.body.classList.contains(DARK_MODE_CLASS);
        setDarkMode(isDark);
    }
    
    // Initialize dark mode on page load
    setDarkMode(getInitialDarkMode());
    
    // Add event listeners
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleDarkMode);
    }
    if (toggleBtnMobile) {
        toggleBtnMobile.addEventListener('click', toggleDarkMode);
    }
})();

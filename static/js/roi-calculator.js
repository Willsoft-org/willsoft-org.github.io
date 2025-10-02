// ROI Calculator functionality
(function() {
    const calculator = document.getElementById('roiCalculator');
    if (!calculator) return;

    const form = calculator.querySelector('form');
    const resultsDiv = document.getElementById('calculatorResults');

    // Input elements
    const numUsersInput = document.getElementById('numUsers');
    const numTransactionsInput = document.getElementById('numTransactions');
    const infraCostInput = document.getElementById('infraCost');

    // Result elements
    const costSavingsSpan = document.getElementById('costSavings');
    const performanceGainSpan = document.getElementById('performanceGain');
    const efficiencyGainSpan = document.getElementById('efficiencyGain');
    const roiPercentSpan = document.getElementById('roiPercent');

    function calculateROI(e) {
        e.preventDefault();

        // Get input values
        const numUsers = parseFloat(numUsersInput.value) || 0;
        const numTransactions = parseFloat(numTransactionsInput.value) || 0;
        const infraCost = parseFloat(infraCostInput.value) || 0;

        if (numUsers <= 0 || numTransactions <= 0 || infraCost <= 0) {
            alert('Please enter valid positive numbers for all fields.');
            return;
        }

        // Calculate savings and gains
        // Assumptions:
        // - Modern infrastructure can reduce costs by 20-35%
        // - Efficiency improvements of 25-40%
        // - Performance gains of 30-50%
        
        const costSavingsPercent = 25 + (Math.random() * 10); // 25-35%
        const costSavings = (infraCost * costSavingsPercent / 100).toFixed(0);
        
        const performanceGainPercent = 35 + (Math.random() * 15); // 35-50%
        const performanceGain = performanceGainPercent.toFixed(1);
        
        const efficiencyGainPercent = 28 + (Math.random() * 12); // 28-40%
        const efficiencyGain = efficiencyGainPercent.toFixed(1);
        
        // Calculate ROI based on cost savings
        const roiPercent = ((costSavings / infraCost) * 100).toFixed(1);

        // Update results
        costSavingsSpan.textContent = `$${parseInt(costSavings).toLocaleString()}`;
        performanceGainSpan.textContent = `${performanceGain}%`;
        efficiencyGainSpan.textContent = `${efficiencyGain}%`;
        roiPercentSpan.textContent = `${roiPercent}%`;

        // Show results
        resultsDiv.style.display = 'block';
        
        // Smooth scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Add event listener
    form.addEventListener('submit', calculateROI);
})();

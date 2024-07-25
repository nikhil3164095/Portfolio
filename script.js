// Dark Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleButton.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Sample Functions for Demo Buttons
function showPredictiveModel() {
    alert('Predictive Model Demo will be implemented here.');
    // Replace with actual implementation or embed code
}

function showDashboard() {
    alert('Interactive Data Dashboard Demo will be implemented here.');
    // Replace with actual implementation or embed code
}

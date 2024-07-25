// Sample Functions for Demo Buttons
function showPredictiveModel() {
    alert('Predictive Model Demo will be implemented here.');
    // Replace with actual implementation or embed code
}

function showDashboard() {
    alert('Interactive Data Dashboard Demo will be implemented here.');
    // Replace with actual implementation or embed code
}

// Popup Functionality
function showPopup(title, description) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Adding Event Listeners to Skills and Achievements
document.querySelectorAll('.skill, .achievement').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('span').textContent;
        showPopup(title, `More information about ${title}.`);
    });
});

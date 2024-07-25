// Sample Functions for Demo Buttons
function showPredictiveModel() {
    alert('Predictive Model Demo will be implemented here.');
    // Replace with actual implementation or embed code
}

function showDashboard() {
    alert('Interactive Data Dashboard Demo will be implemented here.');
    // Replace with actual implementation or embed code
}

// Email Sending Functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    fetch('https://example.com/send-email', { // Replace with your server URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message.');
    });
});

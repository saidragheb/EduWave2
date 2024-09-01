// Add any JavaScript code here if needed, for example, a simple subscription form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value.includes('@')) {
        alert('Please enter a valid email address');
        event.preventDefault();
    }
});

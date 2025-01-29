document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to the server
    document.getElementById('statusMessage').innerHTML = 'Your message has been recorded.';
});
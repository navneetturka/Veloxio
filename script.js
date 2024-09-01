document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contactForm');
    const sendButton = document.querySelector('button[type="submit"]');
    const inputs = document.querySelectorAll('input, textarea');

    // Form submission handler
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission

        // Simulate a form submission or show a success message
        alert('Thank you for reaching out! We will get back to you shortly.');

        // Clear the form after submission
        inputs.forEach(input => {
            input.value = ''; // Clears each input and textarea
        });
    });

    // Hover effect for send button
    sendButton.addEventListener('mouseenter', function () {
        sendButton.style.backgroundColor = '#bbbbbb'; // Change color on hover
    });

    sendButton.addEventListener('mouseleave', function () {
        sendButton.style.backgroundColor = '#ffffff'; // Revert to original color
    });

    sendButton.addEventListener('mousedown', function () {
        sendButton.style.backgroundColor = '#888888'; // Even darker on click
    });

    sendButton.addEventListener('mouseup', function () {
        sendButton.style.backgroundColor = '#bbbbbb'; // Back to hover color
    });
});


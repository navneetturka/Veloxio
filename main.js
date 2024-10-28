document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById('loadingSpinner').style.display = 'block'; // Show spinner

    // Simulate form submission process (you can replace this with actual submission logic)
    setTimeout(() => {
        alert('Form submitted successfully!'); // Mock submission feedback
        document.getElementById('loadingSpinner').style.display = 'none'; // Hide spinner
        document.getElementById('contactForm').reset(); // Reset the form
    }, 2000); // Simulated delay
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth' // Smooth scroll to target
        });
    });
});

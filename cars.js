window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.scroll-image');
    images.forEach(image => {
        const imagePosition = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (imagePosition < windowHeight - 100) {
            image.classList.add('visible');
        }
    });
});

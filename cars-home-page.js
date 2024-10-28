document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.large-font');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // 50% of the element should be visible to trigger

    observer.observe(heading);
});

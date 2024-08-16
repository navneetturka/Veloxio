let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slides img");
    let dots = document.querySelectorAll(".dot");

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].classList.add('active');
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

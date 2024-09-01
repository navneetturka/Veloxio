const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
const totalSlides = slides.length;

// Create dots based on the number of slides
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('data-index', i);
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    updateCarousel();
  });
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Swipe functionality for mobile devices
let startX;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    nextButton.click();
  } else if (startX < endX - 50) {
    prevButton.click();
  }
});

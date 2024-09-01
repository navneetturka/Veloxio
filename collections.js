
document.addEventListener('DOMContentLoaded', () => {
    const priceRange = document.getElementById('price-range');
    const minPriceLabel = document.getElementById('min-price');
    const maxPriceLabel = document.getElementById('max-price');
    
    function updatePriceLabels() {
        const value = priceRange.value;
        minPriceLabel.textContent = `₹0`;
        maxPriceLabel.textContent = `₹${value.toLocaleString('en-IN')}`;
    }
    
    priceRange.addEventListener('input', updatePriceLabels);
    
    // Initialize with the default value
    updatePriceLabels();
});

document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatDialog = document.getElementById('chat-dialog');
    const chatClose = document.getElementById('chat-close');
    const sendMessage = document.getElementById('send-message');
    const chatInput = document.getElementById('chat-input');

    chatToggle.addEventListener('click', function() {
        chatDialog.classList.toggle('show');
    });

    chatClose.addEventListener('click', function() {
        chatDialog.classList.remove('show');
    });

    sendMessage.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            const chatMessages = chatDialog.querySelector('.chat-messages');
            const newMessage = document.createElement('div');
            newMessage.textContent = message;
            chatMessages.appendChild(newMessage);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});


document.getElementById('category').addEventListener('change', function() {
    // Get the selected value from the dropdown
    var selectedCategory = this.value;

    // Redirect based on the selected option
    if (selectedCategory === 'cars') {
        window.location.href = 'cars.html'; // Open cars.html in the same tab
    } else if (selectedCategory === 'bikes') {
        window.location.href = 'bikes.html'; // Open bikes.html in the same tab
    }
});

// const brandLogos = document.querySelector('.brand-logos');
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');
// const logoWidth = 220; // Width of one logo
// const marginBetweenLogos = 20; // Margin between logos
// const logosPerSlide = 6; // Number of logos to show per slide
// let currentSlide = 0;

// function updateCarouselPosition() {
//     const moveDistance = (logoWidth + marginBetweenLogos) * logosPerSlide;
//     const newTransform = `translateX(-${currentSlide * moveDistance}px)`;
//     brandLogos.style.transform = newTransform;
// }

// rightArrow.addEventListener('click', () => {
//     const totalSlides = Math.ceil(brandLogos.children.length / logosPerSlide);
//     if (currentSlide < totalSlides - 1) {
//         currentSlide++;
//         updateCarouselPosition();
//     }
// });

// leftArrow.addEventListener('click', () => {
//     if (currentSlide > 0) {
//         currentSlide--;
//         updateCarouselPosition();
//     }
// });


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

// Get elements
const chatToggle = document.getElementById('chat-toggle');
const chatDialog = document.getElementById('chat-dialog');
const chatClose = document.getElementById('chat-close');
const sendMessageButton = document.getElementById('send-message');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.querySelector('.chat-messages');

// Toggle chat window
chatToggle.addEventListener('click', function () {
    chatDialog.classList.toggle('show');
});

// Close chat window
chatClose.addEventListener('click', function () {
    chatDialog.classList.remove('show');
});

// Function to create a new message
function createMessage(content, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    if (isUser) {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('bot-message');
    }
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

// Send message
sendMessageButton.addEventListener('click', function () {
    const userMessage = chatInput.value.trim();
    if (userMessage !== "") {
        createMessage(userMessage, true); // Display user message
        chatInput.value = ''; // Clear input

        // Simulate bot response after a delay
        setTimeout(function () {
            const botResponse = getBotResponse(userMessage);
            createMessage(botResponse, false); // Display bot response
        }, 1000);
    }
});

// Simulate bot responses (this is where actual chat logic or API integration would go)
function getBotResponse(message) {
    // Add your custom questions and answers here
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "help": "Sure! Please describe your issue.",
        "bye": "Goodbye! Have a great day!",
        "Ok bye": "Goodbye! Have a great day!",
        // Greeting Questions
        "hi": "Hello! How can I assist you today?",
        "hey": "Hey! How can I assist you?",
        "good morning": "Good morning! How can I assist you?",
        "good afternoon": "Good afternoon! How can I help you today?",
        "good evening": "Good evening! What can I assist you with?",
        "is anyone there?": "Yes, I'm here to help! How can I assist you today?",
        "how are you?": "I'm just a bot, but thanks for asking! How can I assist you?",
        "what can you do?": "I can help you with information on cars, bikes, bookings, and more! What would you like to know?",

        // Goodbye Questions
        "bye": "Goodbye! Have a great day!",
        "goodbye": "Goodbye! If you need any further assistance, feel free to ask!",
        "see you": "See you! Feel free to chat with us anytime.",
        "take care": "Take care! If you have more questions later, don't hesitate to ask.",
        "talk to you later": "Sure! I'll be here whenever you need assistance. Have a great day!",


        // Car-specific questions
        "what’s the mileage on this car?": "You can find the mileage details in the 'Specifications' section of the vehicle listing page.",
        "is this car available with an automatic transmission?": "Yes, we offer cars with both automatic and manual transmission options.",
        "does this car come with a warranty?": "Many of our vehicles come with manufacturer or extended warranties.",
        "can i view the car’s service history?": "Yes, for certified pre-owned cars, you can view the service history in the 'Overview' section of the car’s detail page.",
        "can i book a test drive for this car?": "Yes, you can schedule a test drive from the vehicle's product page by clicking 'Book Test Drive'.",
        "what financing options are available?": "We offer multiple financing options through our partners. You can explore them during the checkout process or contact us for personalized assistance.",
        "can i trade in my current car?": "Yes, we accept trade-ins. You can provide your current vehicle details for an evaluation.",
        "what fuel types do you offer?": "We offer petrol, diesel, hybrid, and electric cars. You can filter vehicles based on your preferred fuel type.",
        "how can i calculate my car loan?": "You can use our loan calculator on the financing page to estimate your monthly payments based on vehicle price and loan terms.",

        // Bike-specific questions
        "what are the engine specifications of this bike?": "You can view the engine specs, such as engine type and power, in the 'Specifications' section.",
        "does this bike have abs?": "Yes, many of our bikes come with ABS for enhanced safety features.",
        "can i book a test ride for a bike?": "Absolutely! You can book a test ride through the bike’s detail page or chat with us for assistance.",
        "what is the fuel efficiency of this bike?": "The fuel efficiency or mileage is provided in the 'Specifications' section of the bike’s product page.",
        "does this bike come with a warranty?": "Yes, our bikes come with manufacturer or extended warranties depending on the model.",
        "is this bike suitable for long-distance touring?": "Yes, some of our bikes are designed for long-distance touring with comfort and fuel efficiency. You can filter for touring bikes on our search page.",
        "can i add accessories to this bike?": "Yes, we offer a wide range of accessories. You can check the 'Accessories' section or contact us for available options.",

        // General questions
        "do you offer vehicle insurance?": "Yes, we provide insurance options through our trusted partners. You can opt for insurance during the purchase process.",
        "how do i check the availability of a vehicle?": "You can check the availability on the vehicle's product page or contact our support for real-time updates.",
        "what documents do i need to buy a car or bike?": "You will need identity proof, address proof, and financial documents for purchase. Contact us for a full list of required documents.",
        "what are your return policies?": "We offer a return policy for vehicles under certain conditions. Please visit our 'Return Policies' page for more details.",
        "how do i track my order status?": "You can track your order status by logging into your account and checking the 'My Orders' section.",
        "can i cancel my order?": "Yes, you can cancel your order before delivery by contacting our support team. Check our cancellation policies for more details.",
        "do you offer home delivery of vehicles?": "Yes, we offer home delivery for select locations. You can check delivery availability at checkout or contact support for more information.",
        "how can i contact customer support?": "You can reach our customer support via live chat, email, or phone. Visit our 'Contact Us' page for more details.",

        // Add more questions and responses below as needed
        "do you offer discounts or promotions?": "Yes, we have seasonal promotions and discounts. Keep an eye on our 'Offers' section or sign up for our newsletter to stay updated.",
        "what is the registration process for a new vehicle?": "We assist with the registration process. After your purchase, our team will handle the paperwork, and you'll receive your vehicle with the registration completed."
    };

    // Default response if the question is not found
    return responses[message.toLowerCase()] || "I'm sorry, I don't understand that.";
}


// Enable sending message with Enter key
chatInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessageButton.click(); // Trigger send message button
    }
});


// Array of video file paths (ensure these paths are correct)
const videos = [
    'car.mp4',  // Path to the first video file
    'video.mp4', // Path to the second video file
    'race.mp4',  // Path to the third video file
    'bmw.mp4'    // Path to the fourth video file
];

// Video change functionality
let videoIndex = 0;
const videoElement = document.getElementById('backgroundVideo');

// Function to change video with a quick fade effect
function changeVideo() {
    videoElement.style.opacity = 0; // Start fade-out

    setTimeout(() => {
        videoIndex = (videoIndex + 1) % videos.length; // Update video index
        videoElement.src = videos[videoIndex]; // Change video source
        videoElement.load(); // Reload the video
        videoElement.play(); // Play the new video
        videoElement.style.opacity = 1; // Fade in
    }, 200); // Matches the fade-out duration
}

// Change video every 10 seconds
setInterval(changeVideo, 10000);

// News section functionality
document.addEventListener("DOMContentLoaded", function () {
    const newsItems = document.querySelectorAll(".news-content");
    const dots = document.querySelectorAll(".dot");
    const viewMore = document.querySelector(".view-more");
    let currentIndex = 0;

    function showNextNews() {
        newsItems[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % newsItems.length;
        newsItems[currentIndex].classList.add("active");
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Initialize the dots on page load
    updateDots();

    // Change news item every 3 seconds (3000 ms)
    setInterval(showNextNews, 2000); // Adjusted to 3 seconds

    // Add event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            newsItems[currentIndex].classList.remove("active");
            currentIndex = parseInt(dot.getAttribute("data-index"));
            newsItems[currentIndex].classList.add("active");
            updateDots(); // Update the dot indicators
        });
    });

    // Add event listener for "View More"
    viewMore.addEventListener("click", () => {
        alert("View more news functionality to be implemented.");
        // You can define your logic to show more news or redirect to another page
    });
});

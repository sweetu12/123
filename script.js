// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Select all project cards that contain videos
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    const video = card.querySelector('video'); // Get the video element

    if (video) {
        // Play the video on mouse enter (hover)
        card.addEventListener('mouseenter', () => {
            video.play();
        });

        // Pause the video when the mouse leaves
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Reset video to the start
        });
    }
});

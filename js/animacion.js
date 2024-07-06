document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('.slide ul');
    const slideItems = document.querySelectorAll('.slide ul li');
    let currentIndex = 0;

    function moveSlide() {
        // Remove active class from current slide
        slideItems[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % slideItems.length;

        // Add active class to new slide
        slideItems[currentIndex].classList.add('active');

        // Move the slide
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Initialize the first slide as active
    slideItems[currentIndex].classList.add('active');

    setInterval(moveSlide, 5000); // Change slide every 5 seconds
});
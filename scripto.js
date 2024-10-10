let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide-img');
const dots = document.querySelectorAll('.dot');

// Array of slide texts to change content dynamically
const slideTexts = [
    {
        heading: "LOVE WHAT YOU BRING TO THE TABLE",
        paragraph: "You'll find all our natural products filled with nutritious goodness and ready for your family to enjoy."
    },
    {
        heading: "FRESH INGREDIENTS",
        paragraph: "Our products are made from the freshest ingredients sourced directly from local farms."
    },
    {
        heading: "READY FOR YOUR FAMILY",
        paragraph: "We ensure that everything we make is nutritious and ready for your family to enjoy together."
    }
];

// Function to change slides and apply transitions
function currentSlide(index) {
    // Update the slide index
    currentSlideIndex = index;

    // Hide all images and deactivate all dots
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    // Show the current image and activate the corresponding dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');

    // Update the content text dynamically based on the slide index
    const contentHeading = document.querySelector('.content h2');
    const contentParagraph = document.querySelector('.content p');
    contentHeading.textContent = slideTexts[currentSlideIndex].heading;
    contentParagraph.textContent = slideTexts[currentSlideIndex].paragraph;
}

// Initialize the first slide as active
currentSlide(0);

// Automatically change slides every 5 seconds
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Increment slide index and loop back to 0 when reaching the end
    currentSlide(currentSlideIndex);
}, 5000); // Change slides every 5 seconds (5000ms)

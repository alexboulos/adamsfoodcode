document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');

    function activateSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(d => d.classList.remove('active'));

        slides[index].style.display = 'flex'; // changed to flex to center content
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => activateSlide(index));
    });

    // Automatically display the first slide
    activateSlide(0);

    // Optionally, add auto-slide functionality
    let currentSlide = 0;
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        activateSlide(currentSlide);
    }, 5000); // Change slides every 5 seconds
});

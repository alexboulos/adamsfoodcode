

// Get the navbar element
const navbar = document.getElementById("navbar");
const recto = document.getElementById("rect")
// navbar.classList.add("sticky");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position.
function checkSticky() {
  if (window.scrollY >= 200) {
    navbar.classList.add("sticky");
    recto.classList.add("rectangle");

  } else {
    navbar.classList.remove("sticky");
    recto.classList.remove("rectangle");

  }
}

// Call the function on scroll
window.onscroll = function() {
  checkSticky();
};


//Slider 

// let slideIndex = 1;
// showSlides(slideIndex);

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

function changeContent(dotNumber) {
    const dots = document.querySelectorAll('.dot');
    const textContainer = document.getElementById('info-text');
    const imageContainer = document.getElementById('main-image');
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === dotNumber - 1) {
            dot.style.backgroundColor = 'black';
        } else {
            dot.style.backgroundColor = 'white';
        }
    });

    // Update text and image based on the selected dot
    switch (dotNumber) {
        case 1:
            textContainer.textContent = 'Love what you bring to the table';
            imageContainer.src = 'images/love-pakistani.png'; // Update with the correct image path
            break;
        case 2:
            textContainer.textContent = 'Bring what you love to the table';
            imageContainer.src = 'images/love-empanadas.png'; // Update with the correct image path
            break;
        case 3:
            textContainer.textContent = 'Dedicated to bringing only the best to your table.';
            imageContainer.src = 'images/love-pakistani.png'; // Update with the correct image path
            break;
    }
}
// Set initial state when page loads
document.addEventListener('DOMContentLoaded', function() {
    changeContent(1); // This activates the first dot and sets the corresponding text and image.
});
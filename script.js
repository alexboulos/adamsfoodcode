

// Get the navbar element
const navbar = document.getElementById("navbar");
const recto = document.getElementById("rect");
// navbar.classList.add("sticky");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position.
function checkSticky() {
  if (window.scrollY >= 50) {
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


function changeImage(imageSrc) {
    var img = document.getElementById("slidingImage");
    
    // Remove the sliding animation class if it's already applied
    img.classList.remove("slide-in");
    
    // Change the image source
    img.src = imageSrc;
    
    // Force a reflow to reset the animation (trick for restarting the animation)
    void img.offsetWidth;
    
    // Re-add the sliding animation class
    img.classList.add("slide-in");
}


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
    var img = document.getElementById("main-image");
    
    // Remove the sliding animation class if it's already applied
    img.classList.remove("love");
    
    // Change the image source
    img.src = imageSrc;
    
    // Force a reflow to reset the animation (trick for restarting the animation)
    void img.offsetWidth;
    
    // Re-add the sliding animation class
    img.classList.add("love");
}
// Set initial state when page loads
document.addEventListener('DOMContentLoaded', function() {
    changeContent(1); // This activates the first dot and sets the corresponding text and image.
});

function changeAbout(about) {
    const abouts = document.querySelectorAll('.abouts');

}



function aboutDropdown(about) {
    const aboutDescription = document.getElementById('about-description-text');
    const aboutNav = document.getElementById('about-nav-text');

    // Update text and image based on the selected dot
    switch (about) {
        case 1:
            aboutDescription.innerHTML = "Adams Food Co. (The Real Lebanese Taste) started as a family business in 2010. Due to market need, pledged to create a homemade style frozen natural appetizers/finger food concept for consumers, prepared with quality ingredients. <br/> <br/> without any chemicals or artificial colorings for the whole family to enjoy morning, lunch, evening or snacking at all time, even for any type of event. <br/> <br/> Adams Food uses 100% natural fresh & quality ingredients for its prepared frozen products presented to you and your family especially children as a snack at home or to school to have and enjoy. <br/> <br/> Tradition and reliability sets Adams Food to the highest standards of frozen carefully prepared products and customer satisfaction."
            aboutNav.innerHTML = "OUR STORY"
            break;
        case 2:
            aboutDescription.innerHTML = 'To reach every single home saving the hustle to consumers (Caterers, Hotels,  Restaurants & specially working wives) to prepare these products from scratch and have them baked/fried or cooked directly from the freezer. ';
            aboutNav.innerHTML = "MISSION"
            break;
        case 3:
            aboutDescription.innerHTML = 'To be present all over the region being the reference of Lebanese quality frozen variety products providers from Kuwait for anyone who appreciates quality food. Adams Foods even custom make according to companies’ recipes maintaining the secrecy and confidentiality of their recipe. '
            aboutNav.textContent = "VISION"
            break;
    }
    
}
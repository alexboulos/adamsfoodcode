
window.onload = function() {
    const hash = window.location.hash;

    // Check if the hash starts with #menuAbout
    if (hash.startsWith('#aboutDropdown')) {
        const param = hash.split(':')[1]; // Extract the parameter after the colon
        if (param) {
            aboutDropdown(parseInt(param)); // Pass the parameter to menuAbout, parsing it to an integer
        }
    }
};


document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');
    const rect = document.getElementById('rect');
    const footerPosition = footer.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Check if footer is in view
    if (footerPosition < screenHeight) {
        navbar.classList.add('hidden');
        rect.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
        rect.classList.remove('hidden');

    }
});



// Function to handle menuAbout based on the parameter
function menuAbout(about) {
    switch (about) {
        case 2:
            aboutDropdown(2); // Call aboutDropdown function with parameter 2
            break;
        default:
            console.log("No matching case for:", about);
            break;
    }
}




// Get the navbar element
const navbar = document.getElementById("navbar");
const recto = document.getElementById("rect");
const logo = document.getElementById("logo");
// navbar.classList.add("sticky");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position.
function checkSticky() {
  if (window.scrollY >= 50) {
    navbar.classList.add("sticky");
    recto.classList.add("rectangle");
    logo.classList.add('hidden');

  } else {
    navbar.classList.remove("sticky");
    recto.classList.remove("rectangle");
    logo.classList.remove('hidden');


  }
}

// Call the function on scroll
window.onscroll = function() {
  checkSticky();
};



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


function changeIndex(boxNumber) {
    const indexImg = document.getElementById('index-header');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');


    switch (boxNumber) {
        case 1 :
            indexImg.style.backgroundImage = "url('images/woman-with-food.png')";
            box1.src = 'images/box-fill.png';
            box2.src = 'images/box-empty.png';
            box3.src = 'images/box-empty.png';
            break;
        case 2 :
            indexImg.style.backgroundImage = "url('images/visual3.png')";
            box1.src = 'images/box-empty.png';
            box2.src = 'images/box-fill.png';
            box3.src = 'images/box-empty.png';
            break;
        case 3 :
            indexImg.style.backgroundImage = "url('images/woman-with-food.png')";
            box1.src = 'images/box-empty.png';
            box2.src = 'images/box-empty.png';
            box3.src = 'images/box-fill.png';
            break;
    }
}

// let into = 1;
// setInterval(changeContent(into++), 5000);



// function changeSlider {
//     const dots1 = document.querySelectorAll('.dot');
//     if(dots1[0].style.backgroundColor === 'black'){
//         changeContent(2);
//     } else if(dots1[1].style.backgroundColor === 'black'){
//         changeContent(3);
//     } else if(dots1[2].style.backgroundColor === 'black'){
//         changeContent(1);
//     }
// }


const currentImageElement = document.getElementById("love-img");
const nextImageElement = document.getElementById("love-next-img");
const images = ["images/love-packistani-food.png", "images/love-empanadas.png", "images/love-packistani-food.png"]; 
let currentIndex = 0;


// const currentImageElement = document.getElementById("currentImage");
// const nextImageElement = document.getElementById("nextImage");
// const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; 
// let currentIndex = 0;

// document.getElementById("nextButton").addEventListener("click", function () {

//   const nextIndex = (currentIndex + 1) % images.length;
  

//   nextImageElement.src = images[nextIndex];
  

//   nextImageElement.style.transform = "translateX(100%)";
//   nextImageElement.style.display = "block"; 
  

//   setTimeout(() => {
//     currentImageElement.style.transform = "translateX(-100%)"; 
//     nextImageElement.style.transform = "translateX(0)"; 
//   }, 10); 
  
//   setTimeout(() => {
//     currentImageElement.src = images[nextIndex]; 
//     currentImageElement.style.transform = "translateX(0)"; 
//     nextImageElement.style.display = "none"; 
//     currentIndex = nextIndex; 
//   }, 500); 
// });



// Set initial state when page loads
document.addEventListener('DOMContentLoaded', function() {
    changeContent(1); 
    console.log("consoling bro");
});


let counter = 1;

function callFunctionWithParam() {

    counter++;
    if(counter === 4) {
        counter = 1;
    }
    changeContent(counter);
    
    // Increment counter and reset to 1 if it exceeds 3
    
  }

  setInterval(callFunctionWithParam, 5000);

function changeAbout(about) {
    const abouts = document.querySelectorAll('.abouts');

}

function aboutDropdown(about) {
    const aboutDescription = document.getElementById('about-description-text');
    const aboutNav = document.getElementById('about-nav-text');
    const story = document.getElementById('story');
    const mission = document.getElementById('mission');
    const vision = document.getElementById('vision');
    const quality = document.getElementById('quality');


    // Update text and image based on the selected dot
    switch (about) {
        case 1:
            aboutDescription.innerHTML = "<b>Adams Food Co. (The Real Lebanese Taste) began as a family venture in 2010.</b><br/><br/>Recognizing a market need, we committed to crafting homemade-style frozen natural appetizers and finger foods. Our products are ade with high-quality ingredients, free from chemicals and artificial colorings, ensuring they are perfect for the whole family to enjoy at any time—be it morning, lunch, evening, or as a snack for any event.<br/><br/>At Adams Food, we pride ourselves on using 100% fresh, natural, and high-quality ingredients in our frozen products. These snacks are ideal for both home and school, especially for children to savor and enjoy.<br/><br/>Our dedication to tradition and reliability has established Adams Food as a leader in providing meticulously prepared frozen products, ensuring the highest standards of customer satisfaction.";
            aboutNav.innerHTML = "OUR STORY";
            story.style.color = '#ed7e2c';
            mission.style.color = 'black';
            vision.style.color = 'black';
            quality.style.color = 'black';
            break;
        case 2:
            aboutDescription.innerHTML = 'To bring convenience to every home by providing high-quality, ready-to-cook frozen products. We aim to save time and effort for our consumers, including caterers, hotels, restaurants, and especially busy working wives, by offering delicious appetizers and finger foods that can be baked, fried, or cooked directly from the freezer.';
            aboutNav.innerHTML = "MISSION";
            story.style.color = 'black';
            mission.style.color = '#ed7e2c';
            vision.style.color = 'black';
            quality.style.color = 'black';
            break;
        case 3:
            aboutDescription.innerHTML = 'To establish a strong presence across the region and globally as the leading provider of high-quality Lebanese frozen products from Kuwait.<br/><br/>We aim to be the go-to choice for anyone who values exceptional food. We are dedicated to maintaining the highest standards of quality in every product we offer, ensuring that our customers always receive the best.';
            aboutNav.textContent = "VISION";
            story.style.color = '#black';
            mission.style.color = 'black';
            vision.style.color = '#ed7e2c';
            quality.style.color = 'black';
            break;
        case 4:
            aboutDescription.innerHTML = 'To establish a strong presence across the region and globally as the leading provider of high-quality Lebanese frozen products from Kuwait.<br/><br/>We aim to be the go-to choice for anyone who values exceptional food. We are dedicated to maintaining the highest standards of quality in every product we offer, ensuring that our customers always receive the best.';
            aboutNav.textContent = "QUALITY";
            story.style.color = 'blacks';
            mission.style.color = 'black';
            vision.style.color = 'black';
            quality.style.color = '#ed7e2c';
            break;
    }
    
}


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

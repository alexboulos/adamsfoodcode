
window.onload = function() {
    const hash = window.location.hash;

    if (hash.startsWith('#aboutDropdown')) {
        const param = hash.split(':')[1]; 
        if (param) {
            aboutDropdown(parseInt(param)); 
        }
    }
    if (hash.startsWith('#contactDropdown')) {
        const param = hash.split(':')[1]; 
        if (param) {
            contactDropdown(parseInt(param)); 
        }
    }
};


document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const nav = document.getElementsByTagName('nav');
    const footer = document.getElementById('footer');
    const rect = document.getElementById('rect');
    const footerPosition = footer.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (footerPosition < screenHeight) {
        navbar.classList.add('hidden');
        rect.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
        rect.classList.remove('hidden');
    }
});


function menuAbout(about) {
    switch (about) {
        case 2:
            aboutDropdown(2); 
            break;
        default:
            console.log("No matching case for:", about);
            break;
    }
}
const navbar = document.getElementById("navbar");
const recto = document.getElementById("rect");
const logo = document.getElementById("logo");
const sticky = navbar.offsetTop;
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

window.onscroll = function() {
  checkSticky();
};

const currentImageElement = document.getElementById("love-img");
const nextImageElement = document.getElementById("love-next-img");
const images = ["images/love-packistani-food.png", "images/love-empanadas.png", "images/love-packistani-food.png"]; 
let currentIndex = 0;

function changeAbout(about) {
    const abouts = document.querySelectorAll('.abouts');

}

// About 

function aboutDropdown(about) {
    const aboutDescription = document.getElementById('about-description-text');
    const aboutNav = document.getElementById('about-nav-text');
    const story = document.getElementById('story');
    const mission = document.getElementById('mission');
    const vision = document.getElementById('vision');
    const quality = document.getElementById('quality');
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
            aboutDescription.innerHTML = 'At ADAMS Food, quality is at the heart of everything we do. As an ISO 22000 certified food factory, we adhere to the highest standards of food safety and quality management. Our certification is a testament to our commitment to producing safe, high-quality food products that meet international standards.<br/><br/>Our Quality Promise:<br/><br/><b>Stringent Quality Control:</b> We implement rigorous quality control measures at every stage of production, from sourcing raw materials to the final product.<br/><br/><b>Continuous Improvement:</b> Our team is dedicated to continuous improvement, regularly reviewing and updating our processes to ensure we maintain the highest standards.<br/><br/><b>Employee Training:</b> We invest in ongoing training for our employees to ensure they are knowledgeable about the latest food safety practices and quality standards.<br/><br/><b>Customer Satisfaction:</b> We prioritize customer satisfaction by consistently delivering products that meet or exceed expectations.<br/><br/>Our ISO 22000 certification reflects our unwavering dedication to food safety and quality. We are proud to provide our customers with products they can trust.';
            aboutNav.textContent = "QUALITY";
            story.style.color = 'blacks';
            mission.style.color = 'black';
            vision.style.color = 'black';
            quality.style.color = '#ed7e2c';
            break;
    }
}

// Contact us 

function contactDropdown(contact) {
    const contactDescription = document.getElementById('contact-description-text');
    const contactNav = document.getElementById('contact-nav-text');
    const contactInfo = document.getElementById('contact');
    const distributor = document.getElementById('distributor');
    const findUs = document.getElementById('find-us');
    switch (contact) {
        case 1:
            contactDescription.innerHTML = "<b>Adams Food Catering Company</b></br>Al-Ardiya Industrial Zone, Block 2, Building No.157</p></br><span class='orange'>P. O. Box:</span> 2683 Al-Ardiya, 92400 KUWAIT</br><span class='orange'>Tel:</span> +965-6573-3318 </br>&nbsp &nbsp &nbsp &nbsp &nbsp +965-6593-3318 </br><span class='orange'>Email:</span> info@adamsfood-kuwait.com</br>";
            contactNav.innerHTML = "CONTACT INFO";
            contactInfo.style.color = '#ed7e2c';
            distributor.style.color = 'black';
            findUs.style.color = 'black';
            break;
        case 2:
            contactDescription.innerHTML = "Do you want to be part of a dynamic and growing network? Becoming a distributor for ADAMS FOOD products, offers you the opportunity to grow your business and be part of our success story.</br></br>Why Partner with Us?</br></br><b>High-Quality Products:</b> We offer a range of top-notch products that meet the highest industry standards.</br></br><b>Competitive Pricing:</b> Our pricing strategy ensures you get the best margins.</br></br><b>Marketing Support:</b>Benefit from our comprehensive marketing materials and support to help you succeed.</br></br><b>Dedicated Support:</b> Our team is here to assist you every step of the way. ";
            contactNav.innerHTML = "BECOME A DISTRIBUTOR";
            contactInfo.style.color = 'black';
            distributor.style.color = '#ed7e2c';
            findUs.style.color = 'black';
            break;
        case 3:
            contactDescription.innerHTML = "<b>Adams Food Co. (The Real Lebanese Taste) began as a family venture in 2010.</b><br/><br/>Recognizing a market need, we committed to crafting homemade-style frozen natural appetizers and finger foods. Our products are ade with high-quality ingredients, free from chemicals and artificial colorings, ensuring they are perfect for the whole family to enjoy at any time—be it morning, lunch, evening, or as a snack for any event.<br/><br/>At Adams Food, we pride ourselves on using 100% fresh, natural, and high-quality ingredients in our frozen products. These snacks are ideal for both home and school, especially for children to savor and enjoy.<br/><br/>Our dedication to tradition and reliability has established Adams Food as a leader in providing meticulously prepared frozen products, ensuring the highest standards of customer satisfaction.";
            contactNav.innerHTML = "WHERE TO FIND US";
            contactInfo.style.color = 'black';
            distributor.style.color = 'black';
            findUs.style.color = '#ed7e2c';
            break;
    }
}

// Love What You Bring 

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide-img');
const dots = document.querySelectorAll('.dot');
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
function currentSlide(index) {
    currentSlideIndex = index;
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
    const contentHeading = document.querySelector('.content h2');
    const contentParagraph = document.querySelector('.content p');
    contentHeading.textContent = slideTexts[currentSlideIndex].heading;
    contentParagraph.textContent = slideTexts[currentSlideIndex].paragraph;
}
currentSlide(0);
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; 
    currentSlide(currentSlideIndex);
}, 5000); 
function toggleMenu() {
    const menu = document.getElementById("menu-icon");
    menu.classList.add("menu-toggle");
}

// BANNER TOP 

function changeIndex(boxNumber) {
    const indexImg = document.getElementById('index-header');
    const indexImg1 = document.getElementById('index-img1');
    const indexImg2 = document.getElementById('index-img2');
    const indexImg3 = document.getElementById('index-img3');
    const indexh2 = document.getElementById('index-h2');
    const indexh3 = document.getElementById('index-h3');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
  indexImg.style.opacity = 0;
  setTimeout(() => {
    switch (boxNumber) {
        case 1 :
            indexImg1.classList.add('active');
            indexImg2.classList.remove('active');
            indexImg3.classList.remove('active');
            indexh2.innerHTML = 'THE REAL</br>LEBANESE</br>TASTE';
            indexh3.innerHTML = 'STARTED AS A FAMILY</br>BUSINESS IN 2010';
            box1.src = 'images/box-fill.png';
            box2.src = 'images/box-empty.png';
            box3.src = 'images/box-empty.png';
            currentBox(1);
            break;
        case 2 :
            indexImg1.classList.remove('active');
            indexImg2.classList.add('active');
            indexImg3.classList.remove('active');
            indexh2.innerHTML = 'NEW LOOK</br>SAME GREAT</br>TASTE';
            indexh3.innerHTML = 'FROZEN GOURMET</br>FINGER FOOD';
            box1.src = 'images/box-empty.png';
            box2.src = 'images/box-fill.png';
            box3.src = 'images/box-empty.png';
            currentBox(2);
            break;
        case 3 :
            indexImg1.classList.remove('active');
            indexImg2.classList.remove('active');
            indexImg3.classList.add('active');
            indexh2.innerHTML = 'NEW LOOK</br>SAME GREAT</br>TASTE';
            indexh3.innerHTML = 'FROZEN GOURMET</br>FINGER FOOD';
            box1.src = 'images/box-empty.png';
            box2.src = 'images/box-empty.png';
            box3.src = 'images/box-fill.png';
            currentBox(2);
            break;
    }
    indexImg.style.opacity = 1;
  }, 100); 
}

let currentBoxIndex = 0;
const banner = document.querySelectorAll('.slide-img');
const boxes = document.querySelectorAll('.dot');
const bannerTexts = [
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
function currentBox(index) {
    currentBoxIndex = index;
    banner.forEach((slide, i) => {
        slide.classList.remove('active');
        boxes[i].classList.remove('active');
    });
    banner[currentBoxIndex].classList.add('active');
    dots[currentBoxIndex].classList.add('active');
    const contentHeading = document.querySelector('.content h2');
    const contentParagraph = document.querySelector('.content p');
    contentHeading.textContent = slideTexts[currentBoxIndex].heading;
    contentParagraph.textContent = slideTexts[currentBoxIndex].paragraph;
}
currentBox(0);
changeIndex(1)
setInterval(() => {
    currentBoxIndex = (currentBoxIndex + 1) % banner.length; // Increment slide index and loop back to 0 when reaching the end
    currentBox(currentBoxIndex);
    changeIndex(currentBoxIndex);
}, 10000); 

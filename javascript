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




// EARLIER LOVE WHAT 

function changeContent(dotNumber) {
    const dots = document.querySelectorAll('.dot');
    const textContainer = document.getElementById('info-text');
    const imageContainer = document.getElementById('main-image');
    const content = document.getElementById('love-container');
    

    dots.forEach((dot, index) => {
        if (index === dotNumber - 1) {
            dot.style.backgroundColor = 'black';
        } else {
            dot.style.backgroundColor = 'white';
        }
    });

    // content.classList.add('fade-out');
    // nextImageElement.src = images[dotNumber];
    
    // nextImageElement.style.transform = "translateX(100%)";  
    // nextImageElement.style.display = "block"; 

    switch (dotNumber) {
        case 1:
        textContainer.textContent = 'Loove what you bring to the table'; 
        setTimeout(() => {
            currentImageElement.style.transform = "translateX(-100%)"; 
            nextImageElement.style.transform = "translateX(0)"; 
          }, 10); 
          
          setTimeout(() => {
            currentImageElement.src = 'images/love-packistani-food.png'; 
            currentImageElement.style.transform = "translateX(0)"; 
            nextImageElement.style.display = "none"; 
          }, 500); 
           
            break;
        case 2: 
        // setTimeout(function() {
        //     imageContainer.style.transition = "none";
        //     imageContainer.style.transform = "translateX(-100%)";
        //     imageContainer.src = 'images/love-empanadas.png'; 
        //     textContainer.textContent = 'Love what you bring to the table'; 

        //     setTimeout(() => {
        //     imageContainer.style.transition = "transform 0.5s ease";
        //     imageContainer.style.transform = "translateX(0)";
        //     }, 50);
        //   }, 500); 
            break;
        case 3:
            // setTimeout(function() {
            //     imageContainer.style.transition = "none";
            //     imageContainer.style.transform = "translateX(-100%)";
            //     imageContainer.src = 'images/love-pakistani.png'; 
            //     textContainer.textContent = 'Lovee what you bring to the table'; 

               
            //     setTimeout(() => {
            //     imageContainer.style.transition = "transform 0.5s ease";
            //     imageContainer.style.transform = "translateX(0)";
            //     }, 50);
            //   }, 500);       
            break;
    }
}

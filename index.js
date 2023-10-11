console.log('hello')
document.addEventListener("DOMContentLoaded", function(){
/* Images slides */
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 0; // Start from the first slide

const manualNav = function(manual) {
    // Remove 'active' class from all slides and buttons
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    btns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add 'active' class to the selected slide and button
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    currentSlide = manual; // Update the currentSlide index
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
    });
});

/* Hamburger menu */

const repeat= function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 0;
    const repeater = () => {
        setTimeout(function(){
         [...active].forEach((activeSlide) => { 
            activeSlide.classList.remove('active');
         });

            slides[i].classList.add('active');
          btns[i].classList.add('active') ;
          i++;

          if(slides.length == i){
            i = 0;
          }
          if( i >= slides.length){
            return;
          }
          repeater();
        }, 10000);
    };
repeater();
}
repeat();


const menuIcon = document.querySelector(".hamburger-menu");
menuIcon.addEventListener("click", () =>{
const navbar = document.querySelector(".navbar");
navbar.classList.toggle("change");
});

/*Sticky bar*/
window.addEventListener("scroll", function(){
    const container = document.querySelector(".container");
    container.classList.toggle("sticky", window.scrollY > 0);
})


/* Like buttom */



/* navigation(product)*/
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });
  
  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});







}) 


const swiper = new Swiper('.swiper', {
     // Default parameters
        slidesPerView: 4,
        spaceBetween: 30,
    // Optional parameters
        direction: 'horizontal',
        loop: true,
    // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
  });

 const swiper2 = new Swiper('.swiper2', {
      slidesPerView: 4,
   // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      nested: true,
 });
 const swiper3 = new Swiper('.swiper3', {
     slidesPerView: 2,
     spaceBetween: 30,
     navigation: {
       nextEl: '.swiper-button-next3',
       prevEl: '.swiper-button-prev3',
     },
     loop: true
});
///////////////////////////////
///INPUT MASKS
///////////////////////////////
let selector1 = document.getElementById("number1");
let selector2 = document.getElementById("number2");
let selector3 = document.getElementById("number3");

let im = new Inputmask("+7 (999)-999-99-99", {
  clearMaskOnLostFocus: false,
});
let im2 = new Inputmask("+7 (999)-999-99-99", {
  clearMaskOnLostFocus: true,
});
im.mask(selector1);
im.mask(selector2);
im2.mask(selector3);

/////////////
//burger-menu
/////////////

const burger = document.querySelector('.burger__menu');
const menu = document.querySelector('.header__nav');

function openMenu(){
  menu.style.display= 'flex'
  document.querySelector('body').style.overflow = 'hidden'
};

function closeMenu(){
  menu.style.display= 'none'
  document.querySelector('body').style.overflow = 'scroll'
};
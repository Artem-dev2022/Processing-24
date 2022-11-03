const swiper = new Swiper('.swiper', {
     // Default parameters
        slidesPerView: 4,
        spaceBetween: 30,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/*   const swiper1 = new Swiper('.swiper1', {
    // Default parameters
       slidesPerView: 4,
       spaceBetween: 30,
    // Optional parameters
        direction: 'horizontal',
        loop: true,
    // Navigation arrows
        navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
        },
 }); */

 const swiper3 = new Swiper('.swiper3', {
    // Default parameters
       slidesPerView: 2,
       spaceBetween: 30,
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next3',
     prevEl: '.swiper-button-prev3',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
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
const maps = document.getElementById('maps');
const mapsList = document.getElementById('maps__list');
const azs = document.getElementById('azs');
const azsList = document.getElementById('azs__list');
const about = document.getElementById('about');
const aboutList = document.getElementById('about__list');

maps.addEventListener('click', function(){
  mapsList.classList.toggle('show');
})

azs.addEventListener('click', function(){
  azsList.classList.toggle('show');
})

about.addEventListener('click', function(){
  aboutList.classList.toggle('show');
})

document.addEventListener('click', function(e){
  e.target !== maps ? mapsList.classList.remove('show') : false;
})

document.addEventListener('click', function(e){
  e.target !== azs ? azsList.classList.remove('show') : false;
})

document.addEventListener('click', function(e){
  e.target !== about ? aboutList.classList.remove('show') : false;
})

/////////
//swiper
/////////

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
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          577:{
            slidesPerView: 2,
          },
          769: {
            slidesPerView: 3,
          },
          1120: {
            slidesPerView: 4,
          }
        }
  });
  
 const swiper2 = new Swiper('.swiper2', {
      slidesPerView: 4,
   // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      nested: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        577: {
          slidesPerView: 2,
        },
        1120: {
          slidesPerView: 4,
        }
      }
 });
 const swiper3 = new Swiper('.swiper3', {
     slidesPerView: 2,
     spaceBetween: 30,
     navigation: {
       nextEl: '.swiper-button-next3',
       prevEl: '.swiper-button-prev3',
     },
     loop: true,
     breakpoints: {
      320: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
      }
    }
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
const blockScreen = document.querySelector('.block-screen');
const menu = document.querySelector('.header__nav');

function openMenu(){
  menu.style.display= 'flex'
  document.querySelector('body').style.overflow = 'hidden'
  blockScreen.style.display = 'block';
};

function closeMenu(){
  menu.style.display= 'none'
  document.querySelector('body').style.overflow = 'scroll'
  blockScreen.style.display = 'none';
};
///////////////
const volume = document.getElementById('volume');
let total = document.getElementById('total');
let profit = document.getElementById('profit');
let price = document.getElementById('price').innerHTML;

function changeValue(){
  total.textContent = price.slice(0, -1) * volume.value + ' ₽';
  profit.textContent = Math.ceil(49.59 * volume.value - total.innerHTML.slice(0, -1)) + ' ₽';
};

volume.addEventListener('input', function(){
  changeValue();
  slider.value = volume.value;
})

//////////////////
//slider-oil-value

let slider = document.getElementById("myRange");

slider.oninput = function() {
  volume.value = this.value;
}

slider.addEventListener('input', function(){
  changeValue();
})
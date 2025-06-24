import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

let stepsSlidePrev = document.querySelector('.stepsSlidePrev');
let stepsSlideNext = document.querySelector('.stepsSlideNext');

function getSwiperImage() { 
  let imgPrevSrc = this.el.querySelector(".swiper-slide-prev img").src;
  let imgNextSrc = this.el.querySelector(".swiper-slide-next img").src;
  console.log(imgPrevSrc);
  console.log(imgNextSrc);
  stepsSlidePrev.src = imgPrevSrc;
  stepsSlideNext.src = imgNextSrc;
}

// Инициализация слайдера stepSlider
document.querySelectorAll('.stepSlider').forEach(n => {
  const mySwiperSteps = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: true,
    navigation: {
      nextEl: n?.closest('.stepSliderW').querySelector('.navArrowNext'),
      prevEl: n?.closest('.stepSliderW').querySelector('.navArrowPrev'),
    },
    pagination: {
      el: n?.closest('.stepBlock').querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    on: {
      init: getSwiperImage,
      slideChange: getSwiperImage
    }
  });
});



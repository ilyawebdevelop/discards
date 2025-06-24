import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера stepSlider
document.querySelectorAll('.stepSlider').forEach(n => {
  const mySwiperSteps = new Swiper(n, {
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 600,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: n?.closest('.stepSliderW').querySelector('.navArrowNext'),
      prevEl: n?.closest('.stepSliderW').querySelector('.navArrowPrev'),
    },
    pagination: {
      el: n?.closest('.stepSliderW').querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
});



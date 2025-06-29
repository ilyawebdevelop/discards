import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);




function getSwiperImage() {
	setTimeout(() => {

		let stepsSlidePrev = this.el.closest('.stepBlock').querySelector('.stepsSlidePrev');
		let stepsSlideNext = this.el.closest('.stepBlock').querySelector('.stepsSlideNext');

		if (stepsSlidePrev && this.el.querySelector(".swiper-slide-prev img")) {
			let imgPrevSrc = this.el.querySelector(".swiper-slide-prev img").src;
			stepsSlidePrev.src = imgPrevSrc;
			stepsSlidePrev.classList.remove('hide');
		}
		if (this.el.querySelector(".swiper-slide-prev") == null && stepsSlidePrev) {
			stepsSlidePrev.classList.add('hide');
		}
		if (stepsSlideNext && this.el.querySelector(".swiper-slide-next img")) {
			let imgNextSrc = this.el.querySelector(".swiper-slide-next img").src;
			stepsSlideNext.src = imgNextSrc;
			stepsSlideNext.classList.remove('hide');
		}
		if (this.el.querySelector(".swiper-slide-next") == null && stepsSlideNext) {
			stepsSlideNext.classList.add('hide');
		}

		let stepsSlideSumPrev = this.el.closest('.stepBlock').querySelector('.stepsSlideSumPrev');
		let stepsSlideSumNext = this.el.closest('.stepBlock').querySelector('.stepsSlideSumNext');

		let sumPrev = this.el.querySelector(".swiper-slide-prev")?.textContent;
		let sumNext = this.el.querySelector(".swiper-slide-next")?.textContent;


		if (stepsSlideSumPrev) {
			stepsSlideSumPrev.textContent = sumPrev;
		}
		if (stepsSlideSumNext) {
			stepsSlideSumNext.textContent = sumNext;
		}

	}, "100");

}

// Инициализация слайдера stepSlider
document.querySelectorAll('.stepSlider').forEach(n => {
	const mySwiperSteps = new Swiper(n, {
		slidesPerView: 1,
		spaceBetween: 24,
		speed: 600,
		loop: false,
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


// Сделано для показов слайдов, нужно заменить код под бэк
let stepsBlockEach = document.querySelectorAll('.stepBlock');
let footerBtn = document.querySelector('.footerBtn');

let step1 = document.querySelector('.step-1');
let step2 = document.querySelector('.step-2');
let step3 = document.querySelector('.step-3');
let step4 = document.querySelector('.step-4');
let step5 = document.querySelector('.step-5');
let step6 = document.querySelector('.step-6');


footerBtn.addEventListener('click', () => {

	if (step1.classList.contains('active')) {
		step1.classList.remove('active');
		step2.classList.add('active');
		return;
	}
	if (step2.classList.contains('active')) {
		step2.classList.remove('active');
		step3.classList.add('active');
		return;
	}
	if (step3.classList.contains('active')) {
		step3.classList.remove('active');
		step4.classList.add('active');
		return;
	}
	if (step4.classList.contains('active')) {
		step4.classList.remove('active');
		step5.classList.add('active');
		return;
	}
	if (step5.classList.contains('active')) {
		step5.classList.remove('active');
		step6.classList.add('active');
		return;
	}
});




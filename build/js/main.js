'use strict';


$('.price__slider-list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true
});

$('.examples-slider-list').slick({
  // dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  adaptiveHeight: true,
  nextArrow: $('.examples-slider__next'),
  prevArrow: $('.examples-slider__prev')
});

$('.certificates__slider-list').slick({
  // dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  adaptiveHeight: true,
  nextArrow: $('.certificates__next'),
  prevArrow: $('.certificates__prev')
});


$('.answers__item').on('click', function (e) {
  $(this).toggleClass('answers__item--open');

})

'use strict';


$('.price__slider-list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true,
  nextArrow: $('.price__slider-next'),
  prevArrow: $('.price__slider-prev'),
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.examples-slider-list').slick({
  // dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  adaptiveHeight: true,
  nextArrow: $('.examples-slider__next'),
  prevArrow: $('.examples-slider__prev'),
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
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
  prevArrow: $('.certificates__prev'),
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


$('.answers__item').on('click', function (e) {
  $(this).toggleClass('answers__item--open');
});

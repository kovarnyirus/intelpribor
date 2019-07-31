'use strict';
$('.price__slider-list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
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
$('.main-nav__toggle-wrapper').on('click', function (e) {
  $(this).closest('.main-nav').toggleClass('main-nav--open');
});

$('.popup-with-move-anim').magnificPopup({
  type: 'inline',

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: 'auto',

  closeBtnInside: true,
  preloader: false,

  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

  //
  // $('.anchor').on('click', function(e){
  //   $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
  //   e.preventDefault();
  // });

// $(".anchor").on('click', '[href*="#"]', function(e){
//   var fixed_offset = 100;
//   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
//   e.preventDefault();
// });


$('[type="tel"]').mask('+7 (999) 999-99-99');

$(".anchor").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
  e.preventDefault();
});

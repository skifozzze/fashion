$(function () {
  $('.reviews__slider').slick({
    slidesToShow: 2,
    infinite: false,
    prevArrow: '<button class="slider-btn slider-btn__prev" aria-label="previous button"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.28572 14.5713L1.71429 7.9999L8.28572 1.42847" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__next" aria-label="previous button"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.71428 1.42868L8.2857 8.0001L1.71428 14.5715" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    
    responsive: [
      {
       breakpoint: 993,
       settings: {
         slidesToShow: 1,        
        }
      },
      {
       breakpoint: 577,
        settings: {
         slidesToShow: 1,
         autoplay: true,
         autoplaySpeed: 2000, 
         arrows: false,
         infinite: true,
        }
      },
    ]
    
  });
})
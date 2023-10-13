const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }


});
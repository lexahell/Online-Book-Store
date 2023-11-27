

const swiper = new Swiper('.sw-image', {
  // Optional parameters
  slidesPerView: 1,
  loop: 1,

  //pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// localStorage.clear(); 
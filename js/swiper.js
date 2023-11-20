// const wrapper = document.querySelector(".wrapper");
// const image = document.querySelector('.image-slider__image');
// const images = document.querySelectorAll('.image-slider__image');
// let totalSlides = 0;
// const slideImages = () => {
//     if(totalSlides === images.length) {
//         const prevImages = images.slice(0, images.length);
//         images = [...prevImages, images[images.length - 1]];
//         totalSlides = 0;
//     }
//     wrapper.scrollLeft += image.getBoundingClientRect().width;
//     totalSlides++;
// }
// const sliderInterval = setInterval(slideImages, 4000);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
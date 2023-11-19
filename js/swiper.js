const buttonPrev = document.querySelector(".swiper-button-prev");
const buttonNext = document.querySelector(".swiper-button-next");
const wrapper = document.querySelector(".wrapper");
const image = document.querySelector('.image-slider__image');
const images = document.querySelectorAll('.image-slider__image');
buttonPrev.addEventListener('click', () => {
    wrapper.scrollLeft -= image.getBoundingClientRect().width;
    clearInterval(sliderInterval);
});
buttonNext.addEventListener('click', () => {
    wrapper.scrollLeft += image.getBoundingClientRect().width;
    clearInterval(sliderInterval);
});
let totalSlides = 0;
const slideImages = () => {
    if(totalSlides === images.length) {
        const prevImages = images.slice(0, images.length);
        images = [...prevImages, images[images.length - 1]];
        totalSlides = 0;
    }
    wrapper.scrollLeft += image.getBoundingClientRect().width;
    totalSlides++;
    // if (totalSlides !== images.length) {
    //     wrapper.scrollLeft += image.getBoundingClientRect().width;
    //     totalSlides++;
    // } else {
    //     wrapper.scrollLeft -= image.length * image.getBoundingClientRect().width;
    //     totalSlides = 0;
    // }
}
const sliderInterval = setInterval(slideImages, 5000);
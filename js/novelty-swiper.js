import novelty from "./jsons/novelty.js";
const arrNovelty = novelty.data;
for (let i =0; i < novelty.data.length; i++){
    // console.log(arrNovelty[i].attributes.title);
    // console.log((arrNovelty[i].attributes.authors[0]?.firstName ?? "") + " " + arrNovelty[i].attributes.authors[0]?.lastName);
    // console.log(arrNovelty[i].attributes.oldPrice);
    // console.log(arrNovelty[i].attributes.price);
    // console.log(arrNovelty[i].attributes.discount + "%");
    // console.log("id: " + arrNovelty[i].attributes.id);
}
const productCardSliders = document.querySelectorAll(".product-card-slider");
const SwiperNoveltyWrapper = document.querySelector(".swiper-novelty-wrapper");
const countSlides  = 15;
for(let i = 0; i < countSlides; i++){
    const newProductCardSlideString = `
    <div class="swiper-slide slider-item">
        <article class="product-card-slider" data-chg-product-id="3003273" data-chg-product-price="690" data-chg-product-status="canBuy" data-chg-product-name="День, когда я исчезла" data-chg-product-old-price="759">
            <a href="" class="product-img-container">
                <img src="" class="product-img" alt="">
            </a>
            <div class="product-card-price">
                <div class="product-price">
                <div class="product-price__old">759 ₽</div>
                <div class="product-price__value">690 ₽</div>
            </div>
            <span class="product-card-price-discount">9%</span>
            </div>
                <div class="product-card-text">
                <a href="#!" title="Благословение небожителей" target="_self" class="product-card__title">
                    <div class="product-title">
                    <div class="product-title__head">Благословение небожителей</div>
                    <div class="product-title__author">Мосян Тунсю</div>
                </a>
            </div>
            <div class="products-buttons">
                <button class="action-button">Купить</button>
                <button class="favourite-button">
                    <svg  height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 54" id="Layer_54">
                        <path
                        class="cls-1"
                        d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
                    />
                    </g>
                    </svg>
                </button>
            </div>
        </article>
    </div>
    `;
    SwiperNoveltyWrapper.insertAdjacentHTML('afterbegin', newProductCardSlideString);
    SwiperNoveltyWrapper.querySelector(".swiper-slide").dataset.SwiperSlideIndex = countSlides - i;
    const newProductCardSlide = SwiperNoveltyWrapper.firstElementChild.querySelector(".product-card-slider");
    newProductCardSlide.dataset.chgProductId = arrNovelty[i].attributes.id;
    const id = newProductCardSlide.dataset.chgProductId;
    console.log(newProductCardSlide.dataset.chgProductId);
    newProductCardSlide.querySelector(".product-title__head").textContent = arrNovelty[i].attributes.title;
    newProductCardSlide.querySelector(".product-img").src = `img\\books\\novelty\\${id}.jpg`;
    newProductCardSlide.querySelector(".product-img").alt = `${arrNovelty[i].attributes.title}`;
}
const swiperNovelty = new Swiper('.swiper-novelty',{
    loop: 1,
    //pagination
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-novelty-button-next',
      prevEl: '.swiper-novelty-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        380: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
      }
});
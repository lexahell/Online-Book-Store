import novelty from "./jsons/novelty.js";

const arrNovelty = novelty.data;
const SwiperNoveltyWrapper = document.querySelector(".swiper-novelty-wrapper");
const countSlides = 24;
for (let i = 0; i < countSlides; i++) {
  const newProductCardSlideString = `
    <div class="swiper-slide slider-item">
        <article class="product-card-slider" data-chg-product-id="" data-chg-product-price="" data-chg-product-status="" data-chg-product-name="" data-chg-product-old-price=""      data-chg-favourites-status="false">
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
            <a href="#!" class="product-card-text">
                <div title="Благословение небожителей" target="_self" class="product-card__title">
                    <div class="product-title">
                        <div class="product-title__head">Благословение небожителей</div>
                        <div class="product-title__author">Мосян Тунсю</div>
                    </div>
                </div>
            </a>
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
  SwiperNoveltyWrapper.insertAdjacentHTML(
    "afterbegin",
    newProductCardSlideString
  );
  SwiperNoveltyWrapper.querySelector(".swiper-slide").dataset.SwiperSlideIndex =
    i;
  const newProductCardSlide =
    SwiperNoveltyWrapper.firstElementChild.querySelector(
      ".product-card-slider"
    );
  newProductCardSlide.dataset.chgProductId = arrNovelty[i].attributes.id;
  newProductCardSlide.dataset.chgProductPrice = arrNovelty[i].attributes.price;
  newProductCardSlide.dataset.chgProductStatus =
    arrNovelty[i].attributes.status;
  newProductCardSlide.dataset.chgProductOldPrice =
    arrNovelty[i].attributes.oldPrice;
  newProductCardSlide.dataset.chgProductName = arrNovelty[i].attributes.title;
  const id = newProductCardSlide.dataset.chgProductId;
  const likeButton = newProductCardSlide.querySelector(".favourite-button");

  if (localStorage.getItem(`book_${id}`)) {
    likeButton.classList.add("favourite-button-active");
    newProductCardSlide.dataset.chgFavouritesStatus = "true";
    likeButton.innerHTML = "";
    likeButton.insertAdjacentHTML(
      "afterbegin",
      `
      <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"/></svg>
      `
    );
  } else {
    likeButton.innerHTML = "";

    likeButton.insertAdjacentHTML(
      "afterbegin",
      `<svg  height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g data-name="Layer 54" id="Layer_54">
              <path
              class="cls-1"
              d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
          />
          </g>
      </svg>
      `
    );
  }

  newProductCardSlide.querySelector(".product-title__head").textContent =
    arrNovelty[i].attributes.title;
  newProductCardSlide.querySelector(".product-title__author").textContent =
    (arrNovelty[i].attributes.authors[0]?.firstName ?? "") +
    " " +
    (arrNovelty[i].attributes.authors[0]?.lastName ?? "");
  newProductCardSlide.querySelector(
    ".product-img"
  ).src = `img\\books\\novelty\\${id}.jpg`;
  newProductCardSlide.querySelector(
    ".product-img"
  ).alt = `${arrNovelty[i].attributes.title}`;
  newProductCardSlide.querySelector(".product-price__old").textContent =
    arrNovelty[i].attributes.oldPrice + " ₽";
  newProductCardSlide.querySelector(".product-price__value").textContent =
    arrNovelty[i].attributes.price + " ₽";
  newProductCardSlide.querySelector(
    ".product-card-price-discount"
  ).textContent = arrNovelty[i].attributes.discount + "%";
}
const swiperNovelty = new Swiper(".swiper-novelty", {
  loop: 1,
  slidesPerView: 1,
  slidesPerGroup: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    380: {
      loop: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    540: {
      loop: 3,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    // when window width is >= 480px
    770: {
      loop: 4,
      slidesPerView: 4,
      slidesPerGroup: 4,
      //   spaceBetween: 30
    },
    900: {
      loop: 4,
      slidesPerView: 4,
      slidesPerGroup: 4,
      // spaceBetween: 30
    },
    1200: {
      loop: 6,
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

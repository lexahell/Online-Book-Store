import bestseller from "./jsons/bestseller.js";
import novelty from "./jsons/novelty.js";
import klassicheskayaProza from "./jsons/klassicheskaya-proza.js";
import manga from "./jsons/manga.js";
import comics from "./jsons/comics.js";
import fantasy from "./jsons/fantasy.js";
const arrJsons = [];
let amountWithoutDiscount = 0;
let amountDiscount = 0;
let amount = 0;

arrJsons.push(bestseller, novelty, klassicheskayaProza, manga, comics, fantasy);
const packageCategory = [
  "bestseller",
  "novelty",
  "klassicheskaya-proza",
  "manga",
  "comics",
  "fantasy",
];
const cartProducts = document.querySelector(".cart-products");
for (let key in localStorage) {
  let isFound = false;
  let indexCategory = 0;
  for (let obj of arrJsons) {
    const books = obj.data;
    for (let book of books) {
      if (`book_in_cart_${book.id}` == key) {
        const newCartProductContainer = `
					<div class="cart-product-container" data-chg-product-id="">
						<div class="cart-product-content">
							<a href="#!" class="cart-img-container">
								<img class="cart-img" src="../img/books/klassicheskaya-proza/2447550.jpg" alt="">
							</a>
							<div class="cart-product-block">
								<div class="cart-product-description-block">
									<a class="cart-product-description" href="#!">
										<div class="cart-product-title__head">
											Линкоры «Аризона» и «Пенсильвания». Мемориал Перл-Харбора и флагман ВМС США
										</div>
										<div class="cart-product-title__author">
											Виктор Чаусов
										</div>
									</a>
								</div>
								<div class="cart-product-counter-container">
									<div class="cart-counter">
										<button class="count-minus">–</button>
										<button class="count">1</button>
										<button class="count-plus">+</button>
									</div>
								</div>
								<div class="cart-product-cost">
									<div class="product-card-price">
										<div class="product-price">
											<div class="product-price__old">759 ₽</div>
											<div class="product-price__value">690 ₽</div>
										</div>
									</div>
								</div>
								<div class="cart-product-actions">
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
									<button class="cart-delete-button">
										<?xml version="1.0" ?><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6 7C6.55228 7 7 7.44772 7 8V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V8C5 7.44772 5.44772 7 6 7Z" fill="black" fill-rule="evenodd"/><path clip-rule="evenodd" d="M10 8C10.5523 8 11 8.44772 11 9V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V9C9 8.44772 9.44772 8 10 8Z" fill="black" fill-rule="evenodd"/><path clip-rule="evenodd" d="M14 8C14.5523 8 15 8.44772 15 9V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V9C13 8.44772 13.4477 8 14 8Z" fill="black" fill-rule="evenodd"/><path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5Z" fill="black"/><path d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V4H8V3Z" fill="black"/></svg>
									</button>
								</div>
							</div>
						</div>
					</div>`;
					cartProducts.insertAdjacentHTML("afterbegin", newCartProductContainer);
					const cartProductContainer = cartProducts.firstElementChild;
					cartProductContainer.dataset.chgProductId = book.id;
					cartProductContainer.dataset.chgProductPrice = book.attributes.price;
					cartProductContainer.dataset.chgProductStatus =book.attributes.status;
					cartProductContainer.dataset.chgProductOldPrice = book.attributes.oldPrice;
					cartProductContainer.dataset.chgProductName = book.attributes.title;
					amountWithoutDiscount += +cartProductContainer.dataset.chgProductOldPrice;
					amountDiscount += +cartProductContainer.dataset.chgProductOldPrice - +cartProductContainer.dataset.chgProductPrice;
					amount += +cartProductContainer.dataset.chgProductPrice;
					const id = cartProductContainer.dataset.chgProductId;
					const likeButton = cartProductContainer.querySelector(".favourite-button");

					// Определям находится ли товар в избранном и меняем кнопку лайка
					if (localStorage.getItem(`book_${id}`)) {
						likeButton.classList.add("favourite-button-active");
						cartProductContainer.dataset.chgFavouritesStatus = "true";
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

				cartProductContainer.querySelector(".cart-product-title__head").textContent = book.attributes.title;
				cartProductContainer.querySelector(".cart-product-title__author").textContent = (book.attributes.authors[0]?.firstName ?? "") + " " + (book.attributes.authors[0]?.lastName ?? "");
				cartProductContainer.querySelector(".cart-img").src = `..\\img\\books\\${packageCategory[indexCategory]}\\${id}.jpg`;
				cartProductContainer.querySelector(".cart-img").alt = `${book.attributes.title}`;
				cartProductContainer.querySelector(".product-price__old").textContent = book.attributes.oldPrice + " ₽";
				cartProductContainer.querySelector(".product-price__value").textContent = book.attributes.price + " ₽";
				cartProductContainer.querySelector(".count").textContent = localStorage.getItem(`book_in_cart_${id}`);
				// cartProductContainer.querySelector(".product-card-price-discount").textContent = book.attributes.discount + "%";
				isFound=true;
				break;
      }
    }
		if(isFound){
			break;
		}
		indexCategory++;
  }
	indexCategory = 0;
}
const cartWrapper = document.querySelector(".cart-wrapper");
const cartContent = document.querySelector(".cart-content");

function renderEmptyCart(){
	cartContent.remove();
	const cartEmptyContainerString = `
		<div class="cart-empty-container">
          <img class="empty-chest-img" src="../img/empty-chest.png" alt="">
          <h3 class="empty-title-cart"> В корзине пока пусто</h3>
          <p class="empty-text-cart">Воспользуйтесь каталогом или<br> поиском, чтобы найти товары</p>
		</div>
	`;
	cartWrapper.insertAdjacentHTML("beforeend", cartEmptyContainerString);
}

function renderAmount(){
	const amountWithoutDiscountTitle = document.querySelector(".amount-without-discount .info-item__title");
	const amountWithoutDiscountValue = document.querySelector(".amount-without-discount .info-item__value");
	const amountDiscountTitle = document.querySelector(".amount-discount .info-item__title");
	const amountDiscountValue = document.querySelector(".amount-discount .info-item__value");
	const amountTitle = document.querySelector(".amount .info-item__title");
	const amountValue = document.querySelector(".amount .info-item__value");
	amountWithoutDiscountTitle.textContent = `Всего товаров: ${localStorage.getItem("countInCart")}`;
	amountWithoutDiscountValue.textContent = `${amountWithoutDiscount} ₽`;
	amountDiscountTitle.textContent = "Скидка";
	amountDiscountValue.textContent = `-${amountDiscount} ₽`;
	amountTitle.textContent = 'Итого'
	amountValue.textContent = `${amount} ₽`;
}

if(amount==0){
	renderEmptyCart();
}else{
	renderAmount();
}


const countItemInCart = document.querySelector("#count-item-in-cart");
const deleteButtons = document.querySelectorAll(".cart-delete-button");
deleteButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		const cartProductContainer = btn.closest(".cart-product-container");
		amountWithoutDiscount -= +cartProductContainer.dataset.chgProductOldPrice * +cartProductContainer.querySelector(".count").textContent;
		amount -= +cartProductContainer.dataset.chgProductPrice * +cartProductContainer.querySelector(".count").textContent;
		amountDiscount -= amountWithoutDiscount - amount;
		localStorage.removeItem(`book_in_cart_${cartProductContainer.dataset.chgProductId}`);
		localStorage.setItem("countInCart", `${+localStorage.getItem("countInCart") - +cartProductContainer.querySelector(".count").textContent}`);
		if(amount == 0){
			renderEmptyCart();
		}
		else{
			renderAmount();
		}
		// localStorage.setItem("countInCart", `${+localStorage.getItem("countInCart")- 1}`);
		countItemInCart.textContent = localStorage.getItem("countInCart");
		if (+localStorage.getItem("countInCart") == 0){
			countItemInCart.style.display = "none";
		}
		cartProductContainer.remove();
	});
});


//Количество одинаковых товаров
const cartProductContainers = document.querySelectorAll(".cart-product-container");
cartProductContainers.forEach((item)=>{
	const minusBtn = item.querySelector(".count-minus");
	const count = item.querySelector(".count");
	const plusBtn = item.querySelector(".count-plus");
	minusBtn.addEventListener("click",()=>{
		if (+count.textContent != 1){
			count.textContent = +count.textContent - 1;
			console.log();
			const id = item.dataset.chgProductId;
			localStorage.setItem(`book_in_cart_${id}`, +localStorage.getItem(`book_in_cart_${id}`) - 1);
			localStorage.setItem("countInCart", +localStorage.getItem("countInCart") - 1);
			
			amount -= +item.dataset.chgProductPrice;
			item.querySelector(".product-price__value").textContent =  `${+parseInt(item.querySelector(".product-price__value").textContent) - +item.dataset.chgProductPrice} ₽`;

			amountWithoutDiscount -= +item.dataset.chgProductOldPrice;
			item.querySelector(".product-price__old").textContent =  `${+parseInt(item.querySelector(".product-price__old").textContent) - +item.dataset.chgProductOldPrice}  ₽`;

			amountDiscount = amountWithoutDiscount - amount;
			renderAmount();
		}
	});
	plusBtn.addEventListener("click",()=>{
		if (+count.textContent != 99){
			count.textContent = +count.textContent + 1;
			const id = item.closest(".cart-product-container").dataset.chgProductId;
			localStorage.setItem(`book_in_cart_${id}`, +localStorage.getItem(`book_in_cart_${id}`) + 1);
			localStorage.setItem("countInCart", +localStorage.getItem("countInCart") + 1);
			amount += +item.dataset.chgProductPrice;
			item.querySelector(".product-price__value").textContent =  `${+parseInt(item.querySelector(".product-price__value").textContent) + +item.dataset.chgProductPrice} ₽`;

			amountWithoutDiscount += +item.dataset.chgProductOldPrice;
			item.querySelector(".product-price__old").textContent =  `${+parseInt(item.querySelector(".product-price__old").textContent) + +item.dataset.chgProductOldPrice}  ₽`;
			
			amountDiscount = amountWithoutDiscount - amount;
			renderAmount();
		}
	});
});



const svg1 = `
<svg  height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g data-name="Layer 54" id="Layer_54">
        <path
        class="cls-1"
        d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
    />
    </g>
</svg>
`;

const svg2 = `
<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"/></svg>
`;
const favouriteButtons = document.querySelectorAll(".favourite-button");
favouriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.closest(".cart-product-container").dataset.chgProductId;
    if (
      !(
        button.closest(".cart-product-container").dataset.chgFavouritesStatus ==
        "true"
      )
    ) {
      button.classList.add("favourite-button-active");
      button.querySelector("svg").remove();
      button.insertAdjacentHTML("afterbegin", svg2);
      button.closest(".cart-product-container").dataset.chgFavouritesStatus =
        "true";
      localStorage.setItem(`book_${id}`, "книга в избанном");
      localStorage.setItem("countFavourites", `${+localStorage.getItem("countFavourites")+ 1}`);
      countFavourites.textContent = localStorage.getItem("countFavourites");
      countFavourites.style.display = "block";
    } else {
      button.classList.remove("favourite-button-active");
      button.querySelector("svg").remove();
      button.insertAdjacentHTML("afterbegin", svg1);
      button.closest(".cart-product-container").dataset.chgFavouritesStatus =
        "false";
      localStorage.removeItem(`book_${id}`);
      localStorage.setItem("countFavourites", `${+localStorage.getItem("countFavourites")- 1}`);
      countFavourites.textContent = localStorage.getItem("countFavourites");
      if (countFavourites.textContent == 0){
        countFavourites.style.display = "none";
      }
    }
  });
});
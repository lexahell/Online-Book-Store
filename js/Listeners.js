const actionButtons = document.querySelectorAll(".action-button");
const favouriteButtons = document.querySelectorAll(".favourite-button");
const countItemInCart = document.querySelector("#count-item-in-cart");
const countFavourites = document.querySelector("#count-favourites");
// localStorage.clear();
countItemInCart.textContent = localStorage.getItem("countInCart");
if(countItemInCart.textContent != 0){
  countItemInCart.style.display = "block";
}
countFavourites.textContent = localStorage.getItem("countFavourites");
if(countFavourites.textContent != 0){
  countFavourites.style.display = "block";
}
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

favouriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.closest(".product-card-slider").dataset.chgProductId;
    if (
      !(
        button.closest(".product-card-slider").dataset.chgFavouritesStatus ==
        "true"
      )
    ) {
      button.classList.add("favourite-button-active");
      button.querySelector("svg").remove();
      button.insertAdjacentHTML("afterbegin", svg2);
      button.closest(".product-card-slider").dataset.chgFavouritesStatus =
        "true";
      localStorage.setItem(`book_${id}`, "книга в избанном");
      localStorage.setItem("countFavourites", `${+localStorage.getItem("countFavourites")+ 1}`);
      countFavourites.textContent = localStorage.getItem("countFavourites");
      countFavourites.style.display = "block";
    } else {
      button.classList.remove("favourite-button-active");
      button.querySelector("svg").remove();
      button.insertAdjacentHTML("afterbegin", svg1);
      button.closest(".product-card-slider").dataset.chgFavouritesStatus =
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

actionButtons.forEach((button) => {
  const id = button.closest(".product-card-slider").dataset.chgProductId;
  button.addEventListener("click", () => {
    if (
      !(
        button.closest(".product-card-slider").dataset.chgProductStatus ==
        "preOrder"
      )
    ) {
      button.classList.add("action-button-active");
      button.textContent = "Оформить";
      button.closest(".product-card-slider").dataset.chgProductStatus = "preOrder";
      localStorage.setItem(`book_in_cart_${id}`, "книга в корзине");
      localStorage.setItem("countInCart", `${+localStorage.getItem("countInCart")+ 1}`);
      countItemInCart.textContent = localStorage.getItem("countInCart");
      countItemInCart.style.display = "block";
    } else {
      // localStorage.removeItem(`book_in_cart_${id}`);
      // button.closest(".product-card-slider").dataset.chgProductStatus = "canBuy";
      // button.classList.remove("action-button-active");
      document.location = "../Кладезь/html/cart.html";
      // localStorage.setItem("countInCart", `${+localStorage.getItem("countInCart")- 1}`);
      // countItemInCart.textContent = localStorage.getItem("countInCart");
      // if (countItemInCart.textContent == 0){
      //   countItemInCart.style.display = "none"; 
      // }
    }
  });
});
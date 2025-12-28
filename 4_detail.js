'use strict'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const queryId = urlParams.get('id');

const products = JSON.parse(localStorage.getItem('products'));
let itemQty = 1;

const img = document.querySelector('.img');
const productHeading = document.querySelector('.product-heading');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');
const productQty = document.querySelector('.product-qty');
const cart = document.querySelector('.cart');

const qtyDecreaseBtn = document.querySelector('.decrease-btn');
const qtyIncreaseBtn = document.querySelector('.increase-btn');
const buyNowBtn = document.querySelector('.buy-now-btn');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cartCloseBtn = document.querySelector('.cart-close-btn');

const cartIncreaseBtn = document.querySelectorAll('.cart-increase-btn');
const cartDecreaseBtn = document.querySelectorAll('.cart-decrease-btn');
const cartProductQty = document.querySelectorAll('.cart-product-qty');
const removeItemBtn = document.querySelectorAll('.remove-item-btn');



const searchedProduct = products.find((el) => {
    if(el.id == queryId){
        return el;
    }
});

img.src = searchedProduct.img;
img.alt = `${searchedProduct.title} image`;
productHeading.textContent = searchedProduct.title;
productDescription.textContent = searchedProduct.description;
productPrice.textContent = `Rs.${searchedProduct.price}`;
productQty.textContent = itemQty;

console.log(productQty);

qtyDecreaseBtn.addEventListener('click', () => {
    if(itemQty > 1){
        itemQty -= 1;
    }

    productQty.textContent = itemQty;
});

qtyIncreaseBtn.addEventListener('click', () => {
    if(itemQty < 10){
        itemQty += 1;
    }

    productQty.textContent = itemQty;
})

cartCloseBtn.addEventListener('click', () => {
    cart.classList.remove('cart');
    cart.classList.add('cart-close');
});

console.log(cartProductQty);

cartIncreaseBtn.forEach((el, index) => {

    el.addEventListener('click', () => {
        cartProductQty[index].textContent = 10;
    });

});


cartIncreaseBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if(itemQty < 10){
            itemQty += 1;
        }

        cartProductQty[index].textContent = itemQty;
    });
});
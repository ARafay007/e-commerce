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
const cartItemsContainer = document.querySelector('.cart-items-container');

const qtyDecreaseBtn = document.querySelector('.decrease-btn');
const qtyIncreaseBtn = document.querySelector('.increase-btn');
const buyNowBtn = document.querySelector('.buy-now-btn');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cartCloseBtn = document.querySelector('.cart-close-btn');

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

const accessCartItems = () => {
    const cartIncreaseBtn = document.querySelectorAll('.cart-increase-btn');
    const cartDecreaseBtn = document.querySelectorAll('.cart-decrease-btn');
    const cartProductQty = document.querySelectorAll('.cart-product-qty');
    const removeItemBtn = document.querySelectorAll('.remove-item-btn');

    cartDecreaseBtn.forEach((el, index) => {
        el.addEventListener('click', () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));

            cartItems.forEach((item) => {
                if(item.id == el.dataset.itemid){
                    item.qty = item.qty - 1;
                    cartProductQty[index].textContent = item.qty;
                }
            });

            localStorage.setItem('cartItems', JSON.stringify(cartItems));

        });

    });


    cartIncreaseBtn.forEach((el, index) => {
        el.addEventListener('click', () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));

            cartItems.forEach((item) => {
                if(item.id == el.dataset.itemid){
                    item.qty = item.qty + 1;
                    cartProductQty[index].textContent = item.qty;
                }
            });

            localStorage.setItem('cartItems', JSON.stringify(cartItems));

        });
    });
};

const renderCartItems = () => {
    const cartData = JSON.parse(localStorage.getItem('cartItems'));

    if(cartData){
        cartData.forEach((el) => {
            cartItemsContainer.insertAdjacentHTML('beforeend', `
                <div class="cart-item">
                    <div class="cart-item-detail">
                        <span>${el.title}</span>
                        <span>Rs.${el.price}</span>
                    </div>
                    <div class="cart-item-functionality">
                        <div class="qty-btn-container">
                            <button class="cart-decrease-btn" data-itemId=${el.id}>-</button>
                            <span class="cart-product-qty" data-itemId=${el.id}>${el.qty}</span>
                            <button class="cart-increase-btn" data-itemId=${el.id}>+</button>
                        </div>
                        <div>
                            <button class="remove-item-btn" data-itemId=${el.id}>Remove item</button>
                        </div>
                    </div>
                </div>
            `)
        });
    }
};

renderCartItems();

addToCartBtn.addEventListener('click', () => {
    let cartData = JSON.parse(localStorage.getItem('cartItems'));
    searchedProduct.qty = 1;
    
    if(!cartData){
        cartData = [searchedProduct];

        localStorage.setItem('cartItems', JSON.stringify(cartData));
    }
    else{
        cartData.push(searchedProduct);
        localStorage.setItem('cartItems', JSON.stringify(cartData));
    }

    renderCartItems();

    accessCartItems();
});

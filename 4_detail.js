'use strict'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const queryId = urlParams.get('id');

console.log(queryId);

const products = JSON.parse(localStorage.getItem('products'));
// console.log(products);

// for(let i = 0; i < products.length; i++){
//     if(products[i].id == queryId){
//         console.log(products[i]);
//         break;
//     }
// }

const searchedProduct = products.find((el) => {
    if(el.id == queryId){
        return el;
    }
});

console.log(searchedProduct);


// const ary = [1,2,3,2,,4,45,5];

// for (let i = 0; i < ary.length; i++) {
//     if(ary[i] === 2){
//         console.log('for', ary[i]);
//         break;
//     }
// }

// const searchedElement = ary.find((el) => {
//     if(el === 2){
//         return el;
//     }
// });

// console.log('find', searchedElement);
'use strict'

const cardsDetail = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Laptop',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 100,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Bag',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 50,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Lamp',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 60,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Shirt',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 10,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Pen',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 1,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Mobile',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 15,
    },
];

const container = document.querySelector('.container');

const renderProductsCard = () => {
    for (let i = 0; i < cardsDetail.length; i++) {
        const card = `
            <div class="card">
                <div class="card-image-div">
                    <img src=${cardsDetail[i].img} alt="card">
                </div>
                <div class="card-details">
                    <p class="card-title">${cardsDetail[i].title}</p>
                    <p class="card-description">${cardsDetail[i].description}</p>
                    <p class="card-price">$${cardsDetail[i].price}</p>
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', card);
    }


};

renderProductsCard();

const cards = document.querySelectorAll('.card');

// console.log(cards);

// for(let i=0; i<cards.length; i++){
//     cards[i].addEventListener('click', () => {
//         console.log(i);
//     })
// }

const ary = [1,2,3,4,6,76,78];
const stringifyAry = JSON.stringify(ary);

console.log(ary);
// console.log(stringifyAry);
// console.log(JSON.parse(stringifyAry));

localStorage.setItem('Name', ['abc', 'xyz', 123]);

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        window.location.href = './4_detail.html';
    });
});

// console.log(localStorage.getItem('Name'));
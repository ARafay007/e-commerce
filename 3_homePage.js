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
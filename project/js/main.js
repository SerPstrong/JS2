// const products = [
//     {id: 1, title: 'Notebook', price: 20000},
//     {id: 2, title: 'Mouse', price: 1500},
//     {id: 3, title: 'Keyboard', price: 5000},
//     {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="buy-btn">Добавить в корзину</button>
//             </div>`;
// };
//
// const renderProducts = list => {
//     document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price));
// };
//
// renderProducts(products);

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

document.querySelector('.app').innerHTML = `<header>
    <div class="container">
        <button class="btn-cart" type="button">Корзина</button>
    </div>
    </header>
    <main>
        <div class="container">
            <div class="products"></div>
        </div>
    </main>`;

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
};

renderProducts(products);

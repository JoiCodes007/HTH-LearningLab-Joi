const myObject = {
    name: 'shopping cart' , 
    items: [
    { name: 'Pomegranite', price: .050}, 
    { name: 'Mango', price:1.00}, 
    { name: 'Peaches', price: 0.75}, 
    { name: 'Asaian Pear', price: 0.50}, 
    { name: 'Watermelon', price: 3.00}

    ]

}; 

const productcontainer = document.createElement("store items")
products.forEach(product=> {
       const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');

    productDiv.innerHTML = `
        <span class="product-name">${product.name}</span>
        <span class="product-price">$${product.price.toFixed(2)}</span>
        <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
    `;
    productContainer.appendChild(productDiv);
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.productId; 
        addToCart(productId);
    });
});

function addToCart(productId) {
    console.log(`Product with ID ${productId} added to cart.`);
    updateCartDisplay();
}

function updateCartDisplay() {
}


function getTotalPrice(myObject) {
    let total = 0;
    for (let i = 0; i < myObject.items.length; i++) {
        total += myObject.items[i].price;
    }
    return total;
}; 

console.log(getTotalPrice(myObject));




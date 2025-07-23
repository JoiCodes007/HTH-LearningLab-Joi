const shoppingcart = require('./shopoping cart');
describe ('shoppingcart', () => { 
    let cart; //
    beforeEach ((() => {
        cart = new shoppingcart();

}),

test ('should initialize an empty cart', ()=> {
    expect (cart.getitemscount()).toBe(0); 
    expect (cart.gettotal()).toBe (0);
}),

test ('should add items to cart', () => {
const item1 = { name: 'Pomegranite', price: .050}; 
cart.addItem1(item1);
expect (cart.getItemCount()).toBe(1);
expect (cart.getTotal()).toBe(.050);

test ('should add items to cart', () => {
const item2 = { name: 'Mango', price: 1.00}; 
cart.addItem2(item2);
expect (cart.getItemCount()).toBe(2);
expect (cart.getTotal()).toBe(1.00);

test ('should add items to cart', () => {
const item1 = { name: 'Peaches', price: 0.75}; 
cart.addItem3(item3);
expect (cart.getItemCount()).toBe(3);
expect (cart.getTotal()).toBe(0.75);

test ('should add items to cart', () => {
const item4 = { name: 'Asian Pear', price: 0.50}; 
cart.addItem4(item4);
expect (cart.getItemCount()).toBe(4);
expect (cart.getTotal()).toBe(0.50);
});

test ('should add items to cart', () => {
const item5 = { name: 'Watermelon', price: 3.00}; 
cart.addItem5(item5);
expect (cart.getItemCount()).toBe(5);
expect (cart.getTotal()).toBe(3.00);
});

test ('should calculate the correct total price', () => {
    cart.addItem ({name: 'Pomegranite', price: .050});
    cart.addItem ({name: 'Mango', price: 1.00}); 
    cart.addItem ({name: 'Peaches', price: 0.75 }); 
    cart.addItem ({name: 'Asain Pear', price: 0.50});
    cart.addItem ({name: 'Watermelon', price: 3.00});

    expect (cart.getTotal().toBe(5.3));
})})})}))})
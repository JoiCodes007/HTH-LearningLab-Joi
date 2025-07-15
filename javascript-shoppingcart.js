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

function getTotalPrice(myObject) {
    let total = 0;
    for (let i = 0; i < myObject.items.length; i++) {
        total += myObject.items[i].price;
    }
    return total;
}; 

console.log(getTotalPrice(myObject));


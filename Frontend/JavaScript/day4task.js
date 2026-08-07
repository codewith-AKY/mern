let productItems = [
    {
        id: 1,
        name: "Headphone",
        price: 1500,
        quantity: 3,
    },
    {
        id: 2,
        name: "SmartPhone",
        price: 15000,
        quantity: 2,
    },
    {
        id: 3,
        name: "Watch",
        price: 12000,
        quantity: 1,
    },
    {
        id: 4,
        name: "Fan",
        price: 2500,
        quantity: 2,
    },
    {
        id: 5,
        name: "Mouse",
        price: 500,
        quantity: 3,
    }
];
let sum=0;
let totalPrice = productItems.map((product) => {
    return sum += product.price * product.quantity;
});

console.log("Total Price:", totalPrice[4]);
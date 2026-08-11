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
    },{
        id:6,
        name:"keyboard",
        price:400,
        quantity:0
    },
    {
        id:7,
        name:"pendrive",
        price:600,
        quantity:0
    }
];
 let sum=0;
 let totalPrice = productItems.map((product) => {
     return sum = product.price * product.quantity;
 });

let ava_Product=productItems.filter(product=>product.quantity>0).map((product)=>{
    return{
       id: product.id,
        name:product.name
    }
})
console.log("Available product are"+ava_Product[0].id);
    console.log(ava_Product);


console.log("Total Price:", totalPrice[4],totalPrice[2]);
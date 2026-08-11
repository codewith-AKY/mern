let orders=[{id:101,customer:"Anil",amount:100000,status:"paid"},
    {id:102, customer:"Ram",amount:30000,status:"pending"},
    {id:103,customer:"Sita",amount:20000,status:"paid"},
    {id:104,customer:"Anish",amount:25000,status:"cancelled"},
    {id:105,customer:"Gita",amount:12000,status:"paid"}
];
//use only a for loop and if else calucate
//total number of order
//total number of paid orders
// number of pending orders
//number of cancelled orders
//prints the customer name amount for every paid order
let totalOrders=0;
let paidAmount=0;
let pendingOrders=0;
let cancelledOrders=0;

console.log("Paid Orders:");

for(let i=0;i<orders.length;i++){
    totalOrders++;

    if(orders[i].status=="paid"){
        paidAmount=paidAmount+orders[i].amount;
        console.log(orders[i].customer+"-Rs."+orders[i].amount);

    }
    else if(orders[i].status=="pending"){
        pendingOrders++;
    }
    else if(orders[i].status=="cancelled"){
        cancelledOrders++;
    }
}
console.log("total Order:",totalOrders);
console.log("Paid Amount:",paidAmount);
console.log("pending orders:",pendingOrders);
console.log("Cancelled Orders:",cancelledOrders);

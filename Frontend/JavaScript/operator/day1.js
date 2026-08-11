//operator
//operators are symbols used to perform operations like addition,substraction,multiplication etc.

//Arithmetic operators
//add,sub,multiplication,division.modulus(%)


console.log(10+"10");//output 1010
console.log(20*2);
console.log(20-2);
console.log(20%2);
console.log(30/"5");


let a=10;
let b=30;
let c=a+b;
console.log(c);


//logical operators Symbols
//logical AND && If any one of condiition is false then output becomes false


let age=20;
let eligibleVote=true;

if(age>=18 && eligibleVote){
    console.log("You are eligible to vote");
}


//logical OR - ||. At least one have to true

let isStudent=true;
let isEmployee=false;
if(isStudent || isEmployee){
    console.log("you are elgible")
}

let ages = 20;
let hasLicense = true;
let hasPermission = false;

if (age >= 18 && hasLicense || hasPermission) {
    console.log("Allowed");
}

//logical NOT - !  
console.log(!false);


//
console.log(a===b);
console.log(20==="30");
console.log(40===40);
console.log(10>=20);
console.log(30!=90);
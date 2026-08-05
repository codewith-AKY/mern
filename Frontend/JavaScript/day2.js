let name="Anil Kumar Yadav"
name="AK"
console.log("Name :"+name);
console.log(typeof name); // which data types

//let,const and var
const age=20;
console.log("Age :"+age);
console.log(typeof age);
//

var address="kathmandu"
console.log("Address :"+address);
console.log(typeof address);

///Data types in javascript
//1. Primitive data types
// a. string
// b. number
// c. boolean
// d. null
// e. undefined

let  isLoggedin=true;
console.log(isLoggedin);
console.log(typeof isLoggedin);

let isMarried;
console.log(typeof isMarried);

let studentData = {
    name: "Anil",
    address: {
        city: "Kathmandu",
        village: "Chapur"
    },
    age: 20,
    isMarried: true,
};

console.log(studentData);
console.log(studentData.address);
console.log(studentData.address.city);
console.log(studentData.address.village);
console.log(studentData);
console.log(typeof studentData); // object

console.log(studentData.name); 
console.log(studentData.age);
console.log(studentData.address);

console.log(studentData.name="Anky");
console.log(studentData.age=10);
console.log(studentData.address="Kathmandu");

delete studentData.age;
console.log(studentData); //delete the data

  // Anil

console.log(typeof studentData.name);       // string
console.log(typeof studentData.address);    // string
console.log(typeof studentData.age);        // number
console.log(typeof studentData.isMarried);  // boolean


//2. Non-primitive data types
// a. object
//b.array
//c.function
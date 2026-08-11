// Array
// let fruits = ["apple", "banana","orange"]
// console.log(fruits[0]);

// fruits[0]= "mango";
// console.log(fruits);

// fruits[3] = "apple";
// console.log(fruits);

// delete fruits[1]
// console.log(fruits);

// create an array of 5 students data with details such as name, address, faculty and batch. 


let studentData = [
    { student : 1,
        name : "ram",
        address : "bhaktapur",
        faculty : "it", 
        batch : 2075
    },
   {    student: 2,
        name : "hari",
    address : "kathmandu",
    faculty : "it",
    batch : 2078

    },
      {    student: 3,
        name : "shyam",
    address : "kathmandu",
    faculty : "it",
    batch : 2078

    },
      {    student: 4,
        name : "sita",
    address : "kathmandu",
    faculty : "it",
    batch : 2078

    },
      {    student: 5,
        name : "avash",
    address : "kathmandu",
    faculty : "it",
    batch : 2078

    },
    {
        student: 6,
        name: "ramesh",
        address: "lalitpur",
        faculty: "it",
        batch: 2076
    }
]

 console.log(studentData);

 console.log(studentData[0]);
console.log(studentData[4]);
 console.log(studentData[4].name);

// console.log(student);
// console.log(student[5]);
delete studentData[5].address
 console.log(studentData[5]);



// map syntax
// Array.map(() => {
    
// })

// let numbers = [1, 2, 3, 4, 5]
// numbers.forEach(function(num){
//     console.log(num * 5);
    
// })

let number = [1, 2, 3, 4, 5]
let result=number.map((num) => {
    return num * 5
})

let even = number.filter((num) => {
    return num % 2 == 0
})

console.log(result);
console.log(even);


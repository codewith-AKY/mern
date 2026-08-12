//function
//Function are reusable blocks of code that performs a specific task

//function name(para){}
function add(a = 10, b = 40) {
    return a + b;
}
console.log(add()); // Outputs: 50


function sayHello(name){
    console.log("hello,"+name)
}
sayHello("Anil")

//function with return type

function Hello(name){
    return("hello,"+"Anil");
}
console.log(Hello());

//default parameter

function helloo(name="Anil"){
console.log("hey"+name);
}
let=helloo();


//function arrow
let num=5;
const square=(num)=>{
     return num*num;
};
console.log(square(num));
//
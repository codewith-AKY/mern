//Find thelargest of two number using  function
let num1=Number(prompt("Enter the first num:"));
let num2=Number(prompt("Enter the second num:"));

function max(num1,num2){
    if(num1>num2){
        alert("num1 is greater:"+num1);
    }
    else{
        alert("Greater is num2:"+num2);
    }
}
max(num1,num2);
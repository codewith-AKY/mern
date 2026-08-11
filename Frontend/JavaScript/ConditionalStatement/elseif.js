// let a=10,b=20,c=5;
// let max;
// if(a> b&& a>c){
//     max=a;
// }
// else if(b>a && b>c){
//     max=b;
// }
// else{
//     max=c;
// }



let marks= prompt("Enter your marks 0-100:");
if(marks>=90 && marks<=100){
    alert("Congrats u achieved A+");
}
else if(marks>=80 && marks<90){
    alert("Congrats u achieved A");

}
else if(marks>=70 && marks<80){
    alert("Congrats u achieved B+");
}
else if(marks>=60 && marks<70){
    alert("Congrats u got B");
}
else if(marks>=50 && marks<60){
    alert("You got C");
}
else if(marks>45 && marks<50){
    alert(" You are just pass D");
}
else{
    alert("FAiled!!!");
}
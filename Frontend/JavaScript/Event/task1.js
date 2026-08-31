//create a counter app with two function increase and decrease.Also display count vlaue whenever click the respective button and also count value should be negative .

let count=0;
function increase(){
    count++;
    document.getElementById("count").innerText=count;
}
function decrease(){
    if(count>0){
      count--;
    }

    document.getElementById("count").innerText=count;
}
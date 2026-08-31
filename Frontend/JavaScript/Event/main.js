//events
// events are actions that happen on a browser like clicking a buton 
//inline events 
//dom events
//events addEventListner

// let element =document.getElementById("btn")
// element.addEventListener("click",function(){
//     alert("Hello World")
// })
// let element =document.getElementById("btn")
// element.addEventListener("mouseover",function(){
//     alert("Hello World")
// })

let input=document.getElementById("key") 
input.addEventListener("keydown",function(){
   console.log(event.type,event.key)
})
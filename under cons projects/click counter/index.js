// set initial value to 0
let count = 0;

const decrease = document.querySelector(".decrease-1");
const increase = document.querySelector(".increase-1");
const reset = document.querySelector(".reset-1");
let number_display = document.querySelector("h1")


decrease.addEventListener("click",function(){
   let i = 1;
   number_display.innerHTML -= i
})
increase.addEventListener("click",function(){
  let i = 1;
  let num = Number(number_display.innerHTML)
  
   num += i
   number_display.innerHTML = num;
})
reset.addEventListener("click",function(){
   let i = 0;
   number_display.innerHTML = i
})

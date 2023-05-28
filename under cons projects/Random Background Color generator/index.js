const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","f"]
const btn = document.querySelector("button");
const head = document.querySelector("h1")
const body = document.querySelector("body")

btn.addEventListener("click",function(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        let rand = Math.floor(Math.random()*hex.length)
        hexColor += hex[rand]
    }

 body.style.backgroundColor = hexColor;
 head.textContent = "Background color:"+hexColor;

})
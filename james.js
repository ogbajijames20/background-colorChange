let myButton=document.getElementById("btn");
let body=document.getElementById("main")

myButton.addEventListener("click", changeBgColor);
function changeBgColor() {
let color= ["red", "yellow", "blue", "pink", "orange", "purple", "grey", "aqua", "green", "hotpink"];
let num= Math.floor(Math.random()*color.length);
let myColor=color[num];
main.style.backgroundColor=myColor;
console.log(myColor);
console.log(num);
}
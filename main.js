const screenTxt = document.querySelector(".textarea");
//del 
const delBtn = document.querySelector(".del");
delBtn.addEventListener("click",()=>{
  screenTxt.value=screenTxt.value.slice(0,-1);
  });
//equalto
const equaltoBtn = document.querySelector(".equalto");
equaltoBtn.addEventListener("click", () => {
  screenTxt.value = eval(screenTxt.value)
})

// active1
let two =document.getElementById("two");
two.addEventListener("click", function(){
  // console.log("hi");
  let body = document.querySelector('body');
  body.classList.add('active1');
  body.classList.remove('active2');
})

let one =document.getElementById("one");
one.addEventListener("click", function(){
  // console.log("hi");
  let body = document.querySelector('body');
  body.classList.remove('active1');
  body.classList.remove('active2');
 })

 let three = document.getElementById("three");
 three.addEventListener("click", function(){
  //  console.log("hi");
  let body = document.querySelector('body');
  body.classList.add('active2');
  body.classList.remove('active1');

 })
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
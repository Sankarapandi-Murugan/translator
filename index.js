var btnTranslate = document.querySelector("btnTranslate");
console.log(btnTranslate);

btnTranslate.addEvenListner("click","clickEventHandler");

function clickEventHandler(){
  console.log("hi");
}
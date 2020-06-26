const modal_main = document.getElementById("modal_main");
const firstStatus = modal_main.className;
const nextStatus = "modal modal_active";
const modal_success = document.getElementById("modal_success");


const close = document.querySelectorAll(".modal__close_times");
const newWin = document.querySelectorAll(".show-success");


window.onload= () => modal_main.className = nextStatus;


let closeArray = Array.from(close); 

closeArray.forEach((el) =>{
    el.onclick = () => (modal_main.className = firstStatus) && (modal_success.className = firstStatus)});


newWin[0].onclick = function(){
   modal_main.className = firstStatus;
   modal_success.className = nextStatus;
}


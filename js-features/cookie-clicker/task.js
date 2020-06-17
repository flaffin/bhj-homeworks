let clicker = document.getElementById("clicker__counter");
let speed = document.getElementById("click_speed");
let cook = document.getElementById("cookie");
let clickCookie = parseInt(clicker.textContent);
let clickSpeed = parseInt(speed.textContent);

let clickNam = 0;
let data = [];

cook.onclick = function (){
    
    clickCookie = clickCookie + 1;
    clicker.textContent = clickCookie;

    if  ((clickNam % 2) === 0) {
      cook.width = 300;
    } else {
      cook.width = 200;
    }
   
     data[clickNam] = Date.now();

     if (data.length > 1){
        let rezult = (data[clickNam] - data[clickNam-1]) / 1000;
        clickSpeed = 1 / rezult;
        speed.textContent = clickSpeed.toFixed(2);
     }

    clickNam = clickNam + 1;
}

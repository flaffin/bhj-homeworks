// Задача 1.

// let time = document.getElementById("timer").textContent;

// function victory(time){
//     let timeId = setTimeout(() => {
//         document.getElementById("timer").textContent = time ;
//            if (time === 0){
//          alert("Вы победили в конкурсе");
//         clearTimeout(timeId);
//         return;
//     }

//  victory(time - 1);
//     }, 1000);
// }
// victory(time);

// Задача 2.

let time = document.getElementById("timer");

let hh = 00;
let mm = 05;
let ss = 30;

let recHh;
let recMm;
let recSs;

// time.textContent = `${hh} : ${mm} : ${ss}`;

function victory(ss){
        let timeId = setTimeout(() => {
       
            if (hh < 10) {
               recHh = "0" + hh;
            } else {
               recHh = hh;
            }
            if (mm < 10) {
               recMm = "0" + mm;
            } else {
               recMm = mm;
            }
            if (ss < 10) {
               recSs = "0" + ss;
            } else {
               recSs = ss;
            }

            time.textContent = `${recHh} : ${recMm} : ${recSs}`;
         
               if (ss === 0){
                     if (mm === 0) {
                        if (hh === 0){
                            alert("Вы победили в конкурсе");
                            clearTimeout(timeId);
                             return;
                        }  
                        hh = hh - 1;
                        mm = 59;
                     }
                     ss = 59;
                     mm = mm - 1;
        }
    
     victory(ss - 1);
        }, 1000);
    }
    victory(ss);



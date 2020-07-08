// Задача 1

// const rotatorCase = document.getElementsByClassName('rotator__case');
// const rotatorCaseArray = Array.from(rotatorCase); 


// const artSpeed  = rotatorCaseArray[1].getAttribute('data-speed');
// console.log(artSpeed);

// console.log(rotatorCaseArray);

// let length = rotatorCaseArray.length;

// console.log(length);

//  let sum = 0;

// function word (){

//     sum ++;
//     rotatorCaseArray[sum-1].className = "rotator__case";
//     if (sum === length){
//         sum = 0;
//     }
//     rotatorCaseArray[sum].className = "rotator__case rotator__case_active";

//     }

//  let timerId = setInterval(word, 1000); 


// Задача 2
const rotatorCase = document.getElementsByClassName('rotator__case');
// const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorCaseArray = Array.from(rotatorCase); 

let length = rotatorCaseArray.length;

function cycleWord(){


        rotatorCaseArray.forEach((element) => {

        let time = element.getAttribute('data-speed');
        element.style.color = element.getAttribute('data-color');


            function word (){

                rotatorCaseArray.forEach((el) => {
                    el.className = "rotator__case";
                });
      
                element.className = "rotator__case rotator__case_active";
        // let e = rotatorCaseArray.indexOf(element);
        // console.log(e);
        // console.log(element.textContent);
        // console.log(time);
                element.style.color = element.getAttribute('data-color');
        
            }

        let timerId = setTimeout(word, time); 
        });

}

 let timerInt = setInterval(cycleWord, 3000); 

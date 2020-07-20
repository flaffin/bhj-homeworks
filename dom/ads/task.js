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


let i=0;

function word(){

    if (i === (length - 1)){
        i=0
    }

    let time = rotatorCaseArray[i].getAttribute('data-speed');

    rotatorCaseArray[i].style.color = rotatorCaseArray[i].getAttribute('data-color');

        function wordWord(){

            rotatorCaseArray.forEach((el) => {
                el.className = "rotator__case";
            });
        
             rotatorCaseArray[i].className = "rotator__case rotator__case_active";

             i++;

            word()

        }
        let tId = setTimeout(wordWord, time);

}
word();

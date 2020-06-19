// Вариант 1

let hole = document.getElementsByClassName('hole');

let deadSum = 0;
let lostSum = 0;

for (let i = 0; i < 9; i++){


    hole[i].onclick = function(){

        if (hole[i].classList.contains('hole_has-mole')){
            deadSum = deadSum + 1;
            
            if (deadSum === 10) {
                alert('ПОБЕДА!');
                deadSum = 0;
                lostSum = 0;
            }
        }
        else {
            lostSum = lostSum + 1;
            if (lostSum === 5) {
                alert('Вы проиграли');
                deadSum = 0;
                lostSum = 0;
            }
        }
        dead.textContent = deadSum;
        lost.textContent = lostSum;
    }
}


// Вариант 2 с использованием делегирования


// let deadSum = 0;
// let lostSum = 0;

// function moleDead(event) {

// if (event.target.classList.contains('hole_has-mole')){

//                     deadSum = deadSum + 1;
                    
//                     if (deadSum === 10) {
//                         alert('ПОБЕДА!');
//                         deadSum = 0;
//                         lostSum = 0;
//                     }
//                 }
//                 else {
//                     lostSum = lostSum + 1;
//                     if (lostSum === 5) {
//                         alert('Вы проиграли');
//                         deadSum = 0;
//                         lostSum = 0;
//                     }
//                 }
//                 dead.textContent = deadSum;
//                 lost.textContent = lostSum;
//             }

   
//   const holeParent = document.querySelector('.hole-game');
//   holeParent.addEventListener('click', moleDead);




// const hole = document.getElementById("hole-game");

// const holleClass = className;

// console.log(document.div.className);


let hole = className = 'hole';

console.log(hole);

// getHole = index => document.getElementById(`hole${index}`),
//     deactivateHole = index =>
//       getHole( index ).className = 'hole',
//     activateHole = index =>
//       getHole( index ).className = 'hole hole_has-mole',



// const dead = document.getElementById("dead");
// const lost = document.getElementById("lost");

// let deadCalk = parseInt(dead.textContent);
// let lostCalk = parseInt(lost.textContent);

// console.log(deadCalk + 1);
// console.log(lostCalk + 1);



// const string = Array.from("holle9");

// index = string[5];
// console.log(string[5]);


// function getHole(index){


// }

// hole.onclick = function(){

//     hole.classList.contains( 'hole_has-mole' );

//     deadCalk = deadCalk + 1;
//     dead.textContent = deadCalk;
// }



// Советы
// Чтобы не создавать для каждой лунки отдельную переменную, напишите функцию getHole( index ), 
// которая по индексу будет возвращать нужный элемент. Обратите внимание, что идентификаторы лунок располагают для такого подхода
// Используйте цикл для задания обработчика для каждой лунки.
// Для проверки на наличие того или иного класса, используйте метод includes:
// hole.className.includes( 'hole_has-mole' );
// Более удобный вариант - использовать объект classList, с которым вы познакомитесь позднее. Он содержит удобный метод contains:

// hole.classList.contains( 'hole_has-mole' );
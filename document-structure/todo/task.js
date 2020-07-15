
const tasksAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

    // localStorage.clear();

tasksAdd.onclick = function (){
    return false;
}

let mas = [];

function addTask(){

    let i = localStorage.length;

     let str = taskInput.value;

      tasksList.insertAdjacentHTML('afterend', `
            <div class="task">
                <div class="task__title">
                    ${str}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
            
        `);

        mas[i] = document.querySelector('.task__remove');
    
        localStorage[i] = str;
   
        function taskRem() {
             this.closest('div').remove()
             delete localStorage[i];
        }
        mas[i].addEventListener('click', taskRem);

}
tasksAdd.addEventListener('click', addTask);


window.onload = function(){

if (localStorage.length > 0){
    for (let i = 0; i < localStorage.length; i++){

        tasksList.insertAdjacentHTML('afterend', `
            <div class="task">
                <div class="task__title">
                    ${localStorage[i]}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
            
        `);
        mas[i] = document.querySelector('.task__remove');

            function taskRem2() {
                this.closest('div').remove()
                delete localStorage[i];
            }
            mas[i].addEventListener('click', taskRem2); 
    }
}
}

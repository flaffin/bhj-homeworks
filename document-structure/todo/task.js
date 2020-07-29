
const tasksAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

    //   localStorage.clear();

tasksAdd.onclick = function (){
    return false;
}

let mas = [];
let j = 0;
let obj = [];

function addTask(){

   let  reternObj = JSON.parse(localStorage.getItem("myKey"));
        // были сохраненные значения
        if (! (reternObj === null)){

            let obj = reternObj;
            j = obj.length
            let str = taskInput.value;

                tasksList.insertAdjacentHTML('afterBegin', `
                    <div class="task">
                        <div class="task__title">
                            ${str}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                    </div>
                    
                    `);

            taskInput.value = '';
            obj[j] = str;
            let serialObj = JSON.stringify(obj);
            localStorage.setItem("myKey", serialObj);
             delit(j);    

        } else {

             let str = taskInput.value;
             taskInput.value = '';

                tasksList.insertAdjacentHTML('afterBegin', `
                <div class="task">
                    <div class="task__title">
                        ${str}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>
                
                `);
             obj[j] = str;
             let serialObj = JSON.stringify(obj);
             localStorage.setItem("myKey", serialObj); 
             delit(j);
        }
         j++;    

}
tasksAdd.addEventListener('click', addTask);

function delit(j){

    mas[j] = document.querySelector('.task__remove');
    console.log(mas[j])
        function taskRem() {
            this.closest('div').remove()
            let  objNew = JSON.parse(localStorage.getItem("myKey"));
            console.log(j)
            objNew.splice(j,1)

            let serialObj = JSON.stringify(objNew);
            localStorage.setItem("myKey", serialObj);
        }
    mas[j].addEventListener('click', taskRem); 
}


window.onload = function(){

    let  reternObj = JSON.parse(localStorage.getItem("myKey"));
    let j = 0;
    // let objNew = new Object;
    let objNew =[];

        if (! (reternObj === null)){

                for (let i=0; i < reternObj.length; i++){
                    tasksList.insertAdjacentHTML('afterBegin', `
                        <div class="task">
                            <div class="task__title">
                                ${reternObj[i]}

                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>
                        
                    `);

                objNew[j] = reternObj[i];
                delit(j);
                j ++ ;
            }
        let serialObj = JSON.stringify(objNew);
        localStorage.setItem("myKey", serialObj);
        }
}

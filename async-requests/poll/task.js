const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

localStorage.clear();

function onLoad() {

    let xhr = new XMLHttpRequest();
    xhr.open ('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.send();

    xhr.onreadystatechange = function (){
        if (this.readyState === 4){
        
            let answer = JSON.parse(xhr.responseText);

             let titleId = answer.id;
             let data = answer["data"];
             let title = data.title;
             pollTitle.textContent = title;

             let answersTitle = data.answers;

                for (let i = 0; i < answersTitle.length; i++){

                    pollAnswers.insertAdjacentHTML('beforeend',
                    `<button class="poll__answer">
                            ${answersTitle[i]}
                    </button>`);
                }

                const pollAnswer = document.querySelectorAll('.poll__answer');
                const pollAnswerArray = Array.from(pollAnswer);

                    pollAnswerArray.forEach((e) => {
                    e.onclick = function(){
                        alert('Спасибо, ваш голос засчитан!');

                        let index = pollAnswerArray.indexOf(e);

                        let xhr = new XMLHttpRequest;
                        xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                        xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                        xhr.send( `vote=${titleId}&answer=${index}` );

                        xhr.onreadystatechange = function (){
                            if (this.readyState === 4){
                                let answer2 = JSON.parse(xhr.responseText);

                                let children = Array.from(pollAnswers.children);
                                    children.forEach((el) => {
                                        pollAnswers.removeChild(el);
                                    });

                                const stat = answer2.stat; 
                                
                                for (let i = 0; i < stat.length; i++){

                                    pollAnswers.insertAdjacentHTML('beforeend',
                                    `<div class="stat__answer">
                                            ${stat[i].answer} : ${stat[i].votes} %
                                    </div>`);
                                }
                            }
                         }
                    }})
            }
    }

}

onLoad();
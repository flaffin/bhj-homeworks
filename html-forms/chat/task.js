const chatWidget = document.querySelector(".chat-widget");
const chatWidgetArea = document.querySelector(".chat-widget__area");

const chatInput = document.getElementById("chat-widget__input")

const messages = document.querySelector( '.chat-widget__messages' );

let robotSays =  [
    "Еще очень рано",
    "Извините, но уже очень поздно для разговора",
    "Досвидания",
    "Хорошего вечера",
    "Добрый день! До свидания!",
    "Приятно познакомится",
    "Сегодня отличная погода",
    "Вы хотите что-то купить?"
];


function clickChat(){

    let clickChatTime = Date.now();
    chatWidget.className = "chat-widget chat-widget_active";
    // console.log(chatWidget.className)
}
chatWidget.addEventListener('click', clickChat);


let timeId;

chatInput.addEventListener('keydown', function(e) {

    if (timeId){
    clearInterval(timeId);
    }
    
    if (e.keyCode === 13) {
        let str = chatInput.value;
        if (str.length === 0){
            alert('Введите сообщение');
        } else {
            chatInput.value = "";
            let date = new Date();
            let dateH = date.getHours();
                if (dateH < 10) {
                    dateH = '0' + dateH;
                }
            let dateM = date.getMinutes();
                if (dateM < 10) {
                   dateM = '0' + dateM;
                }
            let robot = Math.floor(Math.random() * robotSays.length);
            console.log(robotSays[robot]);

            chatInput.value = "";
          
                  messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${dateH}:${dateM}</div>
            <div class="message__text">${str}</div>
        </div>
        `;
                 messages.innerHTML += `
            <div class="message">
            <div class="message__time">${dateH}:${dateM}</div>
            <div class="message__text">${robotSays[robot]}</div>
        </div>
        `;

        messages.scrollIntoView({block: "end", inline: "nearest"});
        }
    
    }


    function loger(){

        let date = new Date();
        let dateH = date.getHours();

            if (dateH < 10) {
                dateH = '0' + dateH;
            }
        let dateM = date.getMinutes();
            if (dateM < 10) {
                dateM = '0' + dateM;
            }
                
                messages.innerHTML += `
                <div class="message">
                <div class="message__time">${dateH}:${dateM}</div>
                <div class="message__text">У Вас все хорошо?</div>
            </div>
            `;

    }

     timeId = setInterval(loger, 30000);
    
    
  });

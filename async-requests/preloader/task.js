const loader = document.getElementById("loader");
const item = document.querySelector(".item");

// для проверки Задачи Повышенного уровня сложности, закомитить
    localStorage.clear();
    

window.onload = function(){
    if (localStorage.length > 0){

        loader.className = 'loader';

            for (let i = 0; i < localStorage.length; i++){      
                var returnObj = JSON.parse(localStorage.getItem(`${i}`));

                    item.insertAdjacentHTML('afterBegin',
                    `<div class="item__code">
                        ${returnObj.item__code}
                    </div>
                    <div class="item__value">
                        ${returnObj.item__value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>`);

                let itemCode = document.querySelector('.item__code');
                let itemValue = document.querySelector('.item__value');
                let itemCurrency = document.querySelector('.item__currency');
                
                itemCode.setAttribute('style', 'width: 30%');
                
                itemValue.setAttribute('style', 'width: 30%');
                itemCurrency.setAttribute('style', 'width: 30%');
             }   
             onLoad('повторно');
    } else {
        onLoad('первый раз');
    }


function onLoad(text) {

    console.log(`запустила  ${text}`)

    let xhr = new XMLHttpRequest();
    xhr.open ('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();

    xhr.onreadystatechange = function (){
        if (this.readyState === 4){
        
            if (text === 'повторно'){
            alert('Получили обновление')
            }
            loader.className = 'loader';
            let answer = JSON.parse(xhr.responseText);
            let response = answer["response"];
            let Valute = response["Valute"];
            let length = Valute.length;

            let index = 0
                for (key in Valute) {

                    let keyValute = Valute[key];
                    
                        item.insertAdjacentHTML('afterBegin',
                        `<div class="item__code">
                            ${keyValute.CharCode}
                        </div>
                        <div class="item__value">
                            ${keyValute.Value}
                        </div>
                        <div class="item__currency">
                            руб.
                        </div>`);

                        let itemCode = document.querySelector('.item__code');
                        let itemValue = document.querySelector('.item__value');
                        let itemCurrency = document.querySelector('.item__currency');
                        
                        itemCode.setAttribute('style', 'width: 30%');
                        
                        itemValue.setAttribute('style', 'width: 30%');
                        itemCurrency.setAttribute('style', 'width: 30%');

                            let obj = {
                                item__code: `${keyValute.CharCode}`,
                                item__value: `${keyValute.Value}`
                            }
                            var serialObj = JSON.stringify(obj);
                            localStorage.setItem(`${index}`, serialObj);
                            index++;

                }
        }
    }
}
}

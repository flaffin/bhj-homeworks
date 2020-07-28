const progress = document.getElementById( 'progress' );
const send = document.getElementById('send');


let formData = new FormData();

send.onclick = function(){
    return false;
}

function unload(){

        const xhr = new XMLHttpRequest();
        xhr.open ('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.send(formData);

            xhr.onprogress = function(event) {
            let  timeEvent = event.loaded / 100000000       
            progress.value = timeEvent;
            }

                xhr.onload = function() {
                    alert(`Файл загружен`);
                };

}


send.addEventListener('click', unload);

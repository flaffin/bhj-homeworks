const reveal = document.querySelectorAll('.reveal');
const revealArray = Array.from(reveal);

window.onscroll = function() {

    revealArray.forEach((e) =>{
        let elem = e.getBoundingClientRect();
        if (elem.bottom <= window.innerHeight){
            e.className ="reveal reveal_active";
        }
    });

};

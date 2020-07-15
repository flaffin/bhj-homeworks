const hasTooltip = document.getElementsByClassName('has-tooltip');
const hasTooltipArray = Array.from(hasTooltip);
console.log(hasTooltipArray);

hasTooltipArray.forEach((e) => {

    e.onclick = function(){
        return false;
    }
});

let clickNum = [];

hasTooltipArray.forEach((el) => {


  let ind =  hasTooltipArray.indexOf(el);
  clickNum[ind] = 0;

    function click(){

            const closeEl = document.querySelectorAll(".tooltip");
            const closeElArray = Array.from (closeEl);
                closeElArray.forEach((e) => {
                    e.style.display = 'none';
                });

        clickNum[ind] = clickNum[ind] + 1;
        
        let obj = el.getBoundingClientRect() 

        if (!(clickNum[ind] % 2 === 0)){

            el.insertAdjacentHTML('afterend', `<div class="tooltip">${el.getAttribute('title')}</div>`);

            el.nextSibling.style.display = "block";
            el.nextSibling.setAttribute('style', `left: ${obj.left}px`);
            el.nextSibling.style.position = "absolute";
        } else {

            el.nextSibling.style.display = 'none';
    }
}
    el.addEventListener('click', click);

});


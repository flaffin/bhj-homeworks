const hasTooltip = document.getElementsByClassName('has-tooltip');
const hasTooltipArray = Array.from(hasTooltip);

const toolTip = document.getElementsByClassName('tooltip');


hasTooltipArray.forEach((e) => {

    e.onclick = function(){
        return false;
    }
});

hasTooltipArray.forEach((el) => {

function click(){

    let obj = el.getBoundingClientRect();

        if (el.nextSibling.className === 'tooltip'){
            const toolTip = document.querySelector('.tooltip');
            toolTip.remove();
        } else {
            const toolTip = document.querySelector('.tooltip');
            if (toolTip){   
                toolTip.remove();
            }

        el.insertAdjacentHTML('afterend', `<div class="tooltip">${el.getAttribute('title')}</div>`);
        el.nextSibling.setAttribute('style', `display: block; left: ${obj.left}px`);
        el.nextSibling.style.position = "absolute";
        }
}

el.addEventListener('click', click)
});
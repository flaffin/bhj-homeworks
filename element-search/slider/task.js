
const sliderItem = document.querySelectorAll(".slider__item");
const sliderItemArray = Array.from(sliderItem);

const sliderArrow = document.querySelectorAll(".slider__arrow");
const sliderArrowArray = Array.from(sliderArrow);

const sliderDot = document.querySelectorAll(".slider__dot");
const sliderDotArray = Array.from(sliderDot);

let sliderItemActive = document.querySelector(".slider__item_active");
let index = sliderItemArray.indexOf(sliderItemActive);
sliderDotArray[index].className = "slider__dot slider__dot_active";
let length = sliderItemArray.length;


     function forAll(index){

        sliderItemArray[index].className = "slider__item slider__item_active";
        sliderDotArray[index].className = "slider__dot slider__dot_active";
     }

     sliderArrowArray.forEach((el) => {

            function imagGo(){
        
                sliderItemArray[index].className = "slider__item";
                sliderDotArray[index].className = "slider__dot";

            if (el.className === "slider__arrow slider__arrow_prev"){
                if (index === 0){
                    index = length - 1;
                } else {
                    index = index - 1;
                }
            } else if (el.className === "slider__arrow slider__arrow_next"){
                if ( index === length - 1){
                    index = 0;
                } else {
                    index = index + 1;
                }
            }
            forAll(index);
            }

            el.addEventListener('click', imagGo);
        });
        
        sliderDotArray.forEach((e) => {
        
            function imagDot() {
               
                sliderItemArray[index].className = "slider__item";
                sliderDotArray[index].className = "slider__dot";
                
                index = sliderDotArray.indexOf(e);
                forAll(index);
            }
        
            e.addEventListener('click', imagDot);
        });
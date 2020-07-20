const book = document.getElementById("book");
const size = document.getElementsByClassName("font-size");
const sizeArray = Array.from(size);

const bookControl = document.querySelector('.book__control_color');

const color = document.getElementsByClassName('color');
const colorArray = Array.from(color); 

sizeArray.forEach((el) => {
    el.onclick = function() {
        return false;
}});


sizeArray.forEach((e) => {


    function choiceSize(){

        sizeArray[0].className = 'font-size font-size_small';
        sizeArray[1].className = 'font-size font-size';
        sizeArray[2].className = 'font-size font-size_big';

        if (e.className === "font-size font-size_small"){

          e.className = "font-size font-size_active"
            book.className = "book book_fs-small";
          
        }
         if (e.className === "font-size font-size"){

            e.className = "font-size font-size_active"
            book.className = "book";
        } 
         if (e.className === "font-size font-size_big"){

            e.className = "font-size font-size_active"
            book.className = "book book_fs-big";
        }
     
    }

    e.addEventListener('click', choiceSize);
});

colorArray.forEach((element) => {
    element.onclick = function() {
        return false;
}});

colorArray.forEach((el) => {

        function choiceColor (){
        let parentColor = el.closest('div');

        colorArray[0].className = 'color color_black';
        colorArray[1].className = 'color color_gray';
        colorArray[2].className = 'color color_whitesmoke';
     
        if(parentColor.className === "book__control book__control_color"){
           
            if (el.className === "color color_gray"){
                el.className = "color color_gray color_active"
                book.className = "book_color-gray";

            } 
            if (el.className === "color color_black"){
                el.className = "color color_black color_active"
                book.className = "book";

            } 
             if (el.className === "color color_whitesmoke"){
                el.className = "color color_whitesmoke color_active"
                book.className = "book_color-whitesmoke";
            }
        } 

        sizeArray[0].className = 'color color_black';
        sizeArray[1].className = 'color color_gray';
        sizeArray[2].className = 'color color_white';

        if (parentColor.className === "book__control book__control_background") {
            
            if (el.className === "color color_black"){
                el.className = "color color_black color_active"
                book.className = "book_bg-black";
            } 
            if (el.className === "color color_gray"){
                el.className === "color color_gray color_active"
                book.className = "book_bg-gray";
            } 
            if (el.className === "color color_white color_active"){
                el.className = "color color_white color_active"
                book.className = "book";
            }
        }

        }
        el.addEventListener('click', choiceColor);
});
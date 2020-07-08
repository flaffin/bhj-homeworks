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

        if (e.className === "font-size font-size_small"){

          e.className === "font-size font-size_small_active"
            book.className = "book book_fs-small";
          

        } else if (e.className === "font-size font-size_active"){
            book.className = "book";

        } else if (e.className === "font-size font-size_big"){
           
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

        if(parentColor.className === "book__control book__control_color"){
           
            if (el.className === "color color_gray"){
                book.className = "book_color-gray";
            } else if (el.className === "color color_black color_active"){
                book.className = "book";
            } else if (el.className === "color color_whitesmoke"){
                book.className = "book_color-whitesmoke";
            }

        } 
        if (parentColor.className === "book__control book__control_background") {
            
            if (el.className === "color color_black"){
                book.className = "book_bg-black";
            } else if (el.className === "color color_gray"){
                book.className = "book_bg-gray";
            } else if (el.className === "color color_white color_active"){
                book.className = "book";
            }
        }

        }
        el.addEventListener('click', choiceColor);
});
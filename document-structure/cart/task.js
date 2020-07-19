const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const  productQuantityValueArray = Array.from(productQuantityValue);

const productQuantityControl = document.querySelectorAll('.product__quantity-control');
const productQuantityControlArray = Array.from (productQuantityControl);

const productAdd = document.querySelectorAll('.product__add');
const productAddArray = Array.from(productAdd);

const cartProducts = document.querySelector('.cart__products');
const cartProductsArray = Array.from(cartProducts);

function seeMenu (){

    // cartProductsQ = document.querySelector('.cart');
    cartProductsQ = document.querySelector('.cart__products');
    let wwwArray = Array.from(cartProductsQ.childNodes);

        let ansver = wwwArray.some((el) => {
            return ((el.tagName === "DIV") && (el.getAttribute('data-id')));
        })

        if (ansver === false){
            cartProductsQ.setAttribute('style', 'display: none');
        }
}

seeMenu ();

productQuantityControlArray.forEach((element) => {

    function quantity(){

        let child = element.parentElement.children;
            for (let i = 0; i < child.length; i++){
                if (child[i].className === "product__quantity-value"){
                    let number = Number(child[i].textContent)
                    if ((element.className.includes('dec')) && (number >= 2)) {
                        child[i].textContent = number - 1;
                    } else if (element.className.includes('inc')) {
                        child[i].textContent = number + 1;
                    }
                }
            }
    }
    element.addEventListener('click', quantity);
});


productAddArray.forEach((el) => {

    function addBasket(){
 
            let childrenEl = el.closest('.product').children;
            let childrenElArray = Array.from(childrenEl);
            
                let childIm = childrenElArray.find((el) => {
                    return el.className == "product__image";
                });

            let src = childIm.getAttribute('src');

            let countArray = Array.from(el.previousElementSibling.children); 

                let productCount = countArray.find((el) => {
                    return el.className == "product__quantity-value";  
                });


            let idEl = Number(el.closest('.product').getAttribute('data-id'));

            // cartProductsQ = document.querySelector('.cart');
            cartProductsQ = document.querySelector('.cart__products');

            let wwwArray = Array.from(cartProductsQ.childNodes);
        

            for (i = 0; i < wwwArray.length; i++){

                if ((wwwArray[i].tagName === "DIV") && (wwwArray[i].getAttribute('data-id'))) {

                    let atr = Number(wwwArray[i].getAttribute('data-id'));
                        if (atr === idEl){
                            let changeText = Array.from(wwwArray[i].children);
                                let changeTextEl = changeText.find((el) => {
                                    return el.tagName === "DIV";
                                });

                            changeTextEl.textContent = productCount.textContent;
                            //  Удаление из корзины, если значение = 0
                            // if (productCount.textContent === '0'){
                            //      wwwArray[i].remove();

                            //      seeMenu ();
                            //     return;
                            // }
                            return;
                        }
                    } 
                }
          
                // if (productCount.textContent === '0'){
                    
                //     return;
                // }
                // afterend
                    cartProducts.insertAdjacentHTML('afterBegin', `
                    <div class="cart__product"  data-id= ${idEl}>
                        <img class="cart__product-image" src= ${src}>
                            <div class="cart__product-count">${productCount.textContent}</div>
                                </div>
                    `);

                // cartProductsQ = document.querySelector('.cart');
                cartProductsQ = document.querySelector('.cart__products');

                // let nextNew = cartProducts.nextElementSibling;
                let nextNew = cartProducts.firstElementChild;
                
                nextNew.setAttribute('style', 'display: inline-block');
               
                cartProductsQ.setAttribute('style', 'display: ');

    }

    el.addEventListener('click', addBasket);

});
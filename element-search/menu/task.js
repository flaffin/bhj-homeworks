// Задача 1


// const menuLink = document.querySelectorAll(".menu__link");
// const menuItem = document.querySelectorAll(".menu__item");
// const menuSub = document.querySelectorAll(".menu_sub");

// const menuLinkArray = Array.from(menuLink);
// const menuSubArray = Array.from(menuSub);

// menuLinkArray.forEach((el) => {
//     el.onclick = function (){
//     if (el.nextElementSibling){
//         return false
// }}});

// menuLinkArray.forEach((el) => {
    
//   let sum= 0;

//   function siteMenu(){
   
//     if (sum % 2 === 0){

//        if (el.nextElementSibling){
//        el.nextElementSibling.className = "menu menu_sub menu_active";

//     }} else {
//     el.nextElementSibling.className = "menu menu_sub";

//     } 
//   sum ++;
//   }

// el.addEventListener('click', siteMenu);
// });



// Задача 2


const menuMain = document.querySelectorAll(".menu_main");
const menuMainArray = Array.from(menuMain);

menuMainArray.forEach((element) => {


    const menuLink = document.querySelectorAll(".menu__link");
    const menuItem = document.querySelectorAll(".menu__item");
    const menuSub = document.querySelectorAll(".menu_sub");

    const menuLinkArray = Array.from(menuLink);
    const menuSubArray = Array.from(menuSub);

    menuLinkArray.forEach((el) => {
        el.onclick = function (){
        if (el.nextElementSibling){
          return false
    }}});


    menuLinkArray.forEach((el) => {
    
    function siteMenu(){

        if (el.nextElementSibling.className === "menu menu_sub menu_active"){
            el.nextElementSibling.className = "menu menu_sub";
            return;
         }

         menuSubArray.forEach((e) =>  e.className = "menu menu_sub");

        if (el.nextElementSibling){
        el.nextElementSibling.className = "menu menu_sub menu_active";
        };
    }

    el.addEventListener('click', siteMenu);
    });

});

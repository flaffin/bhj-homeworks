const interest = document.getElementsByTagName("input");
const interestArray = Array.from(interest);


let click = [];

interestArray.forEach((e) => {

    let number = interestArray.indexOf(e);
    click[number] = 0;
  
        if (!e.closest('ul[class]')){


                function clickCheck(){

                    click[number] = click[number] + 1;
                    let parent = e.closest('li');
                    let child = parent.children;
                    let childArray = Array.from(child); 


                            for (let i=0; i < childArray.length; i++){
                                
                                if (childArray[i].tagName === "UL"){
                                    let smolLi = childArray[i].children;
                                    let smolLiArray = Array.from(smolLi);

                                    smolLiArray.forEach((el) => {
                                        
                                        let elChecked = Array.from(el.children);
                                        
                                            for (let i = 0; i < elChecked.length; i++){
                                                let elCheckCheck = elChecked[i].children;
                                                    for (let i = 0; i < elCheckCheck.length; i++){  

                                                        if (!(click[number] % 2 === 0)){

                                                        elCheckCheck[i].checked = true;
                                                    
                                                        } else if (click[number] % 2 === 0){
                                                        
                                                        elCheckCheck[i].checked = false;
                                                        }
                                                        }
                                            }
                                            
                                    });
                                }
                            }
                }
        }


});
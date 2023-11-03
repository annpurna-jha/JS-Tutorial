// This keyword inside eventListener callback
const btn = document.querySelector(".btn-headline");

// function myFunc(){
//     console.log("You Clicked Me!!");
//     console.log("value of this ",this);//this will refer to the button
// }
// btn.addEventListener("click",myFunc);

// or annonymous function
btn.addEventListener("click",function(){
        console.log("You Clicked Me!!");
        console.log("value of this ",this);//this will refer to the button  , it is decided the method(in this case addEventListener)is called by which element(btn in this case) 
    });

// or

btn.addEventListener("click",()=>{
    console.log("You Clicked Me!!");
    console.log("value of this ",this);//this will refer to the window object in case of arrow function , arrow function this is refered to 1 level up
});

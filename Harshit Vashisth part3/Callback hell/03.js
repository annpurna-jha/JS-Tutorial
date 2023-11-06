// callbacks, callback hell, the pyramid of doom

// change hello world to heading1 after 1sec

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
// },1000);
// setTimeout(()=>{
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple";
// },3000);

// want to change every hello world to heading 1 to 7 after 2 sec of previous change for this we have to write setTimeout() function 7 times and time will be 1000 , 3000 , 5000ms this is a tedious task

// therefor we will use call back function to channge every text
// callback hell -> nested callback

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


// pyramid of d0om

// setTimeout(()=>{
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "Six";
//                         heading6.style.color = "purple";
//                         setTimeout(()=>{
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "purple";
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000);


// change text using function

function changeText(element,text,color,time,onSuccessCallback,onFailueCallback){
    setTimeout(()=>{
        if(element){
            element.textConetent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }else{
                if(onFailueCallback){
                    onFailueCallback();
                }
            }
        }
        
    },time)
}

// pyramid of doom
changeText(heading1,"One","violet",1000,()=>{
    changeText(heading2,"Two","purple",2000,()=>{
        changeText(heading3,"Three","red",1000,()=>{
            changeText(heading4,"Four","pink",1000,()=>{
                changeText(heading5,"Five","green",2000,()=>{
                    changeText(heading6,"Six","blue",1000,()=>{
                        changeText(heading7,"Seven","brown",1000,()=>{
                            changeText(heading8,"Eight","violet",1000,()=>{
                                changeText(heading9,"Nine","red",1000,()=>{
                                    changeText(heading10,"Ten","orange",1000,()=>{

                                    },()=>{console.log("Hedaing 10 does not exist")})
                                },()=>{console.log("Hedaing 9 does not exist")})
                            },()=>{console.log("Hedaing 8 does not exist")})
                        },()=>{console.log("Hedaing 7 does not exist")})
                    },()=>{console.log("Hedaing 6 does not exist")})
                },()=>{console.log("Hedaing 5 does not exist")})
            },()=>{console.log("Hedaing 4 does not exist")})
        },()=>{console.log("Hedaing 3 does not exist")})
    },()=>{console.log("Heading 2 does not exist")})
},()=>{console.log("Heading 1 does not exist")});
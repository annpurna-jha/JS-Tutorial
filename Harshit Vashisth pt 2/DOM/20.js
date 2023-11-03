// Intro to events
// click event
// 3 ways to add event
// 1.) add event in html file and write js code according check line no. 65(uncomment to see changes) in html 

// 2.)add event in js file
// const btn = document.querySelector(".btn-headline");
// console.dir(btn);//display all property btn have
// // in this method we can't assing click event more than ine times
// btn.onclick = function(){
//     console.log("You clicked me!!");
// }

// 3.) method - addEventListener
const btn = document.querySelector(".btn-headline");
function clickMe(){
    console.log("You Clicked Me!!");
}
// btn.addEventListener("click",clickMe);

// or

// btn.addEventListener("click",function(){
//     console.log("You Clicked Me!!");
// });

// or

 btn.addEventListener("click",()=>{
        console.log("You Clicked Me!!!");
    });
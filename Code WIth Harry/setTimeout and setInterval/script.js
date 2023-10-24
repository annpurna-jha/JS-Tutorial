// document.write("Hello");

// syntax -> setTimeout(function, milliseconds, param1, param2, ...)
// default value of millisecond is 0
// The setTimeout() is executed only once.it return a timer id which is of type number

// const sum = (a,b) =>{
//     console.log("Yes i am running" ,(a+b));
// }
// setTimeout(sum,5000,2,6);
 
// let a = setTimeout(function(){
//     alert("I am inside of settimeout");
// },2000);//run function after 2sec or 2000ms 

// a is the id of the timer , it is used in clearTimeout(a) to cancel the timer

// console.log(a);//return a number basically id of settimeout


// use clearTimeout to prevent or clear a timer set with the setTimeout from running
// syntax -> clearTimeout(id_of_settimeout)

// let b = prompt("Do you want to run the setTimeout?");
// if("n"==b){
//     clearTimeout(a);
// }

// setInterval -> The setInterval() method calls a function at specified intervals (in milliseconds). It continues calling the function until clearInterval() is called, or the window is closed.

// syntax -> setInterval(function, milliseconds, param1, param2, ...)
// if at place of milliseconds value given <10 then 10 is used automatically
// it return a timer id which is of type number

let s = setInterval(function(){
    alert("set interval");
},3000);

let t = prompt("Do you want to run the setTimeout?");
if("n"==t){
    clearInterval(s);
}



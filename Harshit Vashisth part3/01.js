// js is a synchronous & single threaded programming language

// console.log("Script start");
// for(let i = 1;i<10000;i++){
//     console.log("Inside for loop");
// }
// console.log("Script End");//until foor loop not completed this line will not print 

// for this we use setTimeout


console.log("Script start");
function hello(){
    console.log("Hello World!");
}
setTimeout(hello,1000);
console.log("Script End");


console.log("Script start");
setInterval(()=>{
    console.log(Math.random());
},1000)
console.log("Script End");
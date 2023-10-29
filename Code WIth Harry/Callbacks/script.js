// synchronous programming -> synchronous actions are the actions that initiate and finish one by one

// let a = prompt("what is your name");
// let b = prompt("what is your age");
// let c = prompt("what is your fav color");
// console.log(a,b,c);

// asynchronous programming -> asynchronous action are the actions that we initiate now and they finish later. 
// console.log("Start");
// setTimeout(function(){
//     console.log("Hey I am good");
// },3000);
// console.log("End");


// callback function -> function passed into another function as an argument , which is then invoked inside the outer function to complete an action
function loadScript(src,callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with src: "+src)

        callback();
    }
    // script.onload = () => callback(script)
    // document.head.append(script);
    document.body.appendChild(script);
}
loadScript ("https://google.com",hello);//When you pass a function as an argument, remember not to use parenthesis. for ex - not use hello()


function hello(error , src){//what if the src paased in loadscript is wrong in that case error appears for handle this we paas arguent and handle error
    if(error){
        
    }
    alert('Hello World!');
}

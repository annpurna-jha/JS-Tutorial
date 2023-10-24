// addEventlistener -> it is used to assig multiple handlers to an event

// btn.addEventListener('click',function(e){
//     alert("Hello World1!");
// })
// btn.addEventListener('click',function(e){
//     alert("Hello World2!");
// })

// let a = prompt("What is your favourite number");

// for working of removeEventListener function reference should be same otherwise it will not work if we write the exactly same function still doesn't work  
// or handler must be the same , function object for this to work
// for this we can store function in some variable
// if(a=="2"){
//     btn.removeEventListener('click',function(e){
//         alert("Hello World1!")
//     })//this will not work as reference of function is not same
// }


// we will store function in variable
let x = function(e){//we can also run these function without using e , it is an event object which access some property for ex->
    console.log("Event type is: ",e.type);
    console.log("Current target is: ",e.target);
    console.log("clientX and clientY is:",e.clientX,e.clientY);
    alert("Hello World1!");
}
let y = function(e){
    alert("Hello World2!");
}

btn1.addEventListener('click',x);
btn1.addEventListener('click',y);
let num = prompt("What is your favourite number");
 if(num=="2"){
        btn1.removeEventListener('click',y);
}

// event object -> when an event happens, the browser creates an event object , puts details into it and passes it as an argument to the handler
// elem.onclick = function(event){
//     ...
// }
// event.type = Event type
// event.currentTarget : element that handled the event
// event.clientX/clientY : coordinates of the cursor
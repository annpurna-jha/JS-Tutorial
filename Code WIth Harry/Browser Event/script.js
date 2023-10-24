//an event is a signal that something has happend
// all the dom nodes generate such signals

// some important DOM events are:
// mouse event,keyboard event,form element events, document events

// event handled through html attributes
// we can handle through js also if we handle through both html and js , js will override html event handler
let a = document.getElementsByClassName("container")[0];
a.onclick = ()=>{
    let b = document.getElementsByClassName("container")[0];
    b.innerHTML = "Hello World!";
}

// on "".container" class onclick event was applied in both html and js but onclick run only which is written inside js i.e js overide html event handler 

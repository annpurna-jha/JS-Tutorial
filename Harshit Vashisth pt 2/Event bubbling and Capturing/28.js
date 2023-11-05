// Event bubbling(event propagation) & Event Capturing
const grandparent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Not capture -> Event bubbling -> It is the default behavior, where events first trigger on the target element and then bubble up to its parent and ancestor elements.

child.addEventListener("click" ,()=>{
    console.log("You clicked on child");
});
parent.addEventListener("click" ,()=>{
    console.log("You clicked on Parent");
});
grandparent.addEventListener("click" ,()=>{
    console.log("You clicked on GrandParent");
});
document.body.addEventListener("click" ,()=>{
    console.log("You clicked on Body");
});


// Event capture using true ->It is opposite to event bubbling, where in event capturing, an event moves from the outermost element to the target.
child.addEventListener("click" ,()=>{
    console.log("Capture !! child");
},true);
parent.addEventListener("click" ,()=>{
    console.log("Capture !! Parent");
},true);
grandparent.addEventListener("click" ,()=>{
    console.log("Capture !! GrandParent");
},true);
document.body.addEventListener("click" ,()=>{
    console.log("Capture !! Body");
},true);
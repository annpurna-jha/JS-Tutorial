// event deligation
const grandparent = document.querySelector(".grandParent");
// don't need to add events on parent child.apply on grandparent will work for all  it is like delegation bt don't need to add eventListener individually
grandparent.addEventListener("click" ,()=>{
    console.log("You clicked on Something!");
});

grandparent.addEventListener("click" ,(e)=>{
    console.log(e.target);
    console.log(e.target.textContent);
});
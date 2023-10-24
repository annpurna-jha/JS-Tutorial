let b = document.body;
// firstChild can give any type of node it can be a text node , a comment node or any element
console.log("First child of b is: ", b.firstChild);
// sometime we don't want text or comment nodes some links only take element into account for example =>
// firstElemntChild will give only element , it doesn't matter how much spaces and comments are written between them
console.log("FirstElement  child of b is: " ,b.firstElementChild);
console.log("Last Element  child of b is: " ,b.lastElementChild);
console.log(b.previousElementSibling); // previous sibling(element)
console.log(b.nextElementSibling); // next sibling(element)

const changeBgRed = () =>{
    document.body.firstElementChild.style.background = "red";
}
// changeBgRed(); // change bg color 

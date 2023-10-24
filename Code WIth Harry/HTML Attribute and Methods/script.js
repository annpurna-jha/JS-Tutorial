// element.getAttribute(name) used to returns the value of an element's attribute. 
//parameter -> required the name of the attribute
// return value-> string type ,null if the attribute does not exist.
let first = document.getElementById("first");
let a = first.getAttribute("class"); // give the class name of id = "first" 
// console.log(a);

// element.hasAttribute(name) check for existance of an attribute , returns true if the attribute exists, otherwise false.
// console.log(first.hasAttribute("class"));//true class is set to id = "first"
// console.log(first.hasAttribute("style"));//false  style is not set to id = "first"

// The setAttribute() method sets a new value to an attribute. If the attribute doesn't exist, it is created first.
// Parameter -> name : The name of the attribute. and value : The new attribute value.

first.setAttribute("class" , "second hey");//change the class name
// console.log(first.getAttribute("class"));
// first.setAttribute("hidden" , "true");//hide the content written inside it

// removes an attribute from an element.
// first.removeAttribute("class" );//remove class

// get collection of all attributes
// console.log(first.attributes);


// data -* attributes -> we can always create custom attributes but the ones starting with "data-" are reserved for programmer use. They are available in a property named dataset
// it is used in html page where we can give custom attributes to any element

console.log(first.dataset);//access all the custom attributes using dataset of that element
console.log(first.dataset.game);
console.log(first.dataset.player);
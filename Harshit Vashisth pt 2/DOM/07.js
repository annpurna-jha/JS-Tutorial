// DOM
// console.log(document);

// select element using get Element By Id

// const mainHeading = document.getElementById("main-heading");
// console.log(document.getElementById("main-heading"));
// console.log(typeof mainHeading);
// console.dir(mainHeading);//return a object


// select element using query selector

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);

// const header = document.querySelector(".header");
// console.log(header);//if multiple classes with same name it will return first class found with this name
// for getting all classes with same name use querySelectorAll it will return in the form of node list
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);


// change text
// textContent and innerText

// textContent ->returns every element in the node. hidden elements also
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent); // this will give all text content no matter it is visible on page or not whatever written in file will print here
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);

// innerText -> innerText is aware of styling and won't return the text of hidden elements.
// const mainHeading2 = document.getElementById("main-heading");
// console.log(mainHeading2.innerText);


// changes the styles of elements
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);//return list of css properties that can be applied
// mainHeading.style.color = "blue";

// get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement);
console.log(inputElement.getAttribute("type"));
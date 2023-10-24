// change the card title to red

//searching the DOM =>  DOM navigation properties are helpful when the elements are close to each other ,
// if they are not close to each other we have some more methods to search the dom

// let ctitle = document.getElementById("firstcardtitle");//this method is used to get the element with a given "id" attribute
// ctitle.style.color = "blue";

// let secondcardtitle = document.getElementsByClassName("card-title")[1];//this method is used to get the element with a given "class" attribute
// secondcardtitle.style.color = "red";

// css selector

// document.querySelector(".card-title")
// or
// elem.querySelectorAll(".card-title")[0] //is same
//  it will give the 1st class present with this name

let ctitiles = document.querySelectorAll(".card-title"); // select all classes
ctitiles[0].style.color = "blue";
ctitiles[1].style.color = "red";
ctitiles[2].style.color = "cyan";
console.log(ctitiles);

console.log(document.getElementsByTagName("a"))//all anchor tagpresent in document  will be returned in the form of collection

console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"));


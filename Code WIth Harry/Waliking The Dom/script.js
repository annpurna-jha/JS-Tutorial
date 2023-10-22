// for see the result try all below thing in console  some of the below will perform operation so we can see on web page otherwise try it on console or do console.log in everything to print it on console or can check on console directly

console.log(document.getElementsByClassName("cursor-pointer")); // this will return all class whose name  is "cursor-pointer" in the form of html collection

document.getElementsByClassName("cursor-pointer")[1]; //this will return class whose name  is "cursor-pointer" in 1st place count start from 0

document.getElementsByClassName("cursor-pointer")[1].style.color = "red"; //this will change the color of 1st class "cursor-pointer" 

// DOM tree refers to the html page where all the nodes are objects. There can be 3 main types of nodes in the DOM tree - 1.) text nodes 2.) element nodes 3.) comment nodes

// in an html page <html> is at the root and <head> and <body> are its children etc.

//  a text node ia always a leaf of the tree

// auto correction - if an erroneous HTML is encountered by the browser it tends to correct it . 
// for example - if we put soemthing after the body it is automatically moved inside the body.

// another example is <table> tag which must contain <tbody> if we don't write it browser automatically put in you can check in source code bcz it doesn't change your code but in source code it will correct it.

// walking the DOM
// try on console
document.head;// return head tag

document.body; // return body tag , it's type is object  // it can sometime be null if the js is written before the body tag 
document.title;//return title , it's type is string
document.title = "hi this is me"; //change title only on server side if do it on console if did in js file just like here we did then it will change title permanently
document.documentElement; //return html tag , it's type is object

typeof document.documentElement; //return html tag , it's type is object
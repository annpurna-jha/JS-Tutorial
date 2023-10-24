// console.log() shows the element DOM tree
// console.dir() shows the element as an object with its properties
console.log(document.getElementsByTagName('span')[0]);
console.dir(document.getElementsByTagName('span')[0]);

// tagName / nodeName
// used to read tag name of an element
// tagName -> only exists for element nodes
// nodeName -> defined for any node(text,comment etc)

// let x = document.getElementsByTagName('span')[0];
// console.log(x);
// let y = document.getElementsByTagName('span')[0];
// console.dir(y);

// innerHtml allows to get the html inside the element as a string 
// innerHtml valid only for element nodes , for other node types we can use nodeValue or data
let first = document.getElementById("first")
console.log(first.innerHtml)

// outerHtml contains the full html innerHtml +  the element itself
// console.log() shows the element DOM tree
// console.dir() shows the element as an object with its properties
// console.log(document.getElementsByTagName('span')[0]);
// console.dir(document.getElementsByTagName('span')[0]);

// tagName / nodeName
// used to read tag name of an element
// tagName -> only exists for element nodes
// nodeName -> defined for any node(text,comment etc)
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// let x = document.getElementsByTagName('span')[0];
// console.log(x);
// let y = document.getElementsByTagName('span')[0];
// console.dir(y);

// innerHtml allows to get the html inside the element as a string only valid for element nodes not for text node , comment node etc

// innerHtml valid only for element nodes , for other node types we can use nodeValue or data
// for ex=>
document.body.firstChild.data;
document.body.firstChild.nodeValue;

// let first = document.getElementById("first")
// console.log(first.innerHtml) //try on console it will give things written inside id "first"
// we can change innerHtml also like  first.innerHtml = "<i> hey i'm italic </i>"


// outerHtml contains the full html innerHtml +  the element itself

// first.outerHtml //try on console everything wriiten inside id "first" also with its outer body , in this case id first is written inside span tag which will also print on console  , we can change it also

// text content -> provides access to the text inside the element : only text, minus all tags
console.log(document.body.textContent); // print only all text of document not any tag

// console.log(document.body.firstChild.data);

// hidden property -> hidden attribute and the dom property specifies whether the element is visible or not
// in html file we apply both on div and id  hidden property which will hide the text written inside it from web page it will not be visible on web page
// if we select that id or div and write in console $0.hidden = false it will show the things written inside it on html page
console.log(first.hidden = false); //it will unhide all things written in id first
console.log(second.hidden = false);
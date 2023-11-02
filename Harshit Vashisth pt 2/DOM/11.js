// root node
const rootNode = document.getRootNode();
// console.log(rootNode); //document
// console.log(rootNode.childNodes); //html

const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);//html
// console.dir(htmlElementNode);

// console.log(htmlElementNode.childNodes);//NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode);
const textNode1 = htmlElementNode.childNodes[1];
// console.log(textNode1);
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode);

// parent of head node
// console.log(headElementNode.parentNode);

// sibling of head node
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);

// console.log(headElementNode.nextElementSibling);//it will not give text bt give body 

// console.log(headElementNode.childNodes);



// change color of div going through h1
const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333";

// change color of div going through h1
// const body = h1.parentNode.parentNode; 
 //or can do like this
// const body =document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children);


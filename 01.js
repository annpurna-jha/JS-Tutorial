// "use strict";
//it is used to prevent mistakes like we can't create variable without writing var if we don't use it we can create any variable without using var many more like this

console.log("Hello World");

// declare a variable
var fname = "Annpurna"; //with var we can create multiple variables with same name which can create confusion
console.log(fname);
fname = "Annu"; 
console.log(fname);

let sName = "Jha";//prefer let to create variable
// with let we can't create multiple variables with same name
console.log(sName);
sName ="Kumari";
console.log(sName);


// declare constant  can't change it
const pi = 3.14;
console.log(pi);
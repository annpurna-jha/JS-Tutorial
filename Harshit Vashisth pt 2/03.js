// how js works in case of let and const

// console.log(fName); //it is created in global memory but it will be uninitialized until you don't initialize a value . that's why it will give an error can't access before intitialization
let fName = "Harshit";
console.log(fName);

// console.log(sName);
const sName = "Sharma"; //same thing happens in this case also as happend in case of let
console.log(sName);

// Hoisting -> in JavaScript is a behavior in which a function or a variable can be used before declaration
// in var,let and const all three case hoisting happens 
// in case of var (see in file 01.js) it gives undefined if use before declaration
// in case of let and const  gives an error can't access before intitialization
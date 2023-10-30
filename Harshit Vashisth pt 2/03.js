// how js works in case of let and const
// hoisting & TDZ

// console.log(fName); //it is created in global memory but it will be uninitialized until you don't initialize a value . that's why it will give an error : Reference error -> can't access before intitialization
let fName = "Harshit";
console.log(fName);

// console.log(sName);
const sName = "Sharma"; //same thing happens in this case also as happend in case of let
console.log(sName);

// Hoisting -> in JavaScript is a behavior in which a function or a variable can be used before declaration.
// or
//Hosting is the invoking the variables or functions at the top of the scope no matter where it declared. 

// in var,let and const all three case hoisting happens 
// in case of var (see in file 01.js) it gives undefined if use before declaration
// in case of let and const  gives an error can't access before intitialization

// Avoiding Hoisting -> Use JavaScript strict mode, using the "use strict" directive at top.

// TDZ(Temporal Dead Zone) -> Variables exist but cannot be accessed until their declaration. Accessing variables in the TDZ results in a ReferenceError.
// or
// The Temporal Dead Zone is the period between the creation of a variable (due to hoisting) and its actual declaration in the code
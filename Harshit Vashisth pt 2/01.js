// how js works in case of function declaration and var


// JavaScript is a synchronous (Moves to the next line only when the execution of the current line is completed) and single-threaded (Executes one command at a time in a specific order one after another serially) language.

// compilation
// 1.) Early error checking
// 2.) Determining appropriate scope for variables


// console.log(fName);//determine scope check fName is present in global scope 
// var fName = ."Harshit"; // early error check

 
// code execution context-> in js code executes inside "execution context" , which is created when js engine scan a script file

// Two types of execution contexts

// 1.) Global execution context ->This is default execution context in which JS code start its execution when the file first loads in the browser. All of the global code (i.e. code which is not inside any function or object) is executed inside the global execution context. GEC cannot be more than one because only one global environment is possible for JS code execution as the JS engine is single threaded. It is added into a stack

// There are two phases of JavaScript global  execution context:
// 1.) Creation phase / Memory Allocation Phase/global memory  -> is the phase in which the JS engine has called a function but its execution has not started. In the creation phase, JS engine is in the compilation phase and it just scans over the function code to compile the code, it doesn’t execute any code.

//  in  creation phase there is a global memory in which perform following task - 

// Firstly, it creates a global object where it is for Node.js and Window object for the browsers.
// Secondly, reference the Windows object to 'this' keyword.
// Create a memory heap in order to store variables and function references. Then it stores all the functions declarations in the memory heap area and the variables in the GEC with initial values as 'undefined'.


// 2.) Code execution phase ->  In this phase, the JavaScript code is executed one line at a time inside the Code and updates the values of function and variables which are stored in the Memory Allocation Phase in the Memory Component. So in the code execution phase, whenever a new function is called, a new Execution Context is created

console.log(this);
console.log(window);
console.log(myFunc);//it will print function as it is bcz function created using function declaration
console.log(fullName);//determine scope check fullName is present in global scope so here it will print undefined as first var stores undefined

// created function using function delaration
function myFunc (){
    console.log("This is my function");
}
var fName = "Harshit";
var lName = "Sharma";
var fullName = fName+" "+lName;
console.log(fullName);
// why compilation
// how js code executes
// what is local execution context? 
// closures
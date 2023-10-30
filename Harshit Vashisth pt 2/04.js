// function execution context -created whenever a function is called, representing the function's local scope. 
// Every time a function is executed, a new function execution context is created
let foo = "foo";
console.log(foo);
function getFullName(fName, sName){
    console.log(arguments); //the arguments value is the arguments that we passed to our function while executing it.
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = fName+" "+sName;
    return fullName;
}
const personName = getFullName("harshit","sharma");
console.log(personName);
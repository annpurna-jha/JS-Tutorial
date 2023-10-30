// lexical enviroment , scope chain

// if js doesn't find any variable in local memory it will search into global memory

// javaScript looks for variables in a way, If it can't find a variable in its local Execution Context, it will look for it in its calling context. And if not found in its calling context. Repeatedly, until it is looking in the global execution context.

// lexical scope ->  an item's lexical scope is the place in which the item got created. Another name for lexical scope is static scope.

const lName = "vashistha";
const printName = function(){ //for printName lexical scope is global execution context
    const fName = "harshit";
    function myFunc(){ //for myFunc lexical scope is printName
        console.log(fName);
        console.log(lName);
    }
    myFunc();
}
printName();
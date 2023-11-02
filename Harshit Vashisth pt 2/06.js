// closures
// It is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.

//  A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. 

function printFullName(fName,lName){
    function printName(){
        console.log(fName,lName);
    }
    return printName;
}
const ans = printFullName("harshit","sharma");
ans();

// example 2
function myFunc (power){
    return function(number){//this function can access the parameter of parent function
        return number ** power;
    }
}
const square = myFunc(2);
const res = square(4);
console.log(res);

const cube = myFunc(3);
const res1 = cube(5);
console.log(res1);

// example 3
function func(){
    let cnt = 0;
    return function(){
        if(cnt<1){
            console.log("Hii You Called Me");
            cnt++;
        }else{
            console.log("I already called one times");
        }
    }
}

const result = func();
result();
result();
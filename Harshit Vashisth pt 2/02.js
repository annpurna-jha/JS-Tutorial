// how js works overview

console.log(myFunc);//in case of funtion expression created using var (it will treated as variable) stores undefined 
// where in case of function it stores whole definition of function alread see in file 01.js

//checking for function expression
var myFunc = function(){
    console.log("This is my function");
}

console.log(myFunc);
myFunc();

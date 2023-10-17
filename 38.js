// callback function

function myFunc1(){
    console.log("inside func 2");
}

function myFunc(a){ // this 'a' can be any type of variable depends upon what we paas in function at the time of call
    // console.log(a);
    a();// this is call back function , when we paas any function at place of a it will call that function , for ex - check line no . 13 where another function myFunc1 is paased
}

// myFunc([1,2,3]); // a is array here
myFunc(myFunc1); // a is function here



function myFunc3(name){
    console.log("inside func 3");
    console.log(`your name is ${name}`);
}

function myFunc2(callback){ // as convention when we callback function we write it as callback it is no mandatory but for understanding 
    console.log("hello there it is a callback function")
    callback("anu"); //paas parameter if in another function any parameter is avaialble , as myFunc2 call myFunc3 function and it takes a parameter so we paas a name at that place
}

myFunc2(myFunc3);


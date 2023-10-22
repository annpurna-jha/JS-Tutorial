//hoisting

// this is the function or variable before creating it
hello();//print hello world , 
function hello(){
     console.log("Hello World");
}

// hoisting not work in case of function expression or arrow function if we call before creating it it will give error

// hello1();
// const hello1 = function (){  //function expression either we use let , const , var not work in any case
//      console.log("Hello World");
// }

// hello1();
// const hello1 = () => {  //arrow function 
//      console.log("Hello World");
// }
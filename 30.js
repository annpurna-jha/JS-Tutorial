// arrow functions

// function song(){
//         console.log("happy birthday to you...");
// }

const song = () => {//arrow function
        console.log("happy birthday to you...")
}
song();

// function sum(a , b){
//     return a+b;
//  }
// const sum = (a,b) => { //arrow function of above code
//     return a+b;
// }

// or can do like this
const sum = (a,b) => a+b;//if one line of code that is return we can directly write like this , we can also remove small parantheses if only one parameter is given
console.log(sum(2,5));
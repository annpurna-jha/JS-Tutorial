// default parameter -> way 1

// function add (a,b){
//     if(typeof b === "undefined"){// it will set by default b = 1 if b doesn't paas in function
//         b = 1;
//     }
//     return a+b;
// }
// const ans = add(4);
// console.log(ans);

// set default parameter -> way 2
function add (a,b=0){//set by default b = 0 if b doesn't paas in function at time of call
    return a+b;
}
const ans = add(4);
console.log(ans);
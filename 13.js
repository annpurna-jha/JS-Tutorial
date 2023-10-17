// push / pop , shift / unshift in array
//push and pop is faster than shift and unshift

let fruits = ["apple","mango","grapes"];
console.log(fruits);

//push into array from last
// fruits.push("banana");
// console.log(fruits);

//pop return last el
// let poppedFruit = fruits.pop();
// console.log("Popped fruit is",poppedFruit);
// console.log(fruits); 

// add into starting of array
fruits.unshift("Banana");
fruits.unshift("Guava");
console.log(fruits);

// remove el from starting of array
let removedFruit = fruits.shift();
console.log("Removed fruit is",removedFruit);
console.log(fruits);
// push / pop , shift / unshift in array
//push and pop is faster than shift and unshift

let fruits = ["apple","mango","grapes"];
console.log(fruits);

//push - into array from last and return the new array length
// let r = fruits.push("banana");
// console.log(fruits,r);

//pop - return last el
// let poppedFruit = fruits.pop();
// console.log("Popped fruit is",poppedFruit);
// console.log(fruits); 

// unshift - add into starting of array and return new array length
// fruits.unshift("Banana");
// let r = fruits.unshift("Guava");
// console.log(fruits,r);

// shift - remove el from starting of array
// let removedFruit = fruits.shift();
// console.log("Removed fruit is",removedFruit);
// console.log(fruits);

// delete operator - doesn't change the length of array
// let num = [1,2,3,4,5,6,7,8,9];
// delete num[0]; //delete 0th element and place empty at that place that's why the length of array doesn't change
// console.log(num.length);
// console.log(num);

// concat method
// let num1= [1,2,3,4,5,6,7,8,9];
// let num2= [11,12,13,14,15,16,17,18,19];
// let newArr = num2.concat(num1,num); // doesn't change the original array //order matters
// console.log(newArr);

// sort method - sort alphabetically modified original array
// let newNum= [12,9,124,215,16,517,198,319]; // first el start with 1 then el start with 2 and so on
// newNum.sort();
// console.log(newNum);

// for sorting according to ascending or descending

// let compare = (a,b) =>{
//     return a-b; // sort in ascending order
//     // return b-a; //sort in descending order
// }

// newNum.sort(compare);// now it will sort in ascending order
// console.log(newNum);

// reverse method 
let newNum= [12,9,124,215,16,517,198,319]; 
newNum.reverse();
console.log(newNum);
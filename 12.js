// Array is a reference type
// type of array is object
let numArr = [1,5,3,7,4,8];
console.log(numArr[2]);
console.log(numArr);

// we can store multiple datatypes in same array
let mixed = [1,3,"string", null , undefined];
console.log(mixed);


console.log(typeof mixed);
// for finding that it is really an array
console.log(Array.isArray(mixed));// true
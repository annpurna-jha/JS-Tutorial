// Array is a reference type
// type of array is object
let numArr = [1,5,3,7,4,8];
console.log(numArr[2]);
console.log(numArr);

let b = numArr.toString();
console.log(b, typeof b);// in b everything store  is a string

// join method insert between every element whichever thing is given to join method if space is given it will also add space and store in a string
let c = numArr.join("@ ");
console.log(c,typeof c);

// we can store multiple datatypes in same array
let mixed = [1,3,"string", null , undefined];
console.log(mixed);


console.log(typeof mixed);
// for finding that it is really an array
console.log(Array.isArray(mixed));// true


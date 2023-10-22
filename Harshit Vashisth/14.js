// primitive vs reference data type

// primitive type
// let num1 = 6;
// let num2 = num1;
// console.log("Value of num1 is",num1);
// console.log("Value of num2 is",num2);
// num1++;
// console.log("After incrementing num1");
// console.log("Value of num1 is",num1);
// console.log("Value of num2 is",num2);

// reference type
let arr1 = ["item1","item2"];
let arr2 = arr1;
console.log("Array1",arr1);
console.log("Array2",arr2);
arr1.push("Item3");
console.log("After adding element into array1");
console.log("Array1",arr1);
console.log("Array2",arr2);
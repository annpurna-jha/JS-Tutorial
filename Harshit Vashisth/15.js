// how to clone array

// let arr1 = ["Item1","Item2"];
// let arr2 = arr1; //if we do like this and change in arr1 it will also changed for arr2
// console.log(arr1===arr2);

// let a1 =["Item1","Item2"];
// let a2 = ["Item1","Item2"]; // we can make clone like this but if array is larger size then it will be problem
// console.log(a1===a2);

//clone array 1st way
// let ar1 = ["Item1","Item2"];
// let ar2 = ar1.slice(0);
// console.log(ar1===ar2);

// // clone array 2nd way
// let array1 = ["Item1","Item2"];
// let array2 = [].concat(array1);
// console.log(array1===array2)

// clone array 3rd way using spread operator
let arr1 = ["Item1","Item2"];
let arr2 = [...arr1,"item3", "itme4"];//three dot is spread operator //can add multiple el also
console.log(arr1===arr2)

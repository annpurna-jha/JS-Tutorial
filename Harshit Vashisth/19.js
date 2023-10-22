//array destructing
const myArr = ["value1","value2","value3","value4","value5"];
// let var1 = myArr[0];
// let var2 = myArr[1];
// console.log("value of var1", var1);
// console.log("value of var2", var2);

// instead of above 4 line we can do like this

// let [var1 , var2, var3] = myArr;//automatically store 0th , 1st and 2nd element into var1 , var2 and var3
// console.log("value of var1", var1);
// console.log("value of var2", var2);
// console.log("value of var3", var3);

// let[v1 , ,v2] = myArr // it will store 0th and 2nd element in v1 and v2 bcz one element skipped using comma
// console.log("value of var1", v1);
// console.log("value of var3", v2);

let[v1 , ,v2,...newArr] = myArr //after storing 0th and 2nd element , all remaining element store into a new array name as newArr
console.log("value of var1", v1);
console.log("value of var3", v2);
console.log(newArr);
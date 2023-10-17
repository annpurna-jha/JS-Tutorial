// fill method
// value , start index, end index
// by Default  start index = 0, end Index  = array.length-1

const myArr = new Array(10).fill(0);//every element of array filled with 0
console.log(myArr);

const myArray = [0,1,2,3,4,5,6,7,8];
myArray.fill(0,2,6); //filled with zero starting index = 2 and endIndex = 5-1 bcz end Index is exclusive
console.log(myArray);
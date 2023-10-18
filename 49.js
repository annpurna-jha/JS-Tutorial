// splice method change original array
// start delete insert

const myArr = ['item1','item2', 'item3'];

// delete -  return delted element from array
// let r = myArr.splice(1,1); // start index , delete count
// console.log(r);

// insert into array 
// myArr.splice(1,0,'inserted item'); // index where element wants to insert , delete count , element to be inserted

// delete and insert
const deletedItem = myArr.splice(1,2,"inserted item1 ", "inserted item 2"); // start index , delete count , elements to be inserted
console.log(deletedItem);
console.log(myArr);

// slice method - doesn't change original array
let numArr = [1,5,3,7,4,8];
// let newNum = numArr.slice(3);//3 to last element
let newNum = numArr.slice(3,5);//3 to last element
console.log(numArr);    
console.log(newNum);
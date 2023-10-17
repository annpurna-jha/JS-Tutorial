// splice method change original array
// start delete insert

const myArr = ['item1','item2', 'item3'];

// delete return delted element from array
// myArr.splice(1,1); // start index , delete count

// insert into array 
// myArr.splice(1,0,'inserted item'); // index where element wants to insert , delete count , element to be inserted

// delete and insert
const deletedItem = myArr.splice(1,2,"inserted item1 ", "inserted item 2"); // start index , delete count , elements to be inserted
console.log(deletedItem);
console.log(myArr);
// sets (it is iterable means array or string can store)
//it stores only unique data
// we can't access it using index
// order is not guaranteed
// we can store multiple datatypes in one set 

const numbers = new Set([1,2,3,1]);
// console.log(numbers);
// // console.log(numbers[2]);//undefined no index based access

// iterate Set
// for (let number of numbers){
//     console.log(number);
//  }

// const fName = new Set('harshita');
// console.log(fName);

const item = ['item1' , 'item2','item3','item3'];
const sets = new Set();
sets.add(1);
sets.add('h');
sets.add(2);
sets.add(3);
sets.add(item);
sets.add(['item1' , 'item2']); 
sets.add(['item1' , 'item2']);// now this both array will add bcz both array has differnt address in memory
// console.log(sets);

console.log(sets.has(1)); // it will return true or false


const myArr = [1,2,4,4,5,5,6];
const uniqueEl = new Set(myArr);
let length = 0;
for(let element of uniqueEl){
    length++;
}
console.log(length);

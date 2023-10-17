// map data Structure store key , value pair
// order is fixed
// duplicate keys are not allowed like objects

// object literal also store in key value pair
// but there is a problem key will be always string or symbol
// const person = {
//     fName : "harshit",
//     age : 7,
//     1 : "one"
// }
// console.log(person.age);
// console.log(person['1']);


// map
const person = new Map();
// add key value pair
person.set('fName','Harshit');
person.set('age' , 7);
person.set('age' , 8); // update age bt doesn't create new age
person.set(1,"one");//here 1 is integer
// person.set([1,2,3] , "oneTwoThree");
// person.set({1:"one"}, "oneTwoThree");

// console.log(person);

// print key value pair
// console.log(person.get('age'));
// console.log(person.get(1));

// print keys
// console.log(person.keys());

// for of loop to print keys
// for(let ans of person.keys()){
//     console.log(ans , typeof ans);
// }

// for of loop to print key value pair , it stores key value pair into array
// for(let keyValue of person){
//     console.log(keyValue);
// }

// destructure array as above syntax stored into array
// for(let [key ,value] of person){ 
//     console.log(key ,value);
// }


// map syntax store key value in array format
const user = new Map([['fName' , 'harshit'], ['age' , 7] , [1 , "one"]]);


const person1 = {
    id : 1,
    fName  : "harshit"
};
const extraInfo = new Map(); // store extra info of person1 in map
extraInfo.set (person1,{age:8 , gender :"male"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1));
console.log(extraInfo.get(person1).gender);
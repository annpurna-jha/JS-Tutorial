// use const for creating array

const fruits = ["apple","mango"];
fruits.push("banana"); //it is pushed bcz we don't change the address of array but only push element into array at same address

// fruits = ["pineapple"];//this will not happend in case of const give error  bcz it changes the address of array
console.log(fruits);
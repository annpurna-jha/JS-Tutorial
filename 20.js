// object reference type
// here we use curly braces
// stores in key value pair
const person = {
    name: "Anu", // we can also write key inside " " bcz by default key is of string type
    "age":22,
    hobbies : ["music","travel"]
};
// console.log(person);

// access data from objects
console.log(person.hobbies);
        //  or 
console.log(person["age"]);//by default key is string type that's why written inside " " ,if we don't write like this it will give undefined value

// add data into object
person.gender = "female";
console.log(person);

        //or
person["branch"] = "cse" ;   //we can't write branch without " " , give error

console.log(person);
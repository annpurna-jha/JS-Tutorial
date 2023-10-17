// diff b/w dot and bracket notation
const key = "email";
const person = {
    name: "Anu", 
    "age":22,
    "person hobbies": ["music","travel"]//here person hobbies is allowed bcz written inside string
}
// dot notation
// console.log(person.person hobbies); //it will give error as space are not allowed

// bracket notation
console.log(person["person hobbies"]);//it will not give error as wriiten in string

person[key] = "aj@gmail.com";
console.log(person);
// iterate object
const persons = {
    name: "Anu", 
    "age":22,
    "person hobbies": ["music","travel"]
}
// iterate using for in loop
// for(let person in persons){
//     console.log(person); //print only key
// }

// for(let person in persons){
//     console.log(persons[person]); //print only value
// }

// for(let person in persons){
//     console.log(`${person} : ${persons[person]}`); //print key value pair
// }


// iterate using object keys
console.log(Object.keys(persons));//keys

// for of loop
for(let key of Object.keys(persons)){
    console.log(persons[key]);
}


// parameter destructuring

const person = {
    fName : "annpurna",
    gender : "female",
    age: 24,
}
// function printDetails (obj){
//     console.log(obj.fName);
//     console.log(obj.gender);
// }
function printDetails (fName , gender,age){
    console.log(fName);
    console.log(gender);
    console.log(age);
}

printDetails(person);
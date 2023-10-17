// methods
// function inside object

const person = {
    fName : 'harshit',
    age : 18,
    about : function(){//function inside object known as method
        console.log(`person name is ${this.fName} and age is ${this.age}`); // this stores value at runtime
    }
}

person.about();


// or we can create function outside and call for multiple objects
function personInfo(){
    console.log(`person name is ${this.fName} and age is ${this.age}`); 
}
const person1 = {
    fName : 'harshit',
    age : 24,
    about :personInfo
}
const person2 = {
    fName : 'mohit',
    age : 20,
    about :personInfo
}
const person3 = {
    fName : 'nitish',
    age : 22,
    about :personInfo
}

person2.about();
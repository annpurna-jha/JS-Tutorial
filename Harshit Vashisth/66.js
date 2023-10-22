// new keyword
function createUser(fName,age){
    this.fName = fName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.fName,this.age);
}
const user1 = new createUser("harshit",22);
// new keyword
// 1.) creates empty object 
// this refers to empty object
// 2.) return this means empty object
// 

// console.log(user1);
user1.about();
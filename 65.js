// prototype

// check 61 file for detailed explanantion
// const userMethods = {
//     about : function(){ 
//         return `${this.fName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
function createUser(fName,lName,email,age,address){
    // const user = Object.create(userMethods); //set __proto__ to userMethods 

    const user = Object.create(createUser.prototype); //set __proto__ value to function prototype
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user
}

createUser.prototype.about = function(){ 
            return `${this.fName} is ${this.age} years old`
        };
createUser.prototype.is18 = function(){
            return this.age >= 18;
        };
createUser.prototype.sing = function(){
    return "la la la la";
}

const user1 = createUser("annpurna" , 'jha','abc@gmail.com' ,16 , "my address");
const user2 = createUser("harshit" , 'vj','xyz@gmail.com' ,20, "address of user2");

console.log(user1.about());
console.log(user2.about());
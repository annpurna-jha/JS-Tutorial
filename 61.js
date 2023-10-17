// store methods in different object

const userMethods = {
    about : function(){ 
        return `${this.fName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(fName,lName,email,age,address){
    const user ={};
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    // every time we create a object these methods will created and takes more space that why we store it above in another variable

    // user.about =  function(){ 
    //     return `${this.fName} is ${this.age} years old`
    // };
    // user.is18 = function(){
    //     return this.age >= 18;
    // }

    // and we can call it like this
    user.about = userMethods.about;//we store reference here 
    user.is18 = userMethods.is18;
    return user
}

const user1 = createUser("annpurna" , 'jha','abc@gmail.com' ,16 , "my address");
const user2 = createUser("harshit" , 'vj','xyz@gmail.com' ,20, "address of user2");

console.log(user1.about());
console.log(user2.about());
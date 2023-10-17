// store methods in different object using Object.create method

// check 61 file for detailed explanantion
const userMethods = {
    about : function(){ 
        return `${this.fName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(fName,lName,email,age,address){
    const user = Object.create(userMethods); //check 63 file for detailed explanation
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;

    // check 61 file for detailed explanantion

    // but if in userMethods multiple functions are created and we forget to call any of them method and in future want to print it then it will cause error that's why we will set __proto__ userMethods for user 
    return user
}

const user1 = createUser("annpurna" , 'jha','abc@gmail.com' ,16 , "my address");
const user2 = createUser("harshit" , 'vj','xyz@gmail.com' ,20, "address of user2");

console.log(user1.about());
console.log(user2.about());
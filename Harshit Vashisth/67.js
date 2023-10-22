// class keyword

class CreateUser{
    constructor(fName,lName,email,age,address){
        console.log("Constructor called");
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.fName} is ${this.age} years old`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la";
    }
}

const user1 =new  CreateUser("annpurna" , 'jha','abc@gmail.com' ,16 , "my address");
const user2 = new CreateUser("harshit" , 'vj','xyz@gmail.com' ,20, "address of user2");

console.log(user1.is18());
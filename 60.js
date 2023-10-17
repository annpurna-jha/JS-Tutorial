// create function to create multiple objects

// const user = {
//     fName : "harshit",
//     lName : "jha",
//     email : "abc@gmail.com",
//     age : 18,
//     address : "hNo. Colony , pinCode , state",
//     about: function(){ 
//         return `${this.fName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// above code written inside function

// function (that function create object)
// 2.)  add key value pair
//3.) return object

function createUser(fName,lName,email,age,address){
    const user ={};
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about =  function(){ 
        return `${this.fName} is ${this.age} years old`
    };
    user.is18 = function(){
        return this.age >= 18;
    }
    return user
}

const user1 = createUser("annpurna" , 'jha','abc@gmail.com' ,16 , "my address");
console.log(user1);
const is18 = user1.is18();//false bcz age is 16 paased
console.log(is18);

const about = user1.about();
console.log(about);
 
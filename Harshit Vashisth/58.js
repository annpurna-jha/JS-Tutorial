// arrow functions with this keyword
// const user = {
//     fName : "harshit",
//     age : 18,
//     about : function(){
//         console.log(this.fName,this.age);
//     }
// }
// user.about();

// arrow function of above code
const user = {
    fName : "harshit",
    age : 18,
    about : ()=>{ //we can't change arrow function " this " means in arrow function if "this" is used it will not affected in any condition 
        console.log(this.fName,this.age); // it will give undefined bcz arrow function takes this from upper level or we can say from surrounding 
        // that's why here this will take window but not the user as this
    }
}
user.about();
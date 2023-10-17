// short syntax

// const user = {
//     fName : "harshit",
//     age : 18,
//     about : function(){ 
//         console.log(this.fName,this.age); 
//     }
// }

// short syntax of above code
const user = {
    fName : "harshit",
    age : 18,
    about (){ 
        console.log(this.fName,this.age); 
    }
}
user.about();
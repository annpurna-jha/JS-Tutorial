// call, apply, bind methods

// call method
const person = {
    fName : 'harshit',
    age : 18,
    about : function(){
        console.log(`person name is ${this.fName} and age is ${this.age}`); 
    }
}

const person1 = {
    fName : 'mohit',
    age : 9
};
person.about.call(person1); // this call method call the about function which defined inside person and using call method can access for person1 also


function personInfo(hobby , favMusicians){
    console.log(this.fName , this.age , hobby , favMusicians); 
}

const user = {
    fName : 'nitish',
    age : 22
}
 personInfo.call(user,"guitar" , "mozart");


//  apply method
// personInfo.apply(user,["guitar","bach"]); // same as call method but it paases extra argument into array

// bind method return a function

const func = personInfo.bind(user,"guitar" , "bach")
func();
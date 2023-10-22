//  warning for bind method

const user = {
    fName : "Harshit",
    age : 18,
    about : function(){
        console.log(this.fName , this.age);
    }
}

// don't do this mistake
const myFunc = user.about;//here we don't call our function but store its reference therefor binding of this method will not happen and give output as undefined & undefined
// myFunc();

// we will do binding
const myFunc1 = user.about.bind(user);
myFunc1();
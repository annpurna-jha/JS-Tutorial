export class Person{
    constructor(fName,lastName,age){
        this.fName=fName;
        this.lastName=lastName;
        this.age=age;
    }
    info(){
        console.log(this.fName,this.lastName,this.age);
    }
}

// in one file only one default export can happen
export default class Person2{ // using this when we import don't need to use curly braces 
    constructor(fName,lastName,age){
        this.fName=fName;
        this.lastName=lastName;
        this.age=age;
    }
    info(){
        console.log(this.fName,this.lastName,this.age);
    }
}
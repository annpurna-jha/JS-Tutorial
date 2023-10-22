class Person{
    constructor(fName,lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    get fullName(){
        return `${this.fName} ${this.lName}`;
    }
    setName(fName,lName){
        this.fName = fName;
        this.lName = lName;
    }
}

const person1 = new Person("harshit" , "sharma",22);
console.log(person1.fullName);
person1.setName("harshit","vashistha");
console.log(person1.fullName); 
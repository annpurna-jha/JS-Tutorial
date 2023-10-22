// Object.create method
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// const obj = {
//     key3 : "value3"
// }

// we can also create object like this 
// const obj = {};//created empty object
// obj.key3 = "value3";//then added key value pair

// console.log(obj.key2);//undefined bcz key2 is not defined in obj

// but i want if js doesn't fi d key2 in obj then it will go and find key2 in obj1 if it will not present in obj1 also then print undefined otherwise print key2 value

// another way to create empty object
const obj2 = Object.create(obj1);//empty object
// here obj1 is __proto__ for obj2 if obj2 doesn't find anything in itself then it will find it in __proto__ or [[prototype]]
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2.key2);//print value2 find in obj1 bcz in obj2 it doesn't find key2 if key2 present in obj2 then it will print value of key2 present in obj2



// __proto__ or [[Prototype]]
console.log(obj2.__proto__); //it will print obj1 bcz obj1 is proto for obj2

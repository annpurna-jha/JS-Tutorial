// String  is imutable
let fName = "Annpurna";
console.log(fName[4]);
console.log((fName.length)); //length also counts spaces
console.log(fName[fName.length-1]);

// String methods

let sName = "  Harshit  ";
console.log(sName.length)
// let newString = sName.trim();
sName = sName.trim(); //trim method remove spaces
console.log(sName.length);

sName= sName.toUpperCase(); //we have to store it bcz string are imutable
console.log(sName);

sName= sName.toLowerCase(); //we have to store it bcz string are imutable
console.log(sName);

// slice method
let name2 = "sambhavi";
// let newStr = name2.slice(0,3);//sam
let newStr = name2.slice(1);//1 to end ambhavi
console.log(newStr);

let str = "Please Give Me RS 10000";
let amount = str.slice("Please Give Me RS ".length); // slice till last will give amount
console.log(amount);

// replace method
let name3 = "Harry";
let newName = name3.replace("Har","per");
// let newName = name3.replace("har","per");// as har (case sensitive) is not present it will not change anything 
console.log(newName);

// concat method 
console.log(name2.concat(" is a friend of " , name3 , " and also a friend of " , sName));
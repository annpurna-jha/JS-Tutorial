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

let name2 = "sambhavi";
// let newStr = name2.slice(0,3);//sam
let newStr = name2.slice(1);//1 to end ambhavi
console.log(newStr);

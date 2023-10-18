// typeof
let sName ;
console.log(typeof sName);//undefined type
sName = "jha";
console.log(typeof sName, sName); //can print multiple thing using coma

let myVar = null;
console.log(myVar);
console.log(typeof myVar);//object
//or
console.log(typeof null); //object
// this is a bug or error in javascript type should be null but show object


let myNum = 123;
console.log(myNum);
//in javascript we can use maximum limit of number is
console.log(Number.MAX_SAFE_INTEGER);//max limit of int

// BigInt
//we can't perform operation b/w BigInt and other data type like int etc
let num =6378137818389139;//can't store in integer so we use BigInt
//convert intp BigInt
num = BigInt(num);
console.log(num);
//or
let num1 = 1233n;//also a BigInt
console.log(num1);
console.log(num+num1);
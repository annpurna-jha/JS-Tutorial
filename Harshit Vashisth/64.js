// prototype
// only function provides prototype property
function hello (){
    console.log("hello world");
}

// in js function works as both function and object
// function => function + object

// you can add your own properties in function
hello.myOwnProperty = "very unique value";//added key value like added in object bcz function works as both function and object
console.log(hello.myOwnProperty);

// console.log(hello.prototype);//prototype is like empty object 
// and we can add multiple properties in it like key value pair , function etc
hello.prototype.abc = "abc";
hello.prototype.sing = function(){
    return "lalala";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());
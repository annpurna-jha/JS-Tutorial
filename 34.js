// block scope vs function scope

// let and const are block scope
// var is function scope

{
    var fName = "anu";
}
console.log(fName);
{
    console.log(fName);
} //fName is function scope and full file is considered as main function therefor accessible from anywhere

{
    let sName = "jha";
}
// console.log(sName);//not accessible outeside the block , gives error
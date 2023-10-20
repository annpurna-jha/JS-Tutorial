// Console Objects

console.log(console); //log (print) console objects means it will print all methods conole have


// console.assert(5>553); //used to assert a condition if condition is failed then it will give an error
console.assert(5<553); //if condition is correct then it will not give anything on console

console.clear(); // clear console

let obj = { a:1 , b:2 , c:3};
console.table(obj); // it is used to convert anything into table

console.warn("it is a warning"); //print as a warning
console.error("it is an error"); //print as an error
console.info("It is an Info"); // it will simply print , and goes into info section infact console.log() also goes into info section

console.time("for loop") // it will tell how much time anything take to end
for(let i = 0;i<5;i++){
    console.log(23);
}
console.timeEnd("for loop"); // this will print for loop time to process

console.time("while loop")
let i = 0;
while(i<5){
    console.log(23);
    i++;
}
console.timeEnd("while loop");
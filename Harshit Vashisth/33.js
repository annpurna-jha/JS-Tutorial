// lexical scope
// lexical enviroment for a function is where function is created whether it is created inside another function or in global scope
const myVar = "value1";
function app(){
     
    function myFunc1() {
        // const myVar = "value59";
        console.log("Inside myFunc",myVar); //if myVar is not inside in myFunc1 then it will check in lexical enviroment means myFunc1 is inside app() function so app() is lexical enviroment for myFunc1 and if myVar will present in app it will take value 

        // here myVar is present in global enviroment which is lexical enviroment for app() and myFunc1() and myFunc1 takes myVar from global enviroment
    }
   
    console.log(myVar);
    myFunc1();
}

app();
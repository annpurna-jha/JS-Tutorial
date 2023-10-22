// prompt
let num = 19;
let userGuess = +prompt("Guess a Number");
//take input from user but always store it into string for that use a + symbol in starting
console.log(typeof userGuess, userGuess);

if(userGuess === num){
    console.log("Your Guess is right");
}else if(userGuess>num){

    console.log("Number is High");
}
else{
    console.log("Number is low");
}
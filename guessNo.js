let Random_Num = Math.floor(Math.random() * 100)+1;
let num ;let  attempt = 1;
while(num!=Random_Num){
    num = prompt("Guess the Number between 1 to 100");
    if(num>Random_Num){
        prompt("Guess Number is High");
    }
    else if(Random_Num== num){
        prompt("Congratulation You Won ! You Guessed Number in " + 100-attempt+" chances.");
    }else{
        prompt("Guess Number is Low")
    }
    attempt++;
}


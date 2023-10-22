const Random_Num = Math.floor(Math.random() * 100 )+1;
console.log("Random Number " , Random_Num);
let num = -1;let  attempt = 0;

while(num!== Random_Num){
    num =parseInt(prompt("Guess the Number between 1 to 100"));
    if(num>Random_Num){
        attempt++;
        console.log("Guess Number is High");
    }
    else if(Random_Num === num){
        attempt++;
        console.log("Congratulation You Won ! You score" , 100-attempt," points.");
        
    }else{
        attempt++;
        console.log("Guess Number is Low");
        
    }
    
}
console.log("Done");


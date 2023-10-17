
for(let i = 0;i<10;i++){
    console.log(i);
}
// console.log(i);//if i is declared with let its range is within the loop can't accessible outside loop
for(var j = 0;j<10;j++){
    console.log(j);
}
console.log(j);//if i is declared with var its range  is outside the loop also
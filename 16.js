//for loop in array
let fruits = ["Apple","mango","papaya","grapes"];
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}

let fruits2 = [];
for(let i =0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

//while loop
let i = 0;
while ( i <fruits2.length){
    console.log(fruits2[i]);
    i++;
}
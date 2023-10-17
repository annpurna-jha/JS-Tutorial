//for of loop in array
const fruits = ["apple","mango","papaya"];

for(let fruit of fruits){
    console.log(fruit);//it will give all element of array
}

// for in loop
const fruits1 = ["apple","mango","papaya"];

for(let ind in fruits1){
    console.log(ind); // it will give index of array instead of element , for printing element do -> fruits1[ind]
}
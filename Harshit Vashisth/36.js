// rest parameter

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`,c);
// }
// myFunc(2,3,4,5,6,7,4,1,9);

function add(...numbers){
    let total = 0;
    for(number of numbers){
        total += number;
    }
    return total;
}
console.log(add(2,3,4,5,6,7,4,1,9));
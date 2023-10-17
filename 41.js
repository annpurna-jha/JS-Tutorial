// map method , it gives array in return so it's nesecarry to return it and store in some variable otherwise it will print undefined

const numbers = [3,4,6,1,8];

// const square = function(number){ // store in square variable in the form of array
//     return number * number;
// };
// const squareNumber = numbers.map(square);

const squareNumber = numbers.map(number =>{
    return number * number;
});

console.log(squareNumber);

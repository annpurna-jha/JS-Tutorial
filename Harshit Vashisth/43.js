// reduce method , it takes function as parameter means call back function

// reduce method work on every element of an array and return single value
const numbers = [1,2,3,4,5,10];

// const sum = numbers.reduce((accumlator,currentValue) => {
//     return accumlator+currentValue;
// }); //If we don't provide the initial value, the callback function will start its execution with index as 1 and currentValue as index 2


// we can also do like this with providing initial value of accumlator
const sum = numbers.reduce((accumlator,currentValue) => {
    return accumlator+currentValue;
},0);
// we can write anything at place of accumlator or currentValue as naming convention

// at every call which ever is return will store into accumlator
console.log(sum);

// accumlator    current   return
//      0           1       1 //if initial value given as 0
//      1           2       3
//      3           3       6
//      6           4       10
//      10          5       15
//      15          10      25


const userCart = [
    {productId : 1 ,productName : "mobile" , price : 12000},
    {productId : 12 ,productName : "laptop" , price : 22000},
    {productId : 3 ,productName : "TV" , price : 15000}
];

const totalAmount = userCart.reduce((totalPrice , currentProduct)=>{
    return totalPrice+currentProduct.price
},0);
console.log(totalAmount);
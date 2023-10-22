// every method

const numbers = [2,4,6,8,10];

function isEven (number){
    return number%2===0;
}

const ans = numbers.every(isEven);
console.log(ans);

// const ans1 = numbers.every((number) => number%2 === 0);//check every el is even or not
// callback function ---> true/false
// every method ---> true/false
// console.log(ans1);


const userCart = [
    {productId : 1 ,productName : "mobile" , price : 12000},
    {productId : 12 ,productName : "laptop" , price : 22000},
    {productId : 3 ,productName : "TV" , price : 35000}
];
const ans3 = userCart.every((Price) => Price.price <30000); //check every item <30000
console.log(ans3);
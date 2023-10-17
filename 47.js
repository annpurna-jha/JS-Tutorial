// some method

// if atleast a single array element psatisfies the condition  If the condition is satisfied, it returns true. Else, returns false.
const numbers = [2,3,5,8,9];
const ans = numbers.some((num) => num%2 ===0); // atleast one element is even in array
console.log(ans);

const userCart = [
    {productId : 1 ,productName : "mobile" , price : 12000},
    {productId : 12 ,productName : "laptop" , price : 22000},
    {productId : 3 ,productName : "TV" , price : 35000},
    {productId : 4 ,productName : "mackBook" , price : 25000},
];
const ans1 = userCart.some((Price) => Price.price>100000);
console.log(ans1);
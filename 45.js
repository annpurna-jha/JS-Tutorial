// find method
//it return the first occurence available in array if doesn't match with condition return undefined

const myArr = ["Hello", "cat" , "dog", "lion"];
function isLength3(name){
    return name.length === 3;
}
// const ans = myArr.find(isLength3); 
// console.log(ans);

const ans = myArr.find((value) => value.length === 3); //same as above just paas arrow function
console.log(ans);


const products = [
    {productId : 1 , productName : "p1" , price : 300},
    {productId : 2 , productName : "p2" , price : 3000},
    {productId : 3 , productName : "p3" , price : 200},
    {productId : 4 , productName : "p4" , price : 8000},
    {productId : 5 , productName : "p5" , price : 500},
];
const mypProduct = products.find((product) => {
    return product.productId === 3
});
console.log(mypProduct);
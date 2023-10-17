// sort method
// it change the original array
// sort method sort after convertng data into string and according to ascii value

const userName = ["anil", "ketki", "juhi", "bablu"];
userName.sort();
console.log(userName);

const numbers = [5,9,1200,400,3000];
// numbers.sort(); //if did directly it will sort according to ascii
numbers.sort((a,b)=>{
    return a-b; //ascending order
    // return b-a; //descending order
});

// a-b ---> positive ---> b,a
// for ex => 1200,400
//  a-b --> 790
//  410 , 1200 --> b,a

// a-b ---> negative ---> a,b
// for ex 5,9
// a-b --> -4
//  5, 9 --> a,b 
console.log(numbers);


const products = [
    {productId : 1 , productName : "p1" , price : 300},
    {productId : 2 , productName : "p2" , price : 3000},
    {productId : 3 , productName : "p3" , price : 200},
    {productId : 4 , productName : "p4" , price : 8000},
    {productId : 5 , productName : "p5" , price : 500},
];
// products.sort((a,b)=>{
//     return a.price-b.price ;//low to high
// });//it will change original array
// console.log(products);

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price ;//low to high
});//clone array and store into lowToHigh
console.log(lowToHigh);

const HighToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price ;//high to low  
});//clone array and store into lowToHigh
console.log(HighToLow);

// Promise Resolve and chaining

// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{
//     console.log(value);
// })
// // or
// Promise.resolve(5).then((value)=>{
//     console.log(value);
// })

// then() method always returns promise
// benefit of this is it can crate chain


function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise().then((value)=>{
    console.log(value);
    value+="bar";
    return value;//if we don't return it by default it returns undefined
    //it actually returns promise internally it is like 
    // return Promise.resolve(value);
    
})
.then((value)=>{
    console.log(value);
    value+="baaz";
    return value;
})
.then((value)=>{
    console.log(value);
})

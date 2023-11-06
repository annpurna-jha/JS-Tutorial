//  Intro to promise

const bucket = ['coffee','chips','vegetables','salt','rice'];
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("Couldn't do it");
    }
})

// produce

// consume
// how to consume
friedRicePromise.then(
    //when promise resolve
    (myFriedRice)=>{
        console.log("Lets eat",myFriedRice);//here in myFriedRice paas the Fried rice written in above line inside resolve
    },
    //when promise reject , it is optional you cand add or not depends upon you
    (error) =>{
        console.log(error);//here in error paas the Couldn't do it written in above line inside reject
    }
)
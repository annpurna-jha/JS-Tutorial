//  Function returning Promise

const bucket = ['coffee','chips','vegetables','salt','rice'];

function ricePromise(){
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
            resolve("Fried Rice");
        }else{
            reject("Couldn't do it");
        }
    })
}

ricePromise().then(
    //when promise resolve
    (myFriedRice)=>{
        console.log("Lets eat",myFriedRice);//here in myFriedRice paas the Fried rice written in above line inside resolve
    },
).catch(
(error) =>{console.log(error);}
)
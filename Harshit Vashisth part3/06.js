// Promise and setTimeout
// want to resolve/reject after 2 sec

function myPromise(){
    return new Promise((resolve,rejected)=>{
        const val = false;
        setTimeout(()=>{
            if(val) resolve();
            else rejected();
        },2000)
    })
}
myPromise()
.then(()=>{console.log("resolved");})
.catch(()=>{console.log("rejected");})
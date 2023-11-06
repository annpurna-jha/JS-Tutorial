// understand callback

// function twoNoAdd(num1,num2,callback){
//     // console.log(num1,num2);
//     if(typeof num1 ==="number" && typeof num2 ==="number"){
//         callback(num1,num2);
//     }else{
//         console.log("Wrong data type");
//     }
// }

// function addTwoNo(num1,num2){
//     console.log(num1+num2);
// }

// twoNoAdd(6,8,addTwoNo);

// example 2
function twoNoAdd(num1,num2,onSuccess,onFailure){
    // console.log(num1,num2);
    if(typeof num1 ==="number" && typeof num2 ==="number"){
        onSuccess(num1,num2);
    }else{
        onFailure();
    }
}

function addTwoNo(num1,num2){
    console.log(num1+num2);
}
function onFail(){
    console.log("Wrong data type");
    console.log("Please pass numbers only");
}

twoNoAdd(6,8,addTwoNo,onFail);
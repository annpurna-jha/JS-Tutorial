// understand callback

function twoNoAdd(num1,num2,callback){
    // console.log(num1,num2);
    if(typeof num1 ==="number" && typeof num2 ==="number"){
        callback(num1,num2);
    }else{
        console.log("Wrong data type");
    }
}

function addTwoNo(num1,num2){
    console.log(num1+num2);
}

twoNoAdd(6,8,addTwoNo);
// Important Array methods

const numbers = [4,2,5,8];

function mulBy2(number,ind){
    console.log("index is ",ind);
    console.log(`${numbers[ind]}*2 = ${numbers[ind]*2}`);
}
// for(let i =0;i<numbers.length;i++){
//     mulBy2(i);
// }

// numbers.forEach(mulBy2);

numbers.forEach(function(number,ind){
    console.log("index is ",ind);
    console.log(`${numbers[ind]}*2 = ${numbers[ind]*2}`);
}); 

// filter method it always return boolean value means true or false

const numbers = [3,4,6,1,8];
const isEven = function(number){
    return number%2 === 0;
}

// const evenNo = numbers.filter(isEven); //function expression
// check even no and add into array and print array

const evenNo = numbers.filter(number=>{ // arrow function
    return number%2 === 0;
});

console.log(evenNo);
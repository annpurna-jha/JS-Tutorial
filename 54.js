// optional chaining
const user = {
    fName : "Harshit",
    address : {houseNumber : '1234'},
    // class : {section : 'A'}
}
console.log(user.address);
console.log(user.address.houseNumber);
// console.log(user.class.section);// here it will give error bcz class is commented
// but we don't want error so we can do it like this
console.log(user?.class?.section); //it will give undefined bcz it search like if user exist find class and if class exist then find section

// objects inside array
const users = [
    {id : 1 , fname : "anu", gender : 'female'},
    {id : 2 , fname : 'rahul' , gender : 'male'},
    {id : 3 , fname : 'rohit' , gender : 'male'}
];
// console.log(users);
for(let user of users){
    // console.log(user);
    console.log(user.fname);
}
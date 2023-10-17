// nested destructuring
const users = [
    {id : 1 , fname : "anu", gender : 'female'},
    {id : 2 , fname : 'rahul' , gender : 'male'},
    {id : 3 , fname : 'rohit' , gender : 'male'}
];

// const [user1,user2,user3] = users;
// console.log(user2);

// nested destructure
const [{fname: user1fname, id}, , {gender:user3gender}] = users;
console.log(user1fname);
console.log(id);
console.log(user3gender);
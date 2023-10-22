// Clone using Object.assign

const obj = {
    key1 : "value1",
    key2 : "value2"
};

// const obj2 = obj;

// obj.key3 = "value3";// add key3 in obj bt also added into obj2 bcz we direct point to obj
// console.log(obj);
// console.log(obj2);

// to prevent this we can use spread operator and then add any key in obj will not addded into obj2

// const obj2 = {...obj};
const obj2 = Object.assign({},obj); // same thing as did in above line using spread operator
obj.key3 = "value3";// add key3 in obj bt will not added into obj2
console.log(obj);
console.log(obj2);
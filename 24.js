// spread operator in object

// in onject key is unique if we assign other value in same key it will update the value of key instead of adding a new key
 const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value23"
 };
//  console.log(obj1);

const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4",
 };
  const newObj = {...obj1, ...obj2, key5 : "value5"};//in both obj1 and obj2 there is key1 so the value of key1 is "valueunique" if we change order of obj1 and obj2 in spread operator than value of key1 is "value1"
  console.log(newObj);


  const newObject = {..."abc"};// in this case when we direct paas string using spread operator for clone than the index of string wil be key and value will be character of string
  console.log(newObject);

  const newObject1 = {...["item1","item2"]};// convert array into object
  console.log(newObject1);
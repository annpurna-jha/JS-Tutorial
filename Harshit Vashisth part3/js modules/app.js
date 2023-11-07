// it is a module now
import {fName} from './utils/fName.js';
// or we can do like this if we think variable name is too big
import something,{fName as naam} from './utils/fName.js';//something will be equal to hello world
import {age} from './utils/age.js';
import {sName} from './utils/fName.js';

// import { Person } from './utils/person.js';
// import  Person2  from './utils/person.js';//default export

// or we can do
import  Person2,{Person}  from './utils/person.js';
console.log(naam,sName,age);

const person = new Person("Mohan","Doe",22);
person.info();
console.log(person);

const person2 = new Person2("Maan","Thakur",24);
console.log(person2);

console.log(something);

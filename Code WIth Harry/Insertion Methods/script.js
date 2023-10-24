let a = document.getElementsByTagName('div')[0];
// this is a old method to add code
// a.innerHTML = a.innerHTML+ '<h1> Hello World! </h1>';//in old html this will be added

let div = document.createElement('div'); // a div will be created 
div.innerHTML = '<h1> Hello World!'; //inside create div this will be written
// insertion methods
// a.appendChild(div);// it will append inside a previous div whose class name is "container"

// document.body.append(div); // it will append inside body 

// a.prepend(div);//outside the container
// a.before(div);//outside the container
// a.after(div);//outside the container end of container

a.replaceWith(div);//replace text written inside container class and at that place replace it with the div


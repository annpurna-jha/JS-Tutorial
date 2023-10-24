second.className = "text-dark red";//add multiple classes using className

// return thelist of the  css class names of an element //return a DOMTokenList , type object
console.log(second.classList); //it has 2 class which will appear

second.classList.remove("red");//remove red class

second.classList.add("yellow");//add yellow class

console.log(second.classList.length); //Returns the number of tokens or classes in the list

second.classList.toggle("yellow");//if class added then it will remove , if class is removed then it will added //here remove 
second.classList.toggle("yellow");//here add again

console.log(second.classList.contains("red"));//false bcz red class is not added in second id
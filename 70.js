// alert - used to invoke a mini window with a message alert
alert("Hello Annu");
// prompt - used to take user input as string
// we can give a optional default value to prompt also
let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b" , "26");

// document.write(b);//write it to the page

// confirm - stores a message and waits for the user to press ok or cancel. Return true for Ok and false for Cancel
let write = confirm ("Do you really want to write the value of b to the page");
if(write){
    document.write(b);
}
else{
    document.write("Please allow me to write");
}

// the exact location & look of alert , prompt and confirm determined by the browser which a limitation

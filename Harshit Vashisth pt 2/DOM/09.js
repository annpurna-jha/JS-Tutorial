// loop or iterate elements

// array like object -> indexing, length property

// let navItems = document.getElementsByTagName("a"); //html collection
// console.log(navItems);
// html collection can't use forEach loop to iterate

// simple for loop
// for(let i=0;i<navItems.length;i++){
    // console.log(navItems[i]);
    // const navItem = navItems[i];
    // navItem.style.backgroundColor = "#fff";
    // navItem.style.color = "green";
    // navItem.style.fontWeight = "bold";
// }

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// we can convert html collection in array and than we can apply for each loop ion that array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })


//on node list we can apply all the three for loop methods

const navItems = document.querySelectorAll("a"); //node list
console.log(navItems);


// simple for loop
// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


//for each loop
navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})
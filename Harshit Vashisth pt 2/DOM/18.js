//  static list vs live list

// querySelectorAll gives us static list
// getElementBySomething gives us livec list

// static list
// const listItems = document.querySelectorAll(".todo-list li");//line no. 70 to 74 uncomment
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");//select ul
// ul.append(sixthLi);//add in ul
// console.log(listItems);

// live list 
const ul = document.querySelector(".todo-list");//select ul
// search inside ul only
const listItems = ul.getElementsByTagName("li");//line no. 70 to 74 uncomment
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);//add in ul
console.log(listItems);
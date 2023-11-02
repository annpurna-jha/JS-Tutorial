//Add HTML element using JavaScript

// if we have to change all inner html then we can use it,  otherwise like we did below to add new inner html first it add all previous inner html and then add something new which may cause performance issue
 const todoList = document.querySelector(".todo-list");
 todoList.innerHTML = todoList.innerHTML+"<li> New Todo</li>";
 todoList.innerHTML += "<li>Teach Students</li>";
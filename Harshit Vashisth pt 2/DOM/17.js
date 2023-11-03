// appendChild, insertBefore, replaceChild, removeChild
// bcz append , prepend etc doesn't work in internet explorel


// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// ul.appendChild(li);


const ul = document.querySelector(".todo-list");
// new element
const li = document.createElement("li");
li.textContent = "new todo";
// reference child
const referenceNode = document.querySelector(".first-todo");//line 66 in html page
// ul.insertBefore(li,referenceNode);
// ul.replaceChild(li, referenceNode);
ul.removeChild(referenceNode);

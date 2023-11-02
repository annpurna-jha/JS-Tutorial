// createElement, append, prepend, remove, before, after

// document.createElement() method
// append ->used to add at last

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Students"); //or we can do like this also
// // newTodoItem.textContent = "Teach Students";
// const  todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// console.log(newTodoItem);

// or

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const  todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);//we can use appenChild also
// console.log(newTodoItem);


// prepand used to add at first

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const  todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// remove
// const todo1 = document.querySelector(".todo-list");
// todo1.remove();
// console.log(todo1);


// before
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

// after
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);

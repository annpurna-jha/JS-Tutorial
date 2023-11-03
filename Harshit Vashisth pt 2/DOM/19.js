// How to get the dimensions of an element

// height & width of section-todo
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
const height = sectionTodo.getBoundingClientRect().height;
const width = sectionTodo.getBoundingClientRect().width;
const top = sectionTodo.getBoundingClientRect().top;
console.log(info);
console.log(height);
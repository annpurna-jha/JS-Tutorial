//  insertAdjacentHTML(where,html)

const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li>Teach Students</li>");//similar to append

todoList.insertAdjacentHTML("afterbegin","<li>Teach Students</li>");//similar to prepend

// todoList.insertAdjacentHTML("beforebegin","<li>Teach Students</li>");

// todoList.insertAdjacentHTML("afterend","<li>Teach Students</li>");
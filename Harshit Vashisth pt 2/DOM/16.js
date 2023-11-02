// Clone Nodes

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// // ul.append(li);
// ul.prepend(li);//either use append or prepend 

// for this we can clone node to use both
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);//deep cloning to clone whole subtree, including text that may be in child Text nodes, is also copied.

// If false, only the node will be cloned. The subtree, including any text that the node contains, is not cloned.
ul.append(li);
ul.prepend(li2);
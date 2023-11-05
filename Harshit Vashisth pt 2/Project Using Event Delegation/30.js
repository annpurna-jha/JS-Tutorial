const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type ='text']");
// console.log(todoInput);
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();//it prevent to reload the html page
    const newTodoText = todoInput.value;
    todoInput.value = "";//clear va;ue from input field
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `;
  newLi.innerHTML = newLiInnerHtml;
//   console.log(newLi)
   todoList.append(newLi);
});


// event delegation
todoList.addEventListener("click",(e)=>{
    // console.log(e.target);
    // check if user clicked on done button
   if(e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling;
    // console.log(liSpan);
    liSpan.style.textDecoration = "line-through";
   }
   if(e.target.classList.contains("remove")){
    const targetLi = e.target.parentNode.parentNode;
    targetLi.remove();
   }
})
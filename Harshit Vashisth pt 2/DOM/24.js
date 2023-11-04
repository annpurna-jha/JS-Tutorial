// Events Behind the scenes
console.log("Script start!!");
const allBtn = document.querySelectorAll(".my-buttons button");
allBtn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent);
    })
})
console.log("Script end!!");
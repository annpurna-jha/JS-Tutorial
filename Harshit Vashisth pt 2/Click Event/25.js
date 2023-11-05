// practice with click events
const allBtn = document.querySelectorAll(".my-buttons button");
allBtn.forEach(button =>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})
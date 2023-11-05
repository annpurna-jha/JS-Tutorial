// Click event on multiple buttons
//using clickEvent.html file

const allBtn = document.querySelectorAll(".my-buttons button");

// for(let btn of allBtn) {
//     btn.addEventListener("click",function(){//if at place of annonymous function we create arrow function then it will give error , as we know arrow function refer this to window and window doesn't have any text content
//         // console.log("You clicked Me!!");
//         // console.log(this);
//         console.log(this.textContent);
//     })
// }

// or

// for(let i =0;i<allBtn.length;i++){
//     allBtn[i].addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }

// for each
allBtn.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
})

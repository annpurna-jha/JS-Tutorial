// event object
const firstBtn = document.querySelector("#one");
firstBtn.addEventListener("click",function(){
    console.log(this);
})

// whenever we add eventListener on any element 
// js engine -> execute line by line
// browser -> js engine + extra features
// browser ->js engine + web Api(extra features)

// when browser knows that user performed event Listener , browser will do two works
// 1.) give callback function to js engine
// 2.) along with callback function browser gives information about event happens in the form of object
firstBtn.addEventListener("click",function(event){//here we receive that object (information about event)
    console.log(event);
})
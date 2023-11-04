// Keypress & mouseover event
const body = document.body;
body.addEventListener("keypress",(e)=>{
    // console.log(e);
    console.log(e.key);//press any key display on console
});

// mouseover event
const mainBtn = document.querySelector(".btn-headline");
mainBtn.addEventListener("mouseover",()=>{
    console.log("Mouseover event occured!!");//when mouse goes on that button
});
mainBtn.addEventListener("mouseleave",()=>{
    console.log("Mouseleave event occured!!");//when mouse remove from that button
});
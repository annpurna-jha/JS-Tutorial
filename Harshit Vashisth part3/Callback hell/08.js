const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textConetent = text;
                element.style.color = color;
                 resolve();
            }else{
                reject("Element not found");
            }
        },time)
    })
}

// const returnPromise = changeText(heading1,"One","violet",1000)
// returnPromise
// .then(()=>{return changeText(heading2,"Two","purple",1000)} 
//if we don't return then it will change all text within 1sec bcz it return undefined bt we want change text after prvious completed 
// // means we want promise bt after sometimes

// ).then(()=>{return changeText(heading3,"Three","red",1000)} 
//we can remove curly braces and return keyword in arrow function it will do automatically
// )
// .then(()=> changeText(heading4,"Four","pink",1000))



//or
changeText(heading1,"One","violet",1000)
.then(()=> changeText(heading2,"Two","purple",1000))
.then(()=> changeText(heading3,"Three","red",1000))
.then(()=> changeText(heading4,"Four","pink",1000))
.then(()=> changeText(heading5,"Five","green",2000))
.then(()=> changeText(heading6,"Six","blue",1000))
.then(()=> changeText(heading7,"Seven","brown",1000))
.then(()=> changeText(heading8,"Eight","violet",1000))
.then(()=> changeText(heading9,"Nine","red",1000))
.then(()=> changeText(heading10,"Ten","orange",1000))
.catch((error)=>{//if any hading not found further code will not run
    alert(error);
})
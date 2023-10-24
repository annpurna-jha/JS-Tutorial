// elem.matches(css) -> to check if element matches the given css selector

let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".class"))//false bcz .class class doesn't exist 
console.log(id1.matches(".box"))//true bcz .box class exist 

// elem.closest(css) -> to look for nearest ancestor that matches the given css - selector , the elem itself is also checked
let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box"));//it will start from sp1 check css selector matches or not,  if not then go to its parent , if not, then go to its parent and so on
console.log(sp1.closest("#sp1")); 

// elemA.contains(elemB) return true if elemB is inside elemA(a descendant of elemA) or when elemA == elemB

console.log( id1.contains(sp1));//true as inside id1 sp1 is present

console.log( sp1.contains(id1));//false as inside sp1 id1 is not present
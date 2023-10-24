let user = prompt("S , W or G");
let cpuI = Math.floor(Math.random()*3);//generate b/w 0,1 &2
let cpu = ["S","W","G"][cpuI];

const match = (cpu,user)=>{
    if(cpu===user){
        return "Nobody.";
    }
    else if(cpu === "S" && user ==="W"){
        return "cpu";
    }
    else if(cpu === "S" && user ==="G"){
        return "user";
    }
    else if(cpu === "G" && user ==="W"){
        return "user";
    }
    else if(cpu === "G" && user ==="S"){
        return "cpu";
    }
    else if(cpu === "W" && user ==="S"){
        return "user";
    }
    else if(cpu === "W" && user ==="G"){
        return "cpu";
    }
   
}
let result = match (cpu,user);
console.log(` CPU : ${cpu} and User: ${user} \nThe winner is: ${result.toUpperCase} `);

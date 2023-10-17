// object destructuring
const band = {
    bandName : "led zeplein",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherSong : "kashmir"
};
// let bandName = band.bandName;
// const famousSong = band.famousSong;
// bandName = "queen";
// console.log(bandName, ",",famousSong);

// let {bandName , famousSong } = band;//object destructure
// bandName = "queen";
// console.log(bandName, ",",famousSong);

let {bandName: var1 , famousSong:var2 , ...restProps} = band;
// console.log(bandName);//it will give error as bandname is now changed into var1
console.log(var1);
console.log(restProps);
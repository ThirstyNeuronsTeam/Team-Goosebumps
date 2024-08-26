//array type []
const colors = ["red","blue","green"] //m4
const newColors = [...colors]; //m5
newColors[1] = "yellow";
console.log("array",colors,newColors);



//object type {}
const oldAddress = {name:"Bhuvanesh",age:19 } //m3
const newAddress = {...address}; //m3
newAddress.name = "Rajini"
console.log("object",address,newAddress);
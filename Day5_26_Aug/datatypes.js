//string , number , boolean - primitive types

//object , array - non  primitive types / reference type

//////// PRIMITIVE TYPES
//string type ""
const oldStudentName = "Bhuvanesh"; //m1 // CREATE OLD 
let newStudentName = oldStudentName; //m2 // CREATE NEW AND assign OLD TO NEW
newStudentName = "Ganesh"; // UPDATE
newStudentName = "Mr. " + newStudentName //READ , append AND UPDATE
console.log("string",oldStudentName,newStudentName); // READ

//number type 
const oldAge = 19;
let newAge = oldAge;
newAge = 20;
console.log("number",oldAge,newAge)

//boolean type - true or false
const isRaining = true;
let newIsRaining = isRaining;
newIsRaining = false;
console.log("boolean",isRaining,newIsRaining)

///////REFERENCE TYPES
//object type {}
const address = {name:"Bhuvanesh",age:19 } //m3 //CREATE
const newAddress = address; //m3 //CREATE and assign
newAddress.name = "Rajini" //UPDATE
console.log("object",address,newAddress);

//array type []
const colors = ["red","blue","green"] //m4
const newColors = colors; //m4
newColors[1] = "yellow";
console.log("array",colors,newColors);

const aadharNoSymbol = Symbol("aadharNo");
const personData = {[aadharNoSymbol] : "898979787878787"}


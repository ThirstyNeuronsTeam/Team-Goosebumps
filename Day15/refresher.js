//Variables 
//Datatypes
//Array
//ArrayMethods
//Functions
//Scoping
//Destructuring
//Spread Operator


let age = 16;  //C
let copyAge = age;

age = 20 // U

age = null // D

let newAge = age +2; //R

console.log(age) // R

let names = ["Raja","Siva","Ganesh",{rank:1}] //C
let [f,,,r] = names;

let copyNames = [...names]; //Spread Operator - Create New Memory

names.push("Hari")
names[3].rank = 2;

console.log(names,copyNames);

let doorNo = 5

let address = {doorNo:45,streetName:"Dubai Kurukkku Sandhu",pincode:600025};


console.log(address.doorNo,address.pincode,address.streetName)

const  {doorNo:doorNumber,pincode} = address

console.log(doorNumber,pincode)





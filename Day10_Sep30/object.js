const address = { name: "Bhuvanesh", age: 19 }; //m3 //CREATE
const newAddress = { ...address }; //m3 //CREATE and assign
newAddress.name = "Rajini"; //UPDATE
console.log("object", address, newAddress);

//CREATE
//READ
//UPDATE
//DELETE
//SEARCH
//MERGE

/* const bookShelf1 = ["c", "b", "d"];
{
  //const bookShelf1 = ["phy", "chem", "maths"];
  {
    //const bookShelf1 = ["science", "biology", "botany"];
    console.log("inner scrope");
    console.log(bookShelf1);
  }
}
console.log("outer scope");
console.log(bookShelf1); */

const bookShelf1 = ["phy", "chem", "maths"];
const bookShelf2 = ["science", "biology", "botany"]

//["phy","chem","maths","Sciendce","biologu","botany"];

//const newBookShelf = [...bookShelf1,...bookShelf2]
const newBookShelf = bookShelf1.concat(bookShelf2)

console.log(newBookShelf)


const address2 = {doorNo:14};
const address3 = {streetName:"Gangai amman kovil street"};

//const newAddress2 = {...address2,...address3}
const newAddress2 = Object.assign(address2,address3)

console.log(newAddress2)

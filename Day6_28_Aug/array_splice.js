const animals = [
  { name: "cat", eatingType: "carnivorous", foods: ["rat", "milk"] }, //0
  { name: "elephant", eatingType: "herbivorous", foods: ["leaves", "plants"] }, //1
  { name: "tiger", eatingType: "carnivorous", foods: ["deer", "monkey"] }, //2
  { name: "lion", eatingType: "carnivorous", foods: ["deer", "monkey"] }, //3
];

//insert and delete //2 - Starting Index , 1 - Delete count
const deletedAnimaals = animals.splice(
  2,
  2,
  {
    name: "monkey",
    eatingType: "herbivorous",
    foods: ["fruits"],
  },
  {
    name: "donkey",
    eatingType: "herbivorous",
    foods: ["fruits"],
  }
);

console.log(deletedAnimaals);

///Splice
//1) Input - Starting Index
//2) Input - Delete count
//...) Input -New  Elements

//Splice will return  "deleted items"
//Splice will modify the original array

///toSpliced
//1) Input - Starting Index
//2) Input - Delete count
//...) Input -New  Elements

//toSpliced will return "modified array"
//toSpliced will not  modify the original array

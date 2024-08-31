// I am able to type.
const animal={name: "monkey", food: "banana"}

//create
animal.work="jumping"
//update
animal.food="friuts"



delete animal.food
Reflect.deleteProperty(animal,"food")



const birds=["peacock","crow","eagle"]


birds.splice(1,2,"sporrow")

console.log(birds);
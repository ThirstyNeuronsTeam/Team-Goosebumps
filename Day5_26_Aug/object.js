const address = {name:"Bhuvanesh",age:19,married:true,city:"Chennai" } 
const xyz =  {}
Object.freeze(address)

//CRUD

//CREATE A KEY
//method 1 
address.experienceInYears = 13
//method 2
address["experience InYears"] = 13

//READ A KEY
//method 1 
console.log(address.city)
//method 2
const {city} = address;
console.log(city)


//UPDATE A KEY
address.city="Bangalore"


//DELETE A KEY
//method 1
delete address.married;
//method 2
Reflect.deleteProperty(address,"married") // object.function(arguments or inputs or parameters)
Reflect.deleteProperty(address,"city")
console.log(address)






const colors = ["red","blue","green"]
const ages = [10,17,18,21,25]
const arrayInsideArray = [ [1,2,3] , [4,5,6]           ] 
const students = [{name:"shiva","age":13,"fathername":"Murugan"},{name:"shiva","age":13,"fathername":"Murugan"}]
const address = {name:"Bhuvanesh",age:19,married:true,city:"Chennai" } 
Object.freeze(address)

//CREATE A KEY
address.experienceInYears = 13

//READ A KEY
//console.log(address.city)

//UPDATE A KEY
address.city="Bangalore"


//DELETE A KEY
//delete address.married;
Reflect.deleteProperty(address,"married") // object.function(arguments or inputs or parameters)
Reflect.deleteProperty(address,"city")
console.log(address)
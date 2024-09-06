const employees = [
  { employeeName: "Tamizharasi", employeeEmail: "t@gmail.com" , gender:"F",married:false},
  { employeeName: "Kavitha", employeeEmail: "k@gmail.com" , gender:"F",married:true},
  { employeeName: "Senthil", employeeEmail: "s@gmail.com" , gender:"M",married:true},
  { employeeName: "Bhuvanesh", employeeEmail: "b@gmail.com" , gender:"M",married:false},
  { employeeName: "Dhanusha", employeeEmail: "d@gmail.com" , gender:"F",married:false},
  { employeeName: "Valli", employeeEmail: "v@gmail.com" , gender:"F",married:false},
  { employeeName: "Navasri", employeeEmail: "n@gmail.com" , gender:"F",married:false},
  { employeeName: "Harini", employeeEmail: "h@gmail.com" , gender:"F",married:false},
];


function sendEmail(name,email,content){
    //logic to send mail to employee
}

const box = employees.forEach( (employee) => {   
    sendEmail(employee.employeeName,employee.employeeEmail,"Happy Diwali") } 
)
console.log("for each box")
console.log(box)


const employeeWithTitle = employees.map( (employee) => {
    const clonedEmployee = {...employee}
    if(clonedEmployee.gender==="F" && clonedEmployee.married===true){
        //Ms.
        //Creating New Name
        const newName = "Mrs."+ clonedEmployee.employeeName
        //Pushing the new name to the key "employeeName"
        clonedEmployee.employeeName = newName;
        return clonedEmployee;
    }
    if(clonedEmployee.gender==="F" && clonedEmployee.married===false){
        //Mrs.
        const newName = "Ms."+ clonedEmployee.employeeName
        clonedEmployee.employeeName = newName;
        return clonedEmployee;
    }
    if(clonedEmployee.gender==="M"){
        //Mr.
        const newName = "Mr."+ clonedEmployee.employeeName
        clonedEmployee.employeeName = newName;
        return clonedEmployee;
    }
})
console.log("old Array")
console.log(employees)
console.log("new Array")
console.log(employeeWithTitle);






//map - nextLevel Workder will retur some data and that data pushed into an array
//filter - nextLevel Workder will return some true or false , true data pushed into an array
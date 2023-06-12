'use strict';

let employeeArr=[] // creating array to push employee's instances

function Employee(EmployeeID,FullName,Department,Level,ImageURL) {
    this.EmployeeID=EmployeeID;
    this.FullName=FullName;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
    this.Salary=0;
    employeeArr.push(this);
    this.netSalary=function() {               
    this.Salary=this.Salary-this.Salary*0.075 }
    }

// prototype function to calculate random salary based on level
Employee.prototype.randomSalary=function(){
    if(this.Level=="Junior")
    this.Salary=Math.floor(Math.random() * (1000 - 500+ 1) + 500)
    if(this.Level=="Mid-Senior")
    this.Salary=Math.floor(Math.random() * (1500 - 1000+ 1) + 1000)
    if(this.Level=="Senior")
    this.Salary=Math.floor(Math.random() * (2000 - 1500+ 1) + 1500)
}

// prototype function to render the employeename and salary to the main page
Employee.prototype.renderEmoloyee=function() {
    let empData = document.getElementById("employeeData");
    let img = document.createElement("img")
    img.src="./assets/employee.jpg"
    img.width=70
    let empName = document.createElement('p')
    empName.textContent=this.FullName
    let department_level= document.createElement('p')
   department_level.textContent="Department: "+this.Department+" - Level: "+this.Level
   let empId= document.createElement('p')
   empId.textContent=this.EmployeeID
empData.appendChild(img)
empData.appendChild(empName)
empData.appendChild(department_level)
empData.appendChild(empId)
}

// generate unique four digits
var num =0;
function idGenerator(num) {
    let str=num.toString()
    let string ="0000"
    let id=string.substring(0,string.length-str.length)+str;
    return id
}

// access form by DOM
const myForm = document.getElementById("myForm");

// Adding an event listener for form submission
myForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
event.preventDefault();
console.log(event)
let fullname=event.target.Name.value;
let department=event.target.Department.value;
let level=event.target.Level.value;
num++;
let registeredEmployee = new Employee(idGenerator(num),fullname,department,level)
registeredEmployee.randomSalary()
registeredEmployee.netSalary()
registeredEmployee.renderEmoloyee()
}
  







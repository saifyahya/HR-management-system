
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
document.write("<p><b>Employee Name: </b>"+this.FullName+"</p>")
document.write("<p><b>Employee Salary: </b>"+this.Salary+"</p>")
document.write("<br>")
}
   // creating instances of Employee constructor
let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let safi = new  Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
let rana= new Employee(1005, "Rana Saleh", "Development", "Junior");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");




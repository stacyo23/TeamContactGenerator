// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee'); 

//Manager class is the subclass of employee, inheriting name, id, email - added office argument
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        this.officeNumber=officeNumber;  

    }
    getOffice() {
        return this.officeNumber; 
    }
    getRole()  {
        
        const Role = "Manager"; 
        return Role; 
    }
}

//exports Manager
module.exports = Manager; 
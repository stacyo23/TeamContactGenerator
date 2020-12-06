// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee'); 

//Intern class is the subclass of employee, inheriting name, id, email-added school property
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); 
        this.school=school; 
        

    }
    getSchool() {
        return this.school; 
    }
    getRole()  {
        
        const Role = "Intern"; 
        return Role; 
    }
}

//exports Intern
module.exports = Intern; 
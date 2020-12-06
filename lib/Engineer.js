// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee'); 


//Engineer class is the subclass of employee, inheriting name, id, email-added github name
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); 
        this.github=github; 

    }
    getGithub() {
        return this.github; 
    }
    getRole()  {
        const Role = "Engineer"; 
        return Role; 
    }
}

//export Engineer class to other files
module.exports = Engineer; 
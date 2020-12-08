const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");

//empty array to push employee info to 
const roster =[]; 

//function to handle inquirer 
function employeeData() {
    console.log("Team Contact Generator processing..."); 
   inquirer.prompt([
       {
        type: "list", 
        name: "role", 
        message: "What is the role for this employee?",
        choices: ["Manager", "Engineer", "Intern", "Exit/Save"]
       }, 
       {
        type: "input", 
        name: "name", 
        message: "What is the employee's name?",
        //boolean function that checks to see if the q should be asked if "Exit/Save" chosen
       when: function(response) {
           return(response.role !== "Exit/Save")
       }
        }, 
       {
        type: "input", 
        name: "id", 
        message: "What is the employee's id number?",
        //boolean function that checks to see if the q should be asked if "Exit/Save" chosen
        when: function(response) {
            return(response.role !== "Exit/Save")
        }
       }, 
       {
        type: "input", 
        name: "email", 
        message: "What is the employee's email?",
        //boolean function that checks to see if the q should be asked if "Exit/Save" chosen
        when: function(response) {
            return(response.role !== "Exit/Save")
        }
       }, 
       {
        type: "input", 
        name: "github", 
        message: "What is the Engineer's gitHub name?",
        //boolean function that checks to see if the q is applicable if "Engineer" chosen
        when: function(response) {
            return(response.role === "Engineer")
        }
       }, 
       {
        type: "input", 
        name: "school", 
        message: "What school does the Intern attend?",
        //boolean function that checks to see if the q is applicable if "Intern" chosen
        when: function(response) {
            return(response.role === "Intern")
        }
       }, 
       {
        type: "input", 
        name: "officeNumber", 
        message: "What is the Manager's office number?",
        //boolean function that checks to see if the q is applicable if "Manager" chosen
        when: function(response) {
            return(response.role === "Manager")
        }
       }, 
   ]).then(function (response) {
    if(response.role === "Manager") {
        //if role is mgr, it's a new instantation of Manager with the associated arguments
     const manager = new Manager(response.name, response.id, response.email, response.officeNumber); 
     //pushes new instance to roster array
     roster.push(manager); 
     //calls the function again to add another member or exit
     employeeData();
    } else if (response.role === "Engineer") {
        //if role is engineer, it's a new instantation of Engineer with the associated arguments
        const engineer = new Engineer(response.name, response.id, response.email, response.github); 
        //pushes new instance to roster array
        roster.push(engineer); 
        //calls the function again to add another member or exit
        employeeData();
    } else if (response.role === "Intern") {
        //if role is intern, it's a new instantation of Intern with the associated arguments
        const intern = new Intern(response.name, response.id, response.email, response.school); 
        //pushes new instance to roster array
        roster.push(intern); 
        //calls the function again to add another member or exit
        employeeData();
    } else {
        //on choosing Exit/Save, gives feedback to let user know what's happening
        console.log("Saving data...")
        //calls create HTML function
        createHTML(); 
        }


   }); 

}

// initiates prompts
employeeData(); 


function createHTML(){
    //checks to see if an output folder already exists...if not, it makes one
    if(fs.existsSync("output") || fs.mkdirSync("output")); 
    //writes the HTML code to the HTML file
    fs.writeFileSync(outputPath, render(roster), "utf-8");
    //added a comment to make it a little user-friendly
    console.log("Generating team contacts..."); 
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile);



class Employee {
    constructor (name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id; 
        this.role = "employee";
        this.getname = function() {
            return this.name;
        }
        this.getId = function() {
            return this.id;
        }
        this.getEmail = function() {
            return this.email;
        }
        this.getRole = function() {
            return this.role;
        }

    }
}

//const phil = new Employee("Phil", 1, "joe@phil.com");
//console.log(phil);



class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
    }
}

//const josie = new Manager("Josie", 2, "jos@ie.com", 3144);
//console.log(josie);


class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
        this.getGithub = function() {
            return this.github;
        }
    }
}

//const jenny = new Engineer("Jenny", 3, "je@nny.com", "jennyrshort");
//console.log(jenny);

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
        this.getSchool = function() {
            return this.school;
        }
    }
}

//const davie = new Intern("Davie", 5, "da@vie.com", "Devry");
//console.log(davie);


const manArray = [];
const engArray = [];
const intArray = [];


const makeManager = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "manName",
        message: "Manager's name:"
    },
    {
        type: "input",
        name: "manEmail",
        message: "Manager's email address:"
    },
    {
        type: "input",
        name: "manID",
        message: "Manager's ID number:"
    },
    {
        type: "input",
        name: "manOffice",
        message: "Manager's office number:"
    }
]).then(function({manName, manEmail, manID, manOffice}){
    const newManager = new Manager(manName, manEmail, manID, manOffice);
    manArray.push(newManager);
    //console.log(newManager);
    buildTeam();    
})
}

makeManager();



function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "Add an engineer or intern?",
            choices: [
                "Engineer",
                "Intern",
                "No additional team members"
            ]
        }
    ]).then(answer => {
        switch(answer.teamMember) {
            case "Engineer":
                buildEngineer();
                break;
            case "Intern":
                buildIntern();
                break;
            default:
                buildUnits(manArray, engArray, intArray);
                //console.log(manArray, engArray, intArray);
        }
    });
    }
    
    function buildEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "engName",
            message: "Engineer's name:"
        },
        {
            type: "input",
            name: "engEmail",
            message: "Engineer's email address:"
        },
        {
            type: "input",
            name: "engID",
            message: "Engineer's ID:"
        },
        {
            type: "input",
            name: "engGit",
            message: "Engineer's Github username:"
        },
    ]).then(function({ engName, engEmail, engID, engGit }) {
        const newEng = new Engineer(engName, engEmail, engID, engGit)
        engArray.push(newEng);
        buildTeam();
    })
    }
    
    function buildIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "intName",
            message: "Intern's name:"
        },
        {
            type: "input",
            name: "intEmail",
            message: "Intern's email address:"
        },
        {
            type: "input",
            name: "intID",
            message: "Intern's ID:"
        },
        {
            type: "input",
            name: "intSchool",
            message: "School intern is attending:"
        }
    ]).then(function({ intName, intID, intEmail, intSchool }) {
        const newInt = new Intern(intName, intEmail, intID, intSchool);
        intArray.push(newInt);
        buildTeam();
    })
    }
    
    
    
    const buildUnits = (managerArray, engineerArray, internArray) => {
    
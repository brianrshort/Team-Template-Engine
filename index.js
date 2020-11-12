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

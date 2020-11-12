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


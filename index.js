const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const writeFileAsync = util.promisify(fs.writeFile);

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
});
};

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
        const newEng = new Engineer(engName, engEmail, engID, engGit);
        engArray.push(newEng);
        buildTeam();
    });
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
    
        const managerCards = managerArray.map(manager => {
            return `
            <div class="card m-3 col-3">
                <div class="card-header">
                    <h2 class="card-title">${manager.name}</h2>
                    <h3 class="card-title"><i class="fas fa-hands-helping"></i> ${manager.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office number: ${manager.officeNumber}</li>    
                    </ul>
                </div>
            </div>`;
        });
        
        const engineerCards = engineerArray.map(engineer => {
            return `
            <div class="card m-3 col-3">
                <div class="card-header">
                    <h2 class="card-title">${engineer.name}</h2>
                    <h3 class="card-title"><i class="fas fa-code"></i> ${engineer.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>`;
        });
        
        const internCards = internArray.map(intern => {
            return `
            <div class="card m-3 col-3">
                <div class="card-header">
                    <h2 class="card-title">${intern.name}</h2>
                    <h3 class="card-title"><i class="fas fa-graduation-cap"></i> ${intern.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
            `;
    });
    
    const generateIndex = appendIndex(managerCards.join(""), engineerCards.join(""), internCards.join(""));
    writeFileAsync("./output/index.html", generateIndex, function(err){
        if (err) {
            return console.log(err);
        }
    });
    }; 
    
    
    const appendIndex = function(managerCards, engineerCards, internCards) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meet the Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
        <body>
        <div class="bg-dark text-center p-3">
            <div class="header-text">
                  <h1 id="navbar-title" style="color: white;">Meet the Team</h1>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                    ${managerCards}
                    ${engineerCards}
                    ${internCards}
            </div>        
        </div>
        
        <script src="https://kit.fontawesome.com/6b1cbbe265.js" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
        </html>
        `
        }
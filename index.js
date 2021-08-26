const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const output = path.resolve(__dirname, "output");
const outputpath = path.join(OUTPUT_DIR, "team.html");
const render = require("./source/template");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

const team = [];
const arrayId = [];

addManager();

function addManager() {

    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        }
        ,
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id?"
        }
        ,
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's Email?"
        }
        ,
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        arrayId.push(answers.managerId);
        employeeType();
    })

}

function employeeType() {

    inquirer.prompt([
        {
            type: "list",
            name: "typeOfTeamMember",
            message: "What type of team member would you like to have?",
            choices: [
                "Engineer",
                "Intern",
                "Done adding team members",
            ]
        }
    ])
        .then(userInput => {
            switch (userInput.typeOfTeamMember) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildHtml();
            }
        })

}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the engineer?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the Id of the engineer?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's Email?",
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub username?",
        }
    ])
        .then(answers => {
            const enigneer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
            team.push(enigneer);
            arrayId.push(answers.engineerId);
            employeeType();
        })
}
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the intern?",
        },
        {
            type: "input",
            name: "internId",
            message: "What is the Id of the intern?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's Email?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's School?",
        }
    ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            team.push(intern);
            arrayId.push(answers.internId);
            employeeType();
        })
}


function buildHtml() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8")
}
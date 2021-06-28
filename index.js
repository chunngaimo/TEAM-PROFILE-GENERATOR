const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const output = path.resolve(__dirname, "output");
const outputpath = path.join(OUTPUT_DIR, "team.html");
const render = require("./source/template");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");

const team = [];
const arrayId = [];

function addManager(){

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
]).then(answers=>{
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    team.push(manager);
    arrayId.push(answers.managerId);
    //build & call createTeam function
})

}



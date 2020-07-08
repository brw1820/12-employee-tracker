const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "root",
    database: "employee_db"
});

function beginQuestion()    {
    inquirer.prompt({
        name: "question",
        type: "list",
        message: "What would you like to accomplish today?",
        choices: [
            "Add Employee",
            "Add Employee Role",
            "Add Department",
            "View Current Employees",
            "View Current Employee Roles",
            "View Departments",
                 
        ]
    })
}
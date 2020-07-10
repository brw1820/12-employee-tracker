const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "milkyway",
    database: "employee_db"
});

connection.connect(function(err){
    if(err){
        throw err;
    }
    startPrompt();
});



function startPrompt() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Department",
            "Add Role",
            "Add Employee",
            "View Departments",
            "View Roles",
            "View Employees",
            "Update Employee Role",
            "Delete Department",
            "Delete Role",
            "Delete Employee",
            "EXIT"]
    }).then(function (answer) {
        console.log("You selected: " + answer.action);

        switch (answer.action) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Employees":
                viewEmployees();
                break;
                case "View Roles":
                viewRoles();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Delete Department":
                deleteDepartment();
                break;
            case "Delete Role":
                deleteRole();
                break;
            case "Delete Employee":
                deleteEmployee();
                break;
            default:
                exit();
        }
    });
}

function addDepartment() {
    console.log('it is working')
    inquirer.prompt({
        type: "input",
        message: "Enter name of department:",
        name: "dept"
    }).then(function (answer) {
        connection.query("INSERT INTO department SET ?", [{name:answer.dept}], function (err, res) {
            if (err) throw err;
            console.table(res)
            console.log("Successfully added Department!");
            finishPrompt();
        })
    });
}

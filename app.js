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

function addRole() {
    inquirer.prompt([{
        type: "input",
        message: "Enter role:",
        name: "roleName"
    },
    {
        type: "input",
        message: "Enter role salary:",
        name: "annualSalary"
    },
    {
        type: "input",
        message: "Enter department ID:",
        name: "deptID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO employee SET ?", [{title:answer.roleName, salary:answer.annualSalary, department_id:answer.deptID}], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully added Role!");
            finishPrompt();
        });
    });
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "Enter first name of new employee:",
        name: "firstName"
    },
    {
        type: "input",
        message: "Enter last name of new employee:",
        name: "lastName"
    },
    {
        type: "input",
        message: "Enter employee's role ID:",
        name: "roleID"
    },
    {
        type: "input",
        message: "Enter employee's manager ID:",
        name: "managerID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO employee SET ?", [{first_name:answer.firstName, last_name:answer.lastName, role_id:answer.roleID, manager_id:answer.managerID}], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully added New Employee!");
            finishPrompt();
        });
    });
}

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
            "View employee",
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
            case "View employee":
                viewEmployee();
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
        connection.query("INSERT INTO role SET ?", [{title:answer.roleName, salary:answer.annualSalary, department_id:answer.deptID}], function (err, res) {
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

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        finishPrompt();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        finishPrompt();
    });
}

function viewEmployee() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        finishPrompt();
    });
}

function updateEmployeeRole() {
    inquirer.prompt([{
        type: "input",
        message: "Enter the employee id number:",
        name: "updateEmployee"
    },
    {
        type: "input",
        message: "Enter the updated role id:",
        name: "updateRole"
    }
    ]).then(function (answer) {
        connection.query("UPDATE employee SET role_id=? WHERE id=?", [answer.updateRole, answer.updateEmployee], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully updated Employee Role!");
            finishPrompt();
        });
    });
}

function deleteDepartment() {
    inquirer.prompt({
    type: "input",
    message: "Enter Department Name:",
    name: "dept"
}).then(function (answer) {
    connection.query("DELETE FROM department WHERE name=?", [answer.dept], function (err, res) {
        if (err) throw err;
        console.log("Successfully Deleted Department!");
        finishPrompt();
    });
});
}

function deleteRole() {
    inquirer.prompt({
    type: "input",
    message: "Enter id number:",
    name: "role"
}).then(function (answer) {
    connection.query("DELETE FROM role WHERE id=?", [answer.role], function (err, res) {
        if (err) throw err;
        console.log("Successfully Deleted Role!");
        finishPrompt();
    });
});
}

function deleteEmployee() {
    inquirer.prompt({
    type: "input",
    message: "Enter Employee's id number:",
    name: "employeeID"
}).then(function (answer) {
    connection.query("DELETE FROM employee WHERE id =?", [answer.employeeID], function (err, res) {
        if (err) throw err;
        console.log("Successfully Deleted Employee!");
        finishPrompt();
    });
});
}

function finishPrompt() {
    inquirer.prompt({
        type: "list",
        message: "Are you finished?",
        choices: ["yes", "no"],
        name: "finished"
    }).then(function(answer){
        if ("yes" === answer.finished){
            exit();
        } else{
            startPrompt();
        }
    })
}
function exit() {
    connection.end();
    process.exit();
};


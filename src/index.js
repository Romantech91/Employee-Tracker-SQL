const inquirer = require("inquirer");
const queries = require("./queries");

const mainMenu = async () => {
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    })
    .then(async (res) => {
      switch (res.menu) {
        case "View all departments":
          await queries.viewDepartments();
          mainMenu();
          break;
        case "View all roles":
          await queries.viewRoles();
          mainMenu();
          break;
        case "View all employees":
          await queries.viewEmployees();
          mainMenu();
          break;
        case "Add a department":
          await queries.addDepartment();
          mainMenu();
          break;
        case "Add a role":
          await queries.addRole();
          mainMenu();
          break;
        case "Add an employee":
          await queries.addEmployee();
          mainMenu();
          break;
        case "Update an employee role":
          await queries.updateEmployeeRole();
          mainMenu();
          break;
        case "Exit":
          process.exit();
      }
    });
};

mainMenu();

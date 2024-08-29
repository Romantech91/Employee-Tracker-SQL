const inquirer = require("inquirer");
const queries = require("./queries");

async function mainMenu() {
  try {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "action",
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
      },
    ]);
    switch (answer.action) {
      case "View all departments":
        await queries.viewDepartments();

        break;
      case "View all roles":
        await queries.viewRoles();

        break;
      case "View all employees":
        await queries.viewEmployees();

        break;
      case "Add a department":
        await queries.addDepartment();

        break;
      case "Add a role":
        await queries.addRole();

        break;
      case "Add an employee":
        await queries.addEmployee();

        break;
      case "Update an employee role":
        await queries.updateEmployeeRole();

        break;
      case "Exit":
        await queries.closeConnection();
        console.log("Goodbye!");
        process.exit();
    }
    mainMenu();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

mainMenu();

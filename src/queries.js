const pool = require("./dbConfig");
const inquirer = require("inquirer");

async function viewDepartments() {
  const res = await pool.query("SELECT * FROM department");
  console.table(res.rows);
}

async function viewRoles() {
  const res = await pool.query("SELECT * FROM role");
  console.table(res.rows);
}

async function viewEmployees() {
  const res = await pool.query("SELECT * FROM employee");
  console.table(res.rows);
}

async function addDepartment() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the name of the department:",
    },
  ]);
  await pool.query("INSERT INTO department (name) VALUES ($1)", [answer.name]);
  console.log("Department added successfully.");
}

async function addRole() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of the role:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter the salary for the role:",
    },
    {
      type: "input",
      name: "department_id",
      message: "Enter the department ID for the role:",
    },
  ]);
  await pool.query(
    "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)",
    [answer.title, answer.salary, answer.department_id]
  );
  console.log("Role added successfully.");
}

async function addEmployee() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "Enter the first name of the employee:",
    },
    {
      type: "input",
      name: "last_name",
      message: "Enter the last name of the employee:",
    },
    {
      type: "input",
      name: "role_id",
      message: "Enter the role ID for the employee:",
    },
    {
      type: "input",
      name: "manager_id",
      message:
        "Enter the manager ID for the employee (or leave blank if none):",
    },
  ]);
  await pool.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)",
    [
      answer.first_name,
      answer.last_name,
      answer.role_id,
      answer.manager_id || null,
    ]
  );
  console.log("Employee added successfully.");
}

async function updateEmployeeRole() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "employee_id",
      message: "Enter the ID of the employee to update:",
    },
    {
      type: "input",
      name: "role_id",
      message: "Enter the new role ID for the employee:",
    },
  ]);
  await pool.query("UPDATE employee SET role_id = $1 WHERE id = $2", [
    answer.role_id,
    answer.employee_id,
  ]);
  console.log("Employee role updated successfully.");
}

async function closeConnection() {
  await pool.end();
}

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  closeConnection,
};

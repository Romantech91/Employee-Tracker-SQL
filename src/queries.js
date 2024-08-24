const { client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

client.connect();

async function viewDepartments() {
  const res = await client.query("SELECT * FROM department");
  console.table(res.rows);
}

async function viewRoles() {
  const res = await client.query("SELECT * FROM role");
  console.table(res.rows);
}

async function viewEmployees() {
  const res = await client.query("SELECT * FROM employee");
  console.table(res.rows);
}

module.exports = { viewDepartments, viewRoles, viewEmployees };

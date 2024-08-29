# Employee Tracker SQL

## Description

Employee Tracker SQL is a command-line application that allows users to manage a company's employee database. The application uses Node.js, Inquirer, and PostgreSQL to interact with the database and perform various operations such as viewing departments, roles, and employees, as well as adding new departments, roles, and employees, and updating employee roles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/your-username/employee-tracker-sql.git
   ```

2. Navigate to the project directory:

   ```sh
   cd employee-tracker-sql
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Set up the PostgreSQL database:

   - Create a new database named `employee_tracker_db`.
   - Run the SQL scripts located in the `db` folder to set up the schema and seed the database:
     ```sh
     psql -U your_username -d employee_tracker_db -f db/schema.sql
     psql -U your_username -d employee_tracker_db -f db/seeds.sql
     ```

5. Update the database configuration in `src/dbConfig.js` with your PostgreSQL credentials:

   ```javascript
   const { Pool } = require("pg");

   const pool = new Pool({
     user: "your_username",
     host: "localhost",
     database: "employee_tracker_db",
     password: "your_password",
     port: 5432,
   });

   module.exports = pool;
   ```

## Usage

1. Start the application:

   ```sh
   node src/index.js
   ```

2. Follow the prompts to perform various operations such as viewing departments, roles, and employees, adding new departments, roles, and employees, and updating employee roles.

## Database Schema

The database schema consists of three tables: `department`, `role`, and `employee`.

- `department`:

  - `id`: Primary key
  - `name`: Name of the department

- `role`:

  - `id`: Primary key
  - `title`: Title of the role
  - `salary`: Salary for the role
  - `department_id`: Foreign key referencing `department`

- `employee`:
  - `id`: Primary key
  - `first_name`: First name of the employee
  - `last_name`: Last name of the employee
  - `role_id`: Foreign key referencing `role`
  - `manager_id`: Foreign key referencing `employee` (self-referencing)

## Features

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the ISC License.

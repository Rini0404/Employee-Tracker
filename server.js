const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const inquirer = require('inquirer');
// const db = require('../db/connections');

// const { check } = require('../helpers/validation');


// middleware
app.use (express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Rinipini2000-",
    database: "employees",
  },

  console.log(`connected to Employess DataBase! `)

);

  startPrompt();
// ++++++++++++++++++++++ Starting Prompt+++++++++++++++++++++++++++
  function startPrompt () {
    inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'How may we begin?',
          choices: [
            'View Roles',
            'View employees',
            'Add a department to your organization',
            'Add Role',
            'Add employee',
            'Update Employee Role',
            'Exit',
          ]
      }
    ]).then(function(val) {
        switch (val.choice){
          case 'View Employees':
            viewEmployees(); //call the function to see employees
          break;
          // new case
            case 'View Roles':
              viewRoles(); //call the function to see roles 
            break;
          // new case
            case 'View Departments':
              viewDepartmants(); //call the function to see departments
            break;
          // new case case addStuff 
            case 'Add new Employee':
              addEmployee();
            break;
          // add
            case 'Update Employee':
              updateEmployee();
            break;
          // add
            case 'Add Role':
              addRole();
            break;
          // add
            case 'Add Department':
              addDepartment();
            break;
          // add
            case 'Update Employee':
              updateEmployee();
            break;
          // add

        }
    })
  }
// view Emps

function viewEmployees () {
  connection.query('SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, '', e.last_name) 
  )
}






  // const departments = () => {
  //   inquirer.prompt([
  //     {
  //       type: 'input',
  //       name: 'department',
  //       message: 'What department would you like to access?',
  //       // validate: stringCheck, 
  //       // filter the input to trim `
  //         filter: (input) => {
  //           return input.trim();
  //         },
  //     }
  //   ]).then((answers) => {
  //     const sql = `INSERT INTO departments (name) VALUES (?)`;
  //       const par = [answers.departments];
  //         db.query(sql, par, (err, answers) => {
  //           (err) ? console.log(err) : console.log(`${par} added to the new Departments`)
  //         })
  //   })
  // }

  // const addRole = [{
  //   type: 'input'
  // }];
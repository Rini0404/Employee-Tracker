const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const inquirer = require('inquirer');
const res = require('express/lib/response');
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

  startMenu();
// ++++++++++++++++++++++ Starting Prompt+++++++++++++++++++++++++++
  function startMenu () {
    inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'How may we begin?',
          choices: [
            'View Roles',
            'View Employees',
            'View Departments',
            'Add a department to your organization',
            'Add Role',
            'Add Employee',
            'Update Employee',
            'Exit',
          ]
      }
    ]).then(function(val) {
        switch (val.choice){
          // new case
            case 'View Roles':
              viewRoles(); //call the function to see roles 
            break;
            case 'View Employees':
            viewEmployees(); //call the function to see employees
          break;
          // new case
            case 'View Departments':
              viewDepartments(); //call the function to see departments
            break;
          // new case case addStuff 
            case 'Add Employee':
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
            case 'Add a department to your organization':
              addDepartment();
            break;
            case 'Exit':
              connection.end();
            break;

        }
    })
  }




// view Emps
// TODO: NOT WORKING,,,,,,
function viewEmployees () {
  connection.query( `SELECT e.id AS 'Employee ID', CONCAT(e.last_name, ', ', e.first_name) AS Employee, role.title AS Title, department.name AS Departments, role.salary AS Salary, IFNULL(CONCAT(m.last_name, ', ', m.first_name), "") AS Manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id LEFT JOIN role ON role.id = e.role_id LEFT JOIN department ON department.name = role.department_id`,
      function(err, res) {
        if (err) throw err
          console.table(res)
            startMenu();
      }
  )
}


// roles
  function viewRoles() {
    connection.query( `SELECT role.title AS TITLE, role.id AS "Role ID", department.name AS Department, role.salary AS Salary FROM role LEFT JOIN department ON role.department_id = department.id`,
      function (err, res) {
        if (err) throw err
          console.table(res)
            startMenu();
      }
    )
  }

// TODO: SELECT A ROLE FOR ADDING A NEW EMP
  var roleArray = [];
    function roleSelector() {
      connection.query( `SELECT * FROM `, function (err, res) {
        if (err) throw err
          for (var i = 0; i < res.length; i++) {
            roleArray.push(res[i].title);
          }
      })
            return roleArray;
    }



    // TODO: SELECt Manager STATUS FOR NEW EMP
      var arrayManager = [];
        function managerSelector () { 
          connection.query(`SELECT first_name, last_name FROM employee WHERE manager_id IS NULL`, 
            function (err, res){
              if (err) throw err
                for (var i = 0; i < res.length; i++){
                  arrayManager.push(res[i].first_name);
                }
            }
          )
          return arrayManager;
        }





  // TODO: Departments
    function viewDepartments() {
      connection.query('SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role_id JOIN department ON role.department_id = department.id ORDER BY employee.id;',
        function (err, res) {
          if (err) throw err
            console.table(res)
              startMenu();
        }
      )
    }


    // TODO: ADD DEPARTMENTS 

    function addDepartment(){
      inquirer.prompt([
        {
          name: "name", 
            type: 'input',  
              message: 'Which Department would you like to add?',
        }
      ]).then(function (res) {
        
        connection.query('INSERT INTO department SET ?',
        {
          name: res.name,
        },  
          function (err, res) {
            if (err) throw err
            console.table(res)
              
              startMenu(); 
          }

        );
      });
    }
    
    

    // TODO: update EMPLOYEE
      function updateEmployee(){
        connection.query('SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id;',
        function (err, res) {
          if (err) throw err
            console.table(res)
              inquirer.prompt([
                {
                  name: "lastName", 
                    type: 'list', 
                      message: `What is this new employee's title?`,
                        choices: function () {
                          var lastName = [];
                            for (var i = 0; i < res.length; i++) {
                              lastName.push(res[i].last_name);
                            }
                            return lastName;
                        }, 
                  message: `What is the employees lastName?`,
                },
                {
                  name: "role",
                  message: "What is the new Role for this employee?",
                  type: "input",
                },

              ]).then(function (res) {
                  connection.query("UPDATE employee set ? where ?",
                  [
                    {
                      last_name: res.lastName,
                      role_id: res.role,
                      manager_id: res.manager_id,
                    },
                    { id: res.id },
                  ],
                    function (err) {
                      if (err) throw err
                        console.table(res)
                          startMenu();
                    }
                  )
              });
      });
    }

    
    // TODO: ADD EMPLOYEE! oop
    function addEmployee () { 
      
      inquirer.prompt([

        
        {
          name: 'firstName',
            type: 'input', 
              message: 'Whats the employees First Name?'
        },
        {
          name: 'lastName',
            type: 'input', 
              message: 'Whats the employees Last Name'
        },
        {
          type: "input",
          message:
            "Enter new employees roleID ('1:Human Resources, 2:Shipping, 3:Loss Prevention, 4:Grocery, 5:Sales'):",
          name: "Role",
        },
  
        {
          type: "input",
          message: "Enter new employees managerID:",
          name: "managerID",
        },

            
      ]).then (function (val){
            connection.query('INSERT INTO employee SET ?',
              {
                first_name: val.firstName,
                  last_name: val.lastName,
                    manager_id : res.managerId,
                      role_id: res.role 
              },
                function (err) {
                  if (err) throw err
                    console.table(val)
                    startMenu();
                }
            )
      })
    }


    // TODO add a ROLE
    function addRole () {
      connection.query('SELECT role.title AS Title, role.salary AS Salary FROM role', 
        function (err, res) {
          inquirer.prompt([
            {
              name: 'Title',
                type: 'input',
                  message: 'Whats role do you want to add?'
            },
              {
                name: 'Salary',
                  type: 'input',
                    message: 'Whats the Salary?'
              }
          ]).then(function (res) {
            connection.query('INSERT INTO role SET ?', 
            {
              title: res.Title,
                salary: res.Salary,
            },
              function (err){
                if (err) throw err
                  console.table(res);
                    startMenu();
              }
            )
          });
        }
      );
    }
